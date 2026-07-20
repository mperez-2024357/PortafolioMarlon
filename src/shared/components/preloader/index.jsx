import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Loader from './Loader'
import macModel from '../../../assets/mac-draco.glb?url'

const PreloaderContext = createContext(null)

export const usePreloader = () => {
  const ctx = useContext(PreloaderContext)
  if (!ctx) {
    throw new Error('usePreloader debe usarse dentro de Preloader')
  }
  return ctx
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

/**
 * Stream a binary asset and report 0–1 progress.
 * When Content-Length is missing, progress is estimated and capped under 0.9
 * until the stream completes.
 */
async function fetchWithProgress(url, onProgress) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Asset failed: ${url} (${response.status})`)
  }

  const total = Number(response.headers.get('Content-Length')) || 0

  if (!response.body) {
    await response.arrayBuffer()
    onProgress(1)
    return
  }

  const reader = response.body.getReader()
  let received = 0

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    received += value.byteLength
    if (total > 0) {
      onProgress(Math.min(1, received / total))
    } else {
      onProgress(Math.min(0.9, received / (received + 250_000)))
    }
  }

  onProgress(1)
}

/**
 * Full-screen intro while the hero 3D GLB downloads into the browser cache.
 * Does not import drei/three so the main bundle stays light; AnimatedBackground
 * still uses useGLTF which will hit HTTP cache after this warm-up.
 */
export default function Preloader({ children, disabled = false, minDurationMs = 1400 }) {
  const [isLoading, setIsLoading] = useState(!disabled)
  const [exiting, setExiting] = useState(false)
  const [loadingPercent, setLoadingPercent] = useState(0)
  const finishedRef = useRef(false)
  const assetProgressRef = useRef(0)
  const sceneReadyRef = useRef(false)
  const startRef = useRef(typeof performance !== 'undefined' ? performance.now() : Date.now())

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    setLoadingPercent(100)
    setExiting(true)
    window.setTimeout(() => setIsLoading(false), 520)
  }, [])

  const bypassLoading = useCallback(() => {
    assetProgressRef.current = 1
    sceneReadyRef.current = true
    finish()
  }, [finish])

  /** Canvas / model can confirm it is interactive (optional). */
  const markSceneReady = useCallback(() => {
    sceneReadyRef.current = true
    assetProgressRef.current = Math.max(assetProgressRef.current, 1)
  }, [])

  useEffect(() => {
    if (disabled) {
      setIsLoading(false)
      return undefined
    }

    let cancelled = false
    let rafId = 0
    startRef.current = performance.now()
    finishedRef.current = false
    assetProgressRef.current = 0
    sceneReadyRef.current = false

    const assetPromise = fetchWithProgress(macModel, (ratio) => {
      if (!cancelled) {
        assetProgressRef.current = Math.max(assetProgressRef.current, ratio)
      }
    })
      .then(() => {
        if (!cancelled) assetProgressRef.current = 1
      })
      .catch(() => {
        // Still open the app; the scene will retry its own load.
        if (!cancelled) assetProgressRef.current = 1
      })

    const tick = () => {
      if (cancelled || finishedRef.current) return

      const elapsed = performance.now() - startRef.current
      const timeRatio = Math.min(1, elapsed / minDurationMs)
      // Soft timer up to 55%; real GLB download owns the rest up to 98%.
      const soft = easeOutCubic(timeRatio) * 0.55
      const hard = assetProgressRef.current * 0.43
      setLoadingPercent(Math.round(Math.min(0.98, soft + hard) * 100))

      const minTimeMet = elapsed >= minDurationMs
      const assetsReady =
        assetProgressRef.current >= 0.999 || sceneReadyRef.current

      if (minTimeMet && assetsReady) {
        finish()
        return
      }

      // Grace: if the network hangs, free the UI after min + 2.5s.
      if (elapsed >= minDurationMs + 2500) {
        finish()
        return
      }

      // Absolute safety net.
      if (elapsed >= 8000) {
        finish()
        return
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      void assetPromise
    }
  }, [disabled, minDurationMs, finish])

  useEffect(() => {
    if (!isLoading) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isLoading])

  const value = useMemo(
    () => ({
      isLoading,
      loadingPercent,
      bypassLoading,
      markSceneReady,
    }),
    [isLoading, loadingPercent, bypassLoading, markSceneReady],
  )

  return (
    <PreloaderContext.Provider value={value}>
      {isLoading && <Loader percent={loadingPercent} exiting={exiting} />}
      {children}
    </PreloaderContext.Provider>
  )
}

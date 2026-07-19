import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 3000

function createSpherePositions(count, radius) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = radius * (0.8 + Math.random() * 0.2)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
  }
  return positions
}

function createTorusPositions(count, R, r) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const u = Math.random() * Math.PI * 2
    const v = Math.random() * Math.PI * 2
    positions[i * 3] = (R + r * Math.cos(v)) * Math.cos(u)
    positions[i * 3 + 1] = (R + r * Math.cos(v)) * Math.sin(u)
    positions[i * 3 + 2] = r * Math.sin(v)
  }
  return positions
}

function createHelixPositions(count, radius, height) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const t = i / count
    const angle = t * Math.PI * 8
    const r = radius + (Math.random() - 0.5) * 0.3
    positions[i * 3] = r * Math.cos(angle)
    positions[i * 3 + 1] = (t - 0.5) * height
    positions[i * 3 + 2] = r * Math.sin(angle)
  }
  return positions
}

export default function ParticleMorphField() {
  const meshRef = useRef()
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const { viewport } = useThree()

  const shapes = useMemo(() => [
    createSpherePositions(PARTICLE_COUNT, 3),
    createTorusPositions(PARTICLE_COUNT, 2.5, 1),
    createHelixPositions(PARTICLE_COUNT, 2, 6),
  ], [])

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const sizes = new Float32Array(PARTICLE_COUNT)

    const colorA = new THREE.Color('#00D2FF')
    const colorB = new THREE.Color('#2563EB')

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = i / PARTICLE_COUNT
      const color = colorA.clone().lerp(colorB, t)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      sizes[i] = 0.02 + Math.random() * 0.03
    }

    return { positions, colors, sizes }
  }, [])

  const targetRef = useRef(new Float32Array(PARTICLE_COUNT * 3))
  const shapeIndexRef = useRef(0)
  const morphTimerRef = useRef(0)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    morphTimerRef.current += delta
    if (morphTimerRef.current > 4) {
      morphTimerRef.current = 0
      shapeIndexRef.current = (shapeIndexRef.current + 1) % shapes.length
      targetRef.current = shapes[shapeIndexRef.current]
    }

    const target = targetRef.current.length ? targetRef.current : shapes[0]
    const geo = meshRef.current.geometry
    const posAttr = geo.attributes.position
    const arr = posAttr.array
    const time = state.clock.elapsedTime

    const mx = (state.pointer.x * viewport.width) / 2
    const my = (state.pointer.y * viewport.height) / 2

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const tx = target[i3]
      const ty = target[i3 + 1]
      const tz = target[i3 + 2]

      arr[i3] += (tx - arr[i3]) * 0.02
      arr[i3 + 1] += (ty - arr[i3 + 1]) * 0.02
      arr[i3 + 2] += (tz - arr[i3 + 2]) * 0.02

      const dx = arr[i3] - mx
      const dy = arr[i3 + 1] - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 2) {
        const force = (2 - dist) * 0.08
        arr[i3] += dx * force * 0.1
        arr[i3 + 1] += dy * force * 0.1
      }

      arr[i3 + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.002
    }

    posAttr.needsUpdate = true
    meshRef.current.rotation.y += delta * 0.05
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

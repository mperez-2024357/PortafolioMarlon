import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const GRID_SIZE = 60
const SPACING = 0.25

export default function WaveGrid() {
  const meshRef = useRef()
  const { viewport } = useThree()

  const { positions, indices, colors } = useMemo(() => {
    const count = GRID_SIZE * GRID_SIZE
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const indices = []

    const colorA = new THREE.Color('#2563EB')
    const colorB = new THREE.Color('#00D2FF')

    const half = (GRID_SIZE - 1) * SPACING / 2

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const idx = i * GRID_SIZE + j
        positions[idx * 3] = j * SPACING - half
        positions[idx * 3 + 1] = 0
        positions[idx * 3 + 2] = i * SPACING - half

        const t = idx / count
        const c = colorA.clone().lerp(colorB, t)
        colors[idx * 3] = c.r
        colors[idx * 3 + 1] = c.g
        colors[idx * 3 + 2] = c.b

        if (i < GRID_SIZE - 1 && j < GRID_SIZE - 1) {
          const a = idx
          const b = idx + 1
          const c = idx + GRID_SIZE
          const d = idx + GRID_SIZE + 1
          indices.push(a, b, c)
          indices.push(b, d, c)
        }
      }
    }

    return {
      positions,
      indices: new Uint32Array(indices),
      colors,
    }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    const geo = meshRef.current.geometry
    const posAttr = geo.attributes.position
    const arr = posAttr.array
    const time = state.clock.elapsedTime

    const mx = (state.pointer.x * viewport.width) / 2
    const mz = (-state.pointer.y * viewport.height) / 2

    const half = (GRID_SIZE - 1) * SPACING / 2

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const idx = i * GRID_SIZE + j
        const x = j * SPACING - half
        const z = i * SPACING - half

        let y = Math.sin(x * 0.8 + time * 0.8) * 0.3
        y += Math.sin(z * 0.6 + time * 0.6) * 0.3
        y += Math.sin((x + z) * 0.5 + time * 1.2) * 0.15

        const dx = x - mx
        const dz = z - mz
        const dist = Math.sqrt(dx * dx + dz * dz)
        if (dist < 3) {
          y += Math.sin(dist * 2 - time * 3) * (3 - dist) * 0.15
        }

        arr[idx * 3 + 1] = y
      }
    }

    posAttr.needsUpdate = true
    geo.computeVertexNormals()
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI * 0.35, 0, 0]} position={[0, -1, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={GRID_SIZE * GRID_SIZE}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={GRID_SIZE * GRID_SIZE}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          count={indices.length}
          array={indices}
          itemSize={1}
        />
      </bufferGeometry>
      <meshBasicMaterial
        vertexColors
        wireframe
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

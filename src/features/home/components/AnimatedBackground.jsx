import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, useGLTF, Stars, Sparkles } from "@react-three/drei";
import { MathUtils } from "three";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { usePreloader } from "../../../shared/components/preloader";

import macModel from "../../../assets/mac-draco.glb?url";

/**
 * Purpose: MacBook GLB model with lid animation
 * Draw calls: mesh-based model (depends on GLB contents)
 * Assets: src/assets/mac-draco.glb
 */
function MacModel({ open, hinge, ...props }) {
  const group = useRef(null);
  const { nodes, materials } = useGLTF(macModel);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const time = clock.elapsedTime;
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, open ? Math.cos(time / 10) / 10 + 0.25 : 0, 0.1);
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, open ? Math.sin(time / 10) / 4 : 0, 0.1);
    group.current.rotation.z = MathUtils.lerp(group.current.rotation.z, open ? Math.sin(time / 10) / 10 : 0, 0.1);
    group.current.position.y = MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(time)) / 3 : -4.3, 0.1);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <a.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes["Cube008"].geometry} />
          <mesh material={materials["matte.001"]} geometry={nodes["Cube008_1"].geometry} />
          <mesh material={materials["screen.001"]} geometry={nodes["Cube008_2"].geometry} />
        </group>
      </a.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes["Cube002"].geometry} />
        <mesh material={materials.trackpad} geometry={nodes["Cube002_1"].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}

/**
 * Purpose: Scene lighting, environment, and interaction for the MacBook
 * Draw calls: adds environment + contact shadows
 * Assets: src/assets/mac-draco.glb
 */
function MacScene({ open, springOpen, hinge, onToggle }) {
  const particlesRef = useRef(null);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      // Rotamos el grupo de estrellas y partículas muy letamente
      particlesRef.current.rotation.y -= delta * 0.008;
      particlesRef.current.rotation.x -= delta * 0.004;
    }
  });

  return (
    <>
      <ambientLight intensity={0.65} />
      <a.pointLight position={[10, 10, 10]} intensity={1.6} color={springOpen.to([0, 1], ["#E2E8F0", "#00D2FF"])} />
      
      {/* Sistema de partículas y estrellas espaciales en animación sutil */}
      <group ref={particlesRef}>
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />
        <Sparkles count={60} scale={20} size={2.5} speed={0.2} opacity={0.5} position={[-5, 2, 0]} color="#00D2FF" noise={1} />
      </group>

      <Suspense fallback={null}>
        <group
          rotation={[0, Math.PI, 0]}
          position={[-5.2, 2.2, 5.2]}
          scale={1.35}
          onClick={(event) => (event.stopPropagation(), onToggle())}
        >
          <MacModel open={open} hinge={hinge} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} opacity={0.42} scale={18} blur={1.9} far={4.7} />
    </>
  );
}

/**
 * Fires once the GLB materials/geometry are in memory so the preloader
 * can finish if the intro is still waiting on scene readiness.
 */
function SceneReadySignal() {
  const { markSceneReady } = usePreloader();
  // Touch the GLTF so this only mounts after the model resolved under Suspense.
  useGLTF(macModel);

  useEffect(() => {
    markSceneReady();
  }, [markSceneReady]);

  return null;
}

export default function AnimatedBackground() {
  const [open, setOpen] = useState(false);
  const spring = useSpring({ open: Number(open) });

  return (
    <div className="animated-bg">
      <Canvas
        shadows
        className="animated-bg__canvas"
        camera={{ position: [0, 0, -24], fov: 35 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <SceneReadySignal />
          <MacScene
            open={open}
            springOpen={spring.open}
            hinge={spring.open.to([0, 1], [1.575, -0.425])}
            onToggle={() => setOpen((value) => !value)}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(macModel);

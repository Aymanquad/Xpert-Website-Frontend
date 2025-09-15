import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import {
  Float,
  Icosahedron,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
  Points,
  PointMaterial,
} from '@react-three/drei'

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<any>(null)
  const { viewport, mouse } = useThree()
  useFrame(() => {
    if (!group.current) return
    const x = (mouse.x * viewport.width) / 20
    const y = (mouse.y * viewport.height) / 20
    group.current.rotation.y += (x - group.current.rotation.y) * 0.06
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.06
  })
  return <group ref={group}>{children}</group>
}

function GlassGem() {
  const gem = useRef<any>(null)
  useFrame((_, d) => {
    if (gem.current) gem.current.rotation.y += d * 0.4
  })
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.9}>
      <Icosahedron ref={gem} args={[1.0, 0]}>
        <MeshTransmissionMaterial
          thickness={0.7}
          roughness={0.15}
          anisotropy={0.2}
          chromaticAberration={0.04}
          iridescence={0.6}
          iridescenceIOR={1.7}
          attenuationDistance={1.5}
          attenuationColor="#7c3aed"
          color="#a78bfa"
          distortionScale={0.2}
          temporalDistortion={0.25}
        />
      </Icosahedron>
    </Float>
  )
}

function Dust() {
  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3)
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 10
      arr[i + 1] = (Math.random() - 0.5) * 10
      arr[i + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])
  return (
    <Points positions={positions} stride={3} limit={600} frustumCulled>
      <PointMaterial transparent color="#ffffff" size={0.01} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

export default function Orb() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="h-80 w-80 md:h-[28rem] md:w-[28rem]">
        <Canvas camera={{ position: [0, 0, 3.4], fov: 45 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <ParallaxGroup>
              <Environment preset="city" resolution={256}>
                <Lightformer intensity={1} position={[0, 2, 3]} scale={[10, 10, 1]} color="#a78bfa" />
              </Environment>
              <Dust />
              <GlassGem />
            </ParallaxGroup>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}



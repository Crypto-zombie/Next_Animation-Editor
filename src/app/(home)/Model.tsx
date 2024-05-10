import { useAdjust } from '@/store/useAdjust'

export default function Model() {
  const { x, y, status } = useAdjust()
  return (
    <mesh
      position={[x, y, 0]}
      visible={!status}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial color={'pink'} />
    </mesh>
  )
}

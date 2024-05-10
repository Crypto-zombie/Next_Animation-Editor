import { useAdjust } from '@/store/useAdjust'

export default function AnimateModel() {
  const { x, y } = useAdjust()
  return (
    <mesh position={[x, y, 0]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial color={'pink'} />
    </mesh>
  )
}

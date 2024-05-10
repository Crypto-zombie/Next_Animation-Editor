/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAdjust } from '@/store/useAdjust'
import { useEffect, useRef } from 'react'

const AnimateModel = () => {
  const meshRef = useRef<any>(null)
  const intervalRef = useRef<any>(null)
  const { animList, status, setStatus } = useAdjust()

  useEffect(() => {
    if (status && meshRef.current) {
      let currentIndex = 0
      meshRef.current.position.x = animList[currentIndex].X
      meshRef.current.position.y = animList[currentIndex].Y
      const animate = () => {
        if (currentIndex < animList.length - 1) {
          const currentPos = animList[currentIndex]
          const nextPos = animList[currentIndex + 1]
          const deltaTime = (nextPos.DeltaTime - currentPos.DeltaTime) * 50
          const deltaX = (nextPos.X - currentPos.X) / deltaTime
          const deltaY = (nextPos.Y - currentPos.Y) / deltaTime

          let frame = 0
          intervalRef.current = setInterval(() => {
            if (frame < deltaTime) {
              meshRef.current.position.x += deltaX
              meshRef.current.position.y += deltaY
              frame++
            } else {
              clearInterval(intervalRef.current)
              currentIndex++
              animate()
            }
          }, 20)
        } else {
          setStatus(false)
        }
      }

      animate()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [animList, status, setStatus])

  return (
    <mesh
      ref={meshRef}
      visible={status}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial color={'pink'} />
    </mesh>
  )
}

export default AnimateModel

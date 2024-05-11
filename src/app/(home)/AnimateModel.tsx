/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAdjust } from '@/store/useAdjust'
import { useEffect, useRef } from 'react'

const AnimateModel = () => {
  const meshRef = useRef<any>(null)
  const intervalRef = useRef<any>(null)
  const frame = useRef<number>(0)
  const currentIndex = useRef<number>(0)
  const { x, y, animList, status, setStatus } = useAdjust()

  useEffect(() => {
    if (status && meshRef.current) {
      if (currentIndex.current === 0 && frame.current === 0) {
        meshRef.current.position.x = animList[currentIndex.current].X
        meshRef.current.position.y = animList[currentIndex.current].Y
      }
      const animate = () => {
        if (currentIndex.current < animList.length - 1) {
          const currentPos = animList[currentIndex.current]
          const nextPos = animList[currentIndex.current + 1]
          const deltaTime = (nextPos.DeltaTime - currentPos.DeltaTime) * 50
          const deltaX = (nextPos.X - currentPos.X) / deltaTime
          const deltaY = (nextPos.Y - currentPos.Y) / deltaTime

          intervalRef.current = setInterval(() => {
            if (frame.current < deltaTime) {
              meshRef.current.position.x += deltaX
              meshRef.current.position.y += deltaY
              frame.current++
              console.log('frame:', frame.current)
            } else {
              frame.current = 0
              clearInterval(intervalRef.current)
              currentIndex.current++
              animate()
            }
          }, 20)
        } else {
          currentIndex.current = 0
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
  }, [status]) // Include isPaused in the dependency array

  // Function to toggle pause state

  return (
    <mesh
      position={[x, y, 0]}
      ref={meshRef}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial color={'pink'} />
    </mesh>
  )
}

export default AnimateModel

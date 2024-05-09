import React from 'react'

export default function AnimateModel() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshStandardMaterial color={'pink'} />
    </mesh>
  )
}

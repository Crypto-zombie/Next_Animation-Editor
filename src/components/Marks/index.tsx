import React from 'react'
import { useAdjust } from '@/store/useAdjust'

export default function Marks() {
  const { animList } = useAdjust()
  console.log('animList', animList)
  return (
    <div className="w-60 -translate-y-3">
      {animList.map((item, index) => (
        <div
          key={index}
          className="absolute h-2 w-[2px] bg-blue-200"
          style={{ left: parseFloat((item.DeltaTime / 5).toString()) * 240 + 'px' }}
        />
      ))}
    </div>
  )
}

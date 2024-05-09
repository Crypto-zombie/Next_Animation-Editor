/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Time from '@/components/Time'

export default function Panel() {
  return (
    <div className="absolute bottom-5 bg-black bg-opacity-50 p-4 text-white">
      <div className="flex items-center justify-center space-x-2">
        <Time />
      </div>
    </div>
  )
}

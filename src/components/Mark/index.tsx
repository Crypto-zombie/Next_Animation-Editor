import React, { memo } from 'react'

type Props = {
  deltaTime: number
}
const Mark = ({ deltaTime }: Props) => (
  <div
    className="absolute h-2 w-[2px] bg-blue-200"
    style={{ left: parseFloat((deltaTime / 5).toString()) * 240 + 'px' }}
  />
)

export default memo(Mark)

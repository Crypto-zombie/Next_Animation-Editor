/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomSlider from '@/components/Slider'
import { useAdjust } from '@/store/useAdjust'

export default function Time() {
  const { time, setTime } = useAdjust()
  return (
    <CustomSlider
      max={5}
      min={0}
      step={0.1}
      text={'Timeline'}
      value={time}
      defaultValue={time ?? 1}
      onChange={(nextValues: any) => {
        setTime(nextValues)
      }}
    />
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomSlider from '@/components/Slider'
import { useAdjust } from '@/store/useAdjust'

export default function YSlider() {
  const { y, setY } = useAdjust()
  return (
    <CustomSlider
      max={3}
      min={-3}
      step={0.1}
      text={'Y'}
      value={y}
      defaultValue={y ?? 1}
      onChange={(nextValues: any) => {
        setY(nextValues)
      }}
    />
  )
}

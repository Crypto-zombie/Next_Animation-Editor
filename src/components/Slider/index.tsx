import 'rc-slider/assets/index.css'
import React from 'react'
import Slider from 'rc-slider'
import classNames from 'classnames'

type Props = {
  className?: string
  defaultValue?: number
  max?: number
  min?: number
  onChange?: (value: number | number[]) => void
  step?: number
  text?: string
  disable?: boolean
  value?: number
}

const CustomSlider: React.FC<Props> = ({
  className = '',
  defaultValue,
  max = 100,
  min = 0,
  onChange = () => {},
  step = 1,
  text = '',
  value = 5,
  disable = false
}) => (
  <div className="w-60">
    <div className="flex flex-row  justify-between">
      <div>{text}</div>
      <div>{value}</div>
    </div>
    <Slider
      className={classNames(className)}
      defaultValue={defaultValue}
      max={max}
      min={min}
      onChange={onChange}
      step={step}
      disabled={disable}
    />
  </div>
)

export default CustomSlider

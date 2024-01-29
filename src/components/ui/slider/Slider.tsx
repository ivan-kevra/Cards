import { useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './Slider.module.scss'
import { Typography } from '../typography/Typography'

export const Slider = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  return (
    <div className={s.container}>
      <Typography className={s.value} variant={'body1'}>
        {value1}
      </Typography>
      <SliderRadix.Root
        className={s.sliderRoot}
        max={100}
        onValueChange={([value1, value2]) => {
          setValue1(value1)
          setValue2(value2)
        }}
        step={1}
        value={[value1, value2]}
      >
        <SliderRadix.Track className={s.sliderTrack}>
          <SliderRadix.Range className={s.sliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.sliderThumb} />
        <SliderRadix.Thumb className={s.sliderThumb} />
      </SliderRadix.Root>
      <Typography className={s.value} variant={'body1'}>
        {value2}
      </Typography>
    </div>
  )
}

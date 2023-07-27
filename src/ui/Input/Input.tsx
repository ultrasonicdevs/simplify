import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'

import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph'

export enum InputTypeVariants {
  'datetime-local',
  password,
  number,
  email,
  month,
  week,
  date,
  text,
  time,
}

export type InputProps = PolymorphProps<'input'> & {
  type?: keyof typeof InputTypeVariants
  children?: never
}

const Input: ForwardRefExoticComponent<Omit<InputProps, 'ref'> & RefAttributes<HTMLElement>> =
  forwardRef((props, ref) => {
    const { type = 'text', ...otherProps } = props

    return <Polymorph ref={ref} as="input" type={type} {...otherProps} />
  })

export default Input
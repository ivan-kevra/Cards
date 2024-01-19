import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../ui/checkbox/Checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, defaultValue, disabled, name, rules, shouldUnregister, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return <Checkbox checked={value} disabled={disabled} onValueChange={onChange} {...rest} />
}

import { ChangeEventHandler, FocusEventHandler, HTMLAttributes } from 'react'

import { InputWrapper, Input } from './styles'

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  value?: string
}

export function InputText(props: InputTextProps) {
  return (
    <InputWrapper>
      <Input {...props} />
    </InputWrapper>
  )
}

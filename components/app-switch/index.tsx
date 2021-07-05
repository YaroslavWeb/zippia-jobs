import { useCallback } from 'react'

import { Switch, SwitchOption } from './styles'

interface InputSwitchProps {
  activeValue: boolean
  options: [string, string]
  onChange: (option: boolean) => void
}

export function AppSwitch({
  activeValue,
  options,
  onChange,
}: InputSwitchProps) {
  const handleActive = useCallback(
    (item) => () => {
      onChange(options[0] === item)
    },
    [onChange, activeValue]
  )

  return (
    <Switch>
      {options.map((item, idx) => (
        <SwitchOption
          key={idx}
          isActive={Boolean(idx) !== activeValue}
          onClick={handleActive(item)}
        >
          {item}
        </SwitchOption>
      ))}
    </Switch>
  )
}

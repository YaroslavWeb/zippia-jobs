import { useCallback, useEffect, useState } from 'react'

import { Switch, SwitchOption } from './styles'

interface InputSwitchProps {
  options: [string, string]
  onChange: (checked: boolean) => void
}

export function AppSwitch({ options, onChange }: InputSwitchProps) {
  const [activeValue, setActiveValue] = useState(options[0])

  const handleActive = useCallback(
    (item) => () => {
      setActiveValue(item)
    },
    []
  )

  useEffect(() => {
    onChange(activeValue === options[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeValue])

  return (
    <Switch>
      {options.map((item, idx) => (
        <SwitchOption
          key={idx}
          isActive={activeValue === item}
          onClick={handleActive(item)}
        >
          {item}
        </SwitchOption>
      ))}
    </Switch>
  )
}

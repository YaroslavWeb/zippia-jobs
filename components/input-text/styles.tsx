import styled from 'styled-components'

import theme from 'styles/theme'

export const INPUT_HEIGHT = 48

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 210px;
  height: ${INPUT_HEIGHT}px;
  font-size: 16px;
  line-height: 22px;
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  font-family: 'Abel', Arial, sans-serif;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 8px 0 0 8px;
  outline: 0;

  ::placeholder {
    color: ${theme.colors.secondary};
  }
`

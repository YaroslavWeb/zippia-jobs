import { darken } from 'polished'
import styled from 'styled-components'

import theme from 'styles/theme'

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  position: relative;
  white-space: nowrap;
  outline: transparent solid 2px;
  outline-offset: 2px;
  line-height: 1.2;
  font-size: 14px;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  border-radius: 0 8px 8px 0;
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;
  user-select: none;

  transition: 0.2s ease-in-out background, 0.2s ease-in-out opacity;

  &:hover {
    background: ${darken(0.05, theme.colors.primary)};
  }

  &:active {
    background: ${darken(0.1, theme.colors.primary)};
  }
`

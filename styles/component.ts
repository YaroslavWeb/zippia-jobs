// Simple components

import styled from 'styled-components'

interface DividerProps {
  height?: number
  heightMob?: number
}

export const Divider = styled.div<DividerProps>`
  height: ${(props) => props.height || 24}px;

  @media ${(props) => props.theme.media.large} {
    height: ${(props) => props.heightMob || 12}px;
  }
`

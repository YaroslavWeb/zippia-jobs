import styled from 'styled-components'
import theme from 'styles/theme'

export const HEADER_HEIGHT = 60
export const FOOTER_HEIGHT = 180

export const LayoutHeader = styled.header`
  height: ${HEADER_HEIGHT}px;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
`

export const LayoutContainer = styled.main`
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  padding: 16px;
  background: ${(props) => props.theme.colors.white};
`

export const LayoutFooter = styled.footer`
  height: ${FOOTER_HEIGHT}px;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
`

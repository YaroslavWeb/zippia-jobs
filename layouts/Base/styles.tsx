import styled from 'styled-components'

import theme from 'styles/theme'

export const LayoutContainer = styled.main`
  min-height: calc(
    100vh - ${theme.sizes.navbar.height}px - ${theme.sizes.footer.height}px
  );
  padding: 16px;
  background: ${(props) => props.theme.colors.white};
`

import styled from 'styled-components'

import theme from 'styles/theme'

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  height: ${theme.sizes.navbar.height}px;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  padding: 0 16px;
`

export const NavbarBrand = styled.span`
  font-size: 24px;

  & > sup {
    color: ${theme.colors.orange};
  }
`

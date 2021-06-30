import styled from 'styled-components'
import { rgba } from 'polished'

import theme from 'styles/theme'

export const Carousel = styled.div`
  width: 100%;

  @media ${theme.media.small} {
    margin-top: 12px;
  }
`
export const CarouselWrapper = styled.div<{ gap: number }>`
  display: flex;
  width: 100%;
  padding: 8px 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-points-x: repeat(100%);

  & > *:not(:last-child) {
    scroll-snap-align: start;
    margin-right: ${(props) => props.gap}px;
  }

  ::-webkit-scrollbar {
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${rgba(theme.colors.secondary, 0.5)};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${rgba(theme.colors.secondary, 0.9)};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondary};
  }
`

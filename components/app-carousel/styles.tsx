import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { motion } from 'framer-motion'

import theme from 'styles/theme'

export const SLIDE_WIDTH = 280
export const SLIDE_GAP = 16

export const Carousel = styled.div`
  width: 100%;

  @media ${theme.media.small} {
    margin-top: 12px;
  }
`

interface CarouselWrapperProps {
  isCompact: boolean
  totalSlides: number
}

export const CarouselWrapper = styled.div<CarouselWrapperProps>`
  display: grid;
  gap: ${SLIDE_GAP}px;
  grid-auto-flow: column;
  width: 100%;
  padding: 8px 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-points-x: repeat(100%);

  ${(props) =>
    props.isCompact
      ? css`
          grid: 1fr / repeat(${props.totalSlides}, ${SLIDE_WIDTH}px);
        `
      : css`
          grid: 1fr / repeat(auto-fill, minmax(${SLIDE_WIDTH}px, 1fr));
        `}

  & > * {
    scroll-snap-align: start;
    height: 280px;
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

export const CarouselNavigation = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CarouselArrows = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
`
export const CarouselArrow = styled(motion.span)`
  font-size: 32px;
  user-select: none;
  cursor: pointer;
`

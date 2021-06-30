import { PropsWithChildren } from 'react'

import { Carousel, CarouselWrapper } from './styles'

interface CarouselProps {
  gap: number
}

// Parody to carousel
export function AppCarousel({
  children,
  gap,
}: PropsWithChildren<CarouselProps>) {
  return (
    <Carousel>
      <CarouselWrapper gap={gap}>{children}</CarouselWrapper>
    </Carousel>
  )
}

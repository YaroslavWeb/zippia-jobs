import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { AnimatePresence } from 'framer-motion'

import { AppSwitch } from 'components/app-switch'
import {
  Carousel,
  CarouselWrapper,
  CarouselNavigation,
  CarouselArrows,
  CarouselArrow,
  SLIDE_WIDTH,
} from './styles'

interface CarouselProps {}

export function AppCarousel({ children }: PropsWithChildren<CarouselProps>) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderWidth, setSliderWidth] = useState<number>(0)
  const [totalSlides, setTotalSlides] = useState(10)
  const [isCompact, setCompact] = useState(true)
  const [isArrows, setArrows] = useState(false)

  const scrollToSlide = useCallback((elementWidth) => {
    sliderRef.current?.scrollTo({
      left: elementWidth + sliderRef.current.scrollLeft,
      behavior: 'smooth',
    })
  }, [])

  const prev = useCallback(() => {
    scrollToSlide(-SLIDE_WIDTH)
  }, [scrollToSlide])

  const next = useCallback(() => {
    scrollToSlide(SLIDE_WIDTH)
  }, [scrollToSlide])

  const handleChangeVisible = useCallback((checked: boolean) => {
    setCompact(checked)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const offsetWidth = sliderRef.current.offsetWidth
        // Hide||show navigation
        setSliderWidth(offsetWidth)
      }
    }
    setTotalSlides(sliderRef.current?.children?.length!)
    handleResize()
    window.addEventListener?.('resize', handleResize)
    return () => window.removeEventListener?.('resize', handleResize)
  }, [sliderWidth])

  useEffect(() => {
    setTotalSlides(sliderRef.current?.children?.length!)
    const offsetWidth = sliderRef.current?.offsetWidth
    const scrollWidth = sliderRef.current?.scrollWidth
    setArrows(offsetWidth !== scrollWidth)
  }, [sliderWidth])

  console.log(totalSlides)

  return (
    <Carousel>
      <CarouselNavigation>
        <AppSwitch
          activeValue={isCompact}
          options={['Compact', 'List']}
          onChange={handleChangeVisible}
        />
        <AnimatePresence>
          {isCompact && isArrows && (
            <CarouselArrows
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <CarouselArrow onClick={prev} whileTap={{ scale: 0.95 }}>
                ⬅️
              </CarouselArrow>
              <CarouselArrow onClick={next} whileTap={{ scale: 0.95 }}>
                ➡️
              </CarouselArrow>
            </CarouselArrows>
          )}
        </AnimatePresence>
      </CarouselNavigation>
      <CarouselWrapper
        ref={sliderRef}
        isCompact={isCompact}
        totalSlides={totalSlides}
      >
        <AnimatePresence>{children}</AnimatePresence>
      </CarouselWrapper>
    </Carousel>
  )
}

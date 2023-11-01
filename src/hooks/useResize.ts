import { useEffect, useState } from 'react'

const screenMobile: number = 768

type TWindowSize = number
type THook = {
  width: TWindowSize
  isScreenDesktop: boolean
  isScreenMobile: boolean
}

export const useResize = (): THook => {
  const initSize: TWindowSize = window.innerWidth

  const [width, setWidth] = useState<TWindowSize>(initSize)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = (e: UIEvent) => {
        const window = e.target as Window
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [window])

  return {
    width,
    isScreenDesktop: width > screenMobile,
    isScreenMobile: width <= screenMobile
  }
}

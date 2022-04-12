import { useCallback, useEffect, useRef, useState } from 'react'

import { ArrowLeft, ArrowRight  } from '../../icons'
import './style.scss'

export function ItemsSlider({children }) {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [isShowingPrevButton, setIsShowingPrevButton] = useState(false)
    const [isShowingNextButton, setIsShowingNextButton] = useState(false)

    const [trackInlineStyle, setTrackinlineStyle] = useState({})

    const carouselContainerRef = useRef(null)
    const trackRef = useRef(null)

    const handleSliderSize = useCallback(() => {
        const itemsWidth = trackRef.current.offsetWidth
        
        setIsShowingNextButton(itemsWidth > window.innerWidth)
    }, [trackRef])

    useEffect(() => {
        handleSliderSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', handleSliderSize);

        return () => {
            window.removeEventListener('resize', handleSliderSize);
        };
    }, [handleSliderSize])

    const onPrevClick = () => {
        const carouselWidth = carouselContainerRef.current.offsetWidth
        let index = carouselIndex
        index-= 1

        setCarouselIndex(index)
        setIsShowingNextButton(true)

        if (index === 0) {
            setIsShowingPrevButton(false)
        }
        setTrackinlineStyle({
            transform: `translateX(-${index * carouselWidth}px)`
        })
    }

    const onNextClick = () => {
        const carouselWidth = carouselContainerRef.current.offsetWidth
        let index = carouselIndex 
        index+= 1
        setCarouselIndex(index)
        setIsShowingPrevButton(true)
        
        setTrackinlineStyle({
            transform: `translateX(-${index * carouselWidth}px)`
        })

        if(trackRef.current.offsetWidth - (index * carouselWidth) < carouselWidth) {
            setIsShowingNextButton(false)
        }
    }
    

    return (
        <div className="carousel-container" ref={carouselContainerRef}>
            <div className="carousel-container__inner">
                <div className="carousel-container__track" ref={trackRef} style={trackInlineStyle}>
                {children}
                </div>
            </div>
            <div className="carousel-container__controls">
                {isShowingPrevButton && (
                    <button className="carousel-container__controls__button carousel-container__controls__button--prev" onClick={onPrevClick}>
                    <ArrowLeft />
                    </button>
                )}
                {isShowingNextButton && (
                      <button className="carousel-container__controls__button carousel-container__controls__button--next"  onClick={onNextClick}>
                        <ArrowRight />
                      </button>
                )}
            </div>
            </div>
    )
}
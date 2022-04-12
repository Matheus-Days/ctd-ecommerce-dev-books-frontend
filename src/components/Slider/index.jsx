import { useState } from 'react'
import './style.scss'
import ButtonSlider from './components/ButtonSlider'

export function Slider({ items }) {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== items.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === items.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(items.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {items.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "container-slider__slide container-slider__slide--active" : "container-slider__slide"}
                    >
                        <img 
                            src={obj.image}
                            alt="Imagem do slider"
                        />
                    </div>
                )
            })}
            <ButtonSlider moveSlide={nextSlide} direction={"next"} />
            <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-slider__dots-wrapper">
                {Array.from({length: items.length}).map((item, index) => (
                    <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "container-slider__dots-wrapper__dot container-slider__dots-wrapper__dot--active" : "container-slider__dots-wrapper__dot"}
                    />
                ))}
            </div>
        </div>
    )
}
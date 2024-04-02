'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Slider() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 2000})])
    return (
        <div className="embla mx-auto h-56 w-full border rounded-lg" ref={emblaRef}>
            <div className="embla__container h-full">
                <div className="embla__slide flex items-center justify-center">Slide 1</div>
                <div className="embla__slide flex items-center justify-center">Slide 2</div>
                <div className="embla__slide flex items-center justify-center">Slide 3</div>
            </div>
        </div>
    )
}
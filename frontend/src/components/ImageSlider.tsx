/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import  "../styles/images.css"

type ImageSliderProps = {
    images: {
        url: string,
        alt: string,
    }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNxtImg() {
        setImageIndex(index => {
            if (index === images.length -1) return 0
            return index +1
        })
    }

    function showPrevImg() {
        setImageIndex(index => {
            if (index === 0) return images.length -1
            return index -1
        })
    }

    return(
        <section aria-label="Paintings by Kyle Phillips" style={{ width: "100%", height: "100%", position: "relative"}}>
            <div 
            style={{ 
                width: "100%", 
                height: "100%", 
                display:"flex", 
                overflow:"hidden"
                }}
            >
                {images.map(({url, alt}, index) => (
                    <img 
                        key={url} 
                        src={url}
                        alt={alt}
                        className="img-slider-img"
                        aria-hidden={imageIndex !== index}
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button 
            onClick={showPrevImg} 
            className="img-slider-btn" 
            style={{ left: 0 }}
            aria-label="View Previous Image"
            >
                <ArrowBigLeft aria-hidden/>
            </button>
            <button 
            onClick={showNxtImg} 
            className="img-slider-btn" 
            style={{ right: 0 }}
            aria-label="View Next Image"
            >
                <ArrowBigRight aria-hidden/>
            </button>
            <div style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem",
            }}
            >
                {images.map((_, index) => (
                    <button
                    key={index}
                    className="img-slider-dot-btn"
                    aria-label={`View Image ${index + 1}`}
                    onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? <CircleDot aria-hidden/> : <Circle aria-hidden/>}
                    </button>
                ))}
            </div>
        </section>
    )
}
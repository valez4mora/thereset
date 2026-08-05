import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import spa1 from "../assets/spa1.jpg";
import spa2 from "../assets/spa2.jpg";
import spa3 from "../assets/spa3.jpg";

const images = [spa1, spa2, spa3];


export function HeroCarousel() {
    const autoplay = useRef(
        Autoplay({
            delay: 5000, 
            stopOnInteraction: false,
        })
    );

    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [autoplay.current]
    );

    return (
        <div ref={emblaRef} className="overflow-hidden rounded-3xl shadow-xl">
            <div className="flex">
                {images.map((image, index) => (
                    <div key={index} className="min-w-full">
                        <img
                            src={image}
                            alt={`Spa ${index + 1}`}
                            className="h-[550px] w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

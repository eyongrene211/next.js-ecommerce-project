
import { useState }                  from "react";
import SlideComponent                from "../Slide/SlideComponent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipe }                  from '../../hooks/useSwipe';


const slideData = [
    {
          image: 'hero/bg-1.jpg',
    title: 'Design Your Dream Workspace',
    description: 'Discover curated collections of modern furniture and decor.',
    cta: 'Shop Now',
    },
    {
          image: 'hero/bg-2.jpg',
    title: "New Summer \ '25 Collection",
    description: 'Light, airy, and ready for the season. Explore the latest trends..',
    cta: 'Explore Collection',
    },
    {
          image: '/hero/pic3.jpg',
    title: 'Embrace Minimalist Living',
    description: 'Find beauty in simplicity with our minimalist essentials.',
    cta: 'Learn More',
    }
];

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slideData.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    {/**use custom swipe hook */ }
    const swipeHandlers = useSwipe(goToNext, goToPrev);

    return (
        <>
            <section
                className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden bg-gray-200"
                {...swipeHandlers} //Spread the touch even handlers on the section
            >
                {/**Slide Container */}
                <div className="w-full h-full">
                    {slideData.map((slide, index) => (
                        <SlideComponent
                            key={index}
                            data={slide}
                        isActive={index === currentIndex}/>
                    ))}

                </div>

                {/**Desktop  Navigation button */}
                 <div className="hidden md:flex absolute inset-0 justify-between items-center px-8 z-20">
          <button
            onClick={goToPrev}
            className="p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goToNext}
            className="p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

            </section>


            {/**Scoped CSS fro animation using Next.js's  built in styled-jsx */}
             <style >{`
        .slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(0.98);
          transition: opacity 0.8s ease, transform 0.8s ease;
          z-index: 1;
        }
        .slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }
        
        /* Staggered animation for the content */
        .slide-content {
            transition: opacity 0.6s ease, transform 0.6s ease;
            opacity: 0;
            transform: translateY(30px);
        }
        .active .slide-content {
            opacity: 1;
            transform: translateY(0);
        }
        .active .slide-content-title { transition-delay: 0.3s; }
        .active .slide-content-desc { transition-delay: 0.5s; }
        .active .slide-content-cta { transition-delay: 0.7s; }
      `}</style>
        </>

    );
};
export default HeroSlider;
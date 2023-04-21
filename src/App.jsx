import {LazyMotion, domAnimation, m} from 'framer-motion';
import {useState} from 'react';
import useKeypress from 'react-use-keypress';

import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  function nextSlide() {
    setSlideIndex((prevState) => (prevState + 1 === 4 ? 3 : prevState + 1));
    setPrevIndex(slideIndex);
  }

  function previousSlide() {
    setSlideIndex((prevState) => (prevState - 1 < 0 ? 0 : prevState - 1));
    setPrevIndex(slideIndex);
  }

  useKeypress('ArrowRight', () => nextSlide());
  useKeypress('ArrowLeft', () => previousSlide());
  useKeypress('ArrowUp', () => previousSlide());
  useKeypress('ArrowDown', () => nextSlide());

  return (
    <LazyMotion features={domAnimation} strict={true}>
      <div className='h-screen overflow-hidden relative  bg-black'>
        <m.div
          className='flex w-fit'
          animate={{
            x: `-${slideIndex * 100}vw`,
            transition: {duration: 0.7, ease: [0.32, 0.72, 0, 1]},
          }}
        >
          <SlideOne slideIndex={slideIndex} slidePos={0} />
          <SlideTwo
            prevIndex={prevIndex}
            slideIndex={slideIndex}
            slidePos={1}
          />
          <SlideThree />
          <SlideFour slideIndex={slideIndex} slidePos={3} />
        </m.div>

        <button
          onClick={previousSlide}
          className='absolute top-0 left-0 h-screen w-1/3 border-none outline-none z-40'
        >
          <span className='sr-only'>previous slide</span>
        </button>
        <button
          onClick={nextSlide}
          className='absolute top-0 right-0 h-screen w-1/3 border-none outline-none z-40'
        >
          <span className='sr-only'>next slide</span>
        </button>
      </div>
    </LazyMotion>
  );
}

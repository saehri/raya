import {m} from 'framer-motion';
import SlideContent from './SlideContent';

export default function SlideTwo({slideIndex, slidePos, prevIndex}) {
  const status = slideIndex === slidePos ? 'animate' : 'initial';

  return (
    <SlideContent>
      <m.div
        animate={status}
        className='h-full flex flex-col gap-8 items-center justify-center overflow-hidden'
      >
        <Image src='s2top' direction={prevIndex > slideIndex ? -50 : 50} />

        <m.h1
          className='relative z-30 font-tajawal uppercase text-3xl sm:text-5xl text-justify md:text-6xl'
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.9,
              },
            },
          }}
        >
          May Allah accept our deeds during the month of Ramadan and give us
          happiness and prosperity on this auspicious day.
        </m.h1>

        <Image src='s2bottom' direction={prevIndex > slideIndex ? 50 : -50} />
      </m.div>
    </SlideContent>
  );
}

function Image({src, direction}) {
  return (
    <div className='overflow-hidden'>
      <m.img
        variants={{
          initial: {
            x: direction,
            transition: {
              duration: 1,
            },
          },
          animate: {
            x: 0,
            transition: {
              duration: 1,
              ease: [0.65, 0.56, 0.72, 1.01],
            },
          },
        }}
        whileHover={{scale: 1.1}}
        src={`/${src}.webp`}
      />
    </div>
  );
}

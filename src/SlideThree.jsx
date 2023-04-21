import {Fireworks} from '@fireworks-js/react';
import SlideContent from './SlideContent';

export default function SlideThree() {
  return (
    <SlideContent>
      <div className='h-full relative'>
        <h1 className='font-tajawal text-3xl sm:text-5xl md:text-6xl uppercase text-justify'>
          Let's celebrate this victory day with joy and share the happiness with
          our l💖ved ones.
        </h1>

        <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 z-10'>
          <img src='/dome.webp' alt='' />
        </div>

        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
          }}
          style={{
            bottom: 0,
            left: 0,
            width: '100%',
            height: '60%',
            position: 'absolute',
          }}
        />
      </div>
    </SlideContent>
  );
}

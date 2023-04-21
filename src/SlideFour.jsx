import {AnimatePresence, m} from 'framer-motion';
import SlideContent from './SlideContent';
import {useState} from 'react';
import {createPortal} from 'react-dom';

export default function SlideFour({slideIndex, slidePos}) {
  const [messageIsOpen, setMessageIsOpen] = useState(false);
  const status = slideIndex === slidePos ? 'animate' : 'initial';

  return (
    <SlideContent>
      <m.div animate={status} className='relative h-full overflow-hidden'>
        <button
          onClick={() => setMessageIsOpen(true)}
          aria-pressed={messageIsOpen}
          aria-controls='message'
        >
          <span className='sr-only'>open message</span>
          <m.div
            variants={{
              initial: {
                bottom: 0,
                translateX: '-50%',
              },
              animate: {
                bottom: '50%',
                translateX: '-50%',
                rotate: [6, 4, 1, 6, 1, 8],
                transition: {
                  rotate: {
                    duration: 0.3,
                    repeat: 'infinity',
                    repeatDelay: 0.5,
                  },
                },
              },
            }}
            className='bg-amber-400 w-40 h-20 bottom-0 rounded-md absolute left-1/2'
          >
            <div
              style={{clipPath: 'polygon(100% 0, 0 0, 50% 100%)'}}
              className='bg-amber-300 w-full h-1/2 shadow-md'
            ></div>
          </m.div>
        </button>

        <AnimatePresence>
          {messageIsOpen && <Modal control={setMessageIsOpen} />}
        </AnimatePresence>
      </m.div>
    </SlideContent>
  );
}

function Modal({control}) {
  const [lang, setLang] = useState('eng');

  function changeLang() {
    setLang((prevLang) => (prevLang === 'eng' ? 'id' : 'eng'));
  }

  return createPortal(
    <m.div
      initial={{
        top: '100%',
        x: '-50%',
      }}
      animate={{
        top: '20%',
        x: '-50%',
        rotate: 5,
        rotateY: [180, 0],
        transition: {
          rotateY: {
            duration: 0.4,
          },
        },
      }}
      exit={{
        top: '100%',
        rotateY: [0, 180],
        transition: {
          rotateY: {
            duration: 0.4,
          },
        },
      }}
      id='message'
      className='p-4 flex flex-col  w-80 h-fit absolute left-1/2 -translate-y-1/2 rounded-2xl z-50 bg-amber-50'
    >
      <button
        className='bg-amber-200 h-10 w-10 text-xs rounded-xl self-end mb-2'
        onClick={changeLang}
      >
        {lang === 'eng' ? 'eng' : 'id'}
      </button>

      <p className='flex flex-col gap-2 mb-10'>
        <span>Dear you,</span>
        {lang === 'eng' ? (
          <span>
            I apologize for any mistakes or wrongdoings I may have committed,
            intentionally or unintentionally, and ask for your forgiveness on
            this blessed occasion of Eid. May this day bring us all closer and
            strengthen our relationships. Eid Mubarak to you and your loved
            ones.
          </span>
        ) : (
          <span>
            Saya meminta maaf atas kesalahan atau kesalahan yang mungkin telah
            saya lakukan, sengaja atau tidak sengaja, dan meminta maaf atas
            kesalahan tersebut di kesempatan yang berbahagia ini yaitu Hari Raya
            Idul Fitri. Semoga hari ini dapat mendekatkan kita semua dan
            memperkuat hubungan kita. Selamat Idul Fitri untuk Anda dan keluarga
            Anda.
          </span>
        )}
        <span className='mt-8'>Sincerely,</span>
        <span>Saepul Bahri</span>
      </p>

      <button
        className='bg-slate-950 text-white py-2 px-8 rounded-full font-tajawal uppercase shadow-lg'
        onClick={() => control(false)}
      >
        Close
      </button>
    </m.div>,
    document.getElementById('modal')
  );
}

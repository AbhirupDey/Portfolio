import React from 'react'
import { CircularText } from './Icons'
// import yourSvgFile from '../../public/images/svgs/CircularText.svg';
import Image from 'next/image'
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
    '>
        <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
        {/* <Image src={yourSvgFile} alt="Hire Me" className="fill-dark animate-spin-slow" /> */}
        <Link href="mailto:deyabhirup2004@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20
        rounded-full font-semibold hover:bg-light hover:text-dark
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        '>
            Hire ME
        </Link>
        </div>
    </div>
  )
}

export default HireMe
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/dev-4.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhirup Dey</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="profileImg" className='w-3/4 h-auto m-auto'
              priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I specialize in transforming ideas into dynamic, user-friendly web applications. Explore my latest projects and articles to see my expertise in React.js and modern web development in action.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href={"/CV.pdf"} target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                "

                >Resume <LinkArrow className={"w-6 ml-1"}/> 
                
                </Link>

                <Link href={"mailto:deyabhirup2004@gmail.com"} target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark relative group px-2 py-1 dark:text-light" 
                >Contact
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-dark 
                group-hover:w-full transition-all ease duration-300 hover:dark:bg-light
                origin-left dark:bg-light'>
                </span>
                <span className='absolute right-0 bottom-0 w-[2px] h-0 bg-dark 
                group-hover:h-full transition-all ease duration-300 delay-300 hover:dark:bg-light
                origin-right dark:bg-light'>
                </span>
                <span className='absolute right-0 top-0 w-0 h-[2px] bg-dark 
                group-hover:w-full transition-all ease duration-300 delay-600 origin-right hover:dark:bg-light
                dark:bg-light'>
                </span>
                <span className='absolute left-0 top-0 w-[2px] h-0 bg-dark 
                group-hover:h-full transition-all ease duration-300 delay-300 origin-top hover:dark:bg-light
                dark:bg-light'>
                </span>
                </Link>

              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="Bulb" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}

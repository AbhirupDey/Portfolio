import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/projectimg.jpg'
import TransitionEffect from '@/components/TransitionEffect'



const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <article
    className='w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    '>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' 
        priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
      </Link>

      <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>

      <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
        <Link href={link} target="_blank"
        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid hover:border-dark dark:hover:border-light'
        >Visit Project</Link>
      </div>

      </div>

    </article>
  )
}

const Project = ({type, title, img, link, github}) => {
  return(
    <article className='w-full flex flex-col items-center justify-between rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    '>

    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target="_blank"
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>

        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>

        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>

        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>

      </Link>

      <div className='w-full mt-2 flex items-center justify-between'>
      <Link
          href={link} target="_blank"
          className='text-lg font-semibold underline'
        >Visit</Link>
        <Link href={github} target="_blank" className='w-8'>
          <GithubIcon />{" "}
         </Link>
        
      </div>

      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Abhirup Dey | Projects Page</title>
            <meta name="description" content="Learn about Abhirup Dey, a skilled full-stack developer specializing in React.js, Next.js, Express.js and modern web development. Discover my journey, skills, and professional experience in creating dynamic web applications." />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="My Latest Projects"
            className='mb-16'
            />
            <AnimatedText text="I thrive on creating scalable, efficient web applications and innovative solutions using cutting-edge technologies. With a solid foundation in software development and a keen interest in emerging tech trends, I enjoy building impactful projects in web development, AI/ML, and SaaS."
            className='mb-16 font-medium text-center !text-xl leading-7 text-dark/75 md:text-base md:leading-6 sm:text-sm sm:leading-5 lg:!text-lg lg:leading-7 xl:!text-xl xl:leading-8 2xl:!text-2xl 2xl:leading-9'
            />
            {/* <p className='mb-8 text-center text-lg font-medium md:text-base sm:text-sm'>
              I thrive on creating scalable, efficient web applications and innovative solutions using cutting-edge technologies. With a solid foundation in software development and a keen interest in emerging tech trends, I enjoy building impactful projects in web development, AI/ML, and SaaS.
            </p> */}

            <div className='grid grid-cols-12 gap-24 gap-y-32'>

              {/* <div className='col-span-12'>
                <FeaturedProject
                type="Project-1" 
                title="Crypto Generator"
                img={project1}
                summary="This is a brief summary of Project 1, showcasing its features and functionalities."
                link="/"
                github="/"
                />
              </div> */}

              <div className='col-span-6'>
                <Project 
                title="Pizzamania: A pizza delivery website with a modern design and user-friendly interface."
                img={project1}
                link="https://pizzamania-alpha.vercel.app/"
                github="https://github.com/AbhirupDey/Pizzamania"
                type="Web Project"
                />
              </div>

              <div className='col-span-6'>
                <Project 
                title=" 	Sundown Studio: Improves the looks of a room into a crazy setup studio."
                img={project1}
                summary="This is a brief summary of Project 1, showcasing its features and functionalities."
                link="https://abhirupdey.github.io/website/"
                github="https://github.com/AbhirupDey/website"
                type="Web Project"
                />
              </div>

              <div className='col-span-6'>
                <Project 
                title="Ephemeral Equilibrium : Awareness about our environment."
                img={project1}
                link="https://abhirupdey.github.io/Equilibrium/"
                github="https://github.com/AbhirupDey/Equilibrium"
                type="Web Project"
                />
              </div>

              <div className='col-span-6'>
                <Project 
                title="Simon Game: A classic memory game."
                img={project1}
                link="https://abhirupdey.github.io/simon-game/"
                github="https://github.com/AbhirupDey/simon-game"
                type="Web Project"
                />
              </div>
              
              <div className='col-span-6'>
                <Project 
                title="Tindog"
                img={project1}
                link="https://abhirupdey.github.io/tindog/"
                github="https://github.com/AbhirupDey/tindog"
                type="Web Project"
                />
              </div>

              {/* <div className='col-span-12'>Featured Project</div>

              <div className='col-span-6'>Project-3</div>
              <div className='col-span-6'>Project-4</div> */}
            </div>

        </Layout>
      </main>
    </>
  )
}

export default projects
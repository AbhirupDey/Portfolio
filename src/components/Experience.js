import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

        <LiIcon reference={ref}/>

        <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.7, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a 
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
        target: ref,
        offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

<motion.div
style={{scaleY: scrollYProgress}}
className="absolute left-9 top-[2px] w-[4px] h-full bg-dark origin-top dark:bg-light"/>


            <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details 
                    position="Machine Learning Intern" 
                    company="Webdesk Technologies Pvt. Ltd." 
                    companyLink="" 
                    time="June 2023 - September 2023" 
                    address="Remote"
                    work="Developed a customer segmentation model using clustering algorithms (K-means, DBSCAN), improving marketing campaign efficiency by 20%"
                />
                <Details 
                    position="Artificial Intelligence Intern" 
                    company="Acmegrade" 
                    companyLink="" 
                    time="July 2023 - September 2023" 
                    address="Remote"
                    work="Worked on AI projects, including data preprocessing, model training, and deployment; integrated and worked over AI-based features into web applications using Python, TensorFlow, and Flask increasing user engagement by 20%"
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
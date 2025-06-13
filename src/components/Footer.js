import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                <Link href="/" className='relative group'>
                    Abhirup Dey
                    <span className='h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] ease duration-300 w-0 dark:bg-light'>
                        &nbsp;
                    </span>
                </Link>
            </div>
            <Link href="/contact" 
            className='relative group'>
                Say Hello
                <span className='h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300 w-0 dark:bg-light'>
                    &nbsp;
                </span>
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer
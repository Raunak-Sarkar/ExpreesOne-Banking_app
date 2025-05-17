import Link from 'next/link'
import React from 'react'


const Logo = () => {
  return (
    <>
    <Link href={'/'}> 
    <img src="/log.svg" className='w +[98%] md:w-[120%] lg:w-[12%]  ' alt="" /> </Link>
    </>
  )
}

export default Logo
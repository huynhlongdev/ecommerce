import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
      <header className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          <div className="flex items-center justify-between"> 
            <Link className='font-bold text-2xl flex items-center gap-2' href="/">
                <Image src="/logo.png" alt='logo' height={30} width={30}/>
                DEV.IO
            </Link>
            <Menu/>
          </div>
    </header>
  )
}

export default Navbar
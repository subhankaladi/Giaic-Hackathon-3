import Image from 'next/image'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import './snav.css'
import Link from 'next/link';



const SNAV = () => {
  return (
    <div className='snav-main'>

        <div className="nike-img">
            <Link href="/">
            <Image width={36} height={36} src="/nike.png" alt='nike-img'></Image>
            </Link>
        </div>
        <ul>
            <Link href="/components/news"><li>News & Featured</li></Link>
            <Link href="/fourcompo/bag"><li>Men</li></Link>
            <Link href="/components/women"><li>Women</li></Link>
            <Link href="/thirdcompo/second"><li>Kids</li></Link>
            <Link href="/thirdcompo/third"><li>Sale</li></Link>
            <Link href="/thirdcompo/first"><li>SNKERS</li></Link>
        </ul>

        <div className="search">
            <input type="search" placeholder='Search' />
            <CiHeart size={20}/>
           <Link href="/seccompo/first"> <IoBagOutline size={15}/></Link>


        </div>

    </div>
  )
}

export default SNAV
import Image from 'next/image'
import React from 'react'
import './fnav.css'
import Link from 'next/link'

const FNAV = () => {
  return (
    <div>
        <div className="frstnav">
            <div className="ft">
                <Image width={36} height={36} src="/ft.png" alt='ft-photo'></Image>
            </div>
            {/* <div className="skip">
                <Image width={100} height={100} src="/skip.png" alt='skip content'></Image>
            </div> */}
            <ul className=''>
                <li> <Link href="/seccompo/map">Find a Store</Link></li>
                <li>|</li>
                <Link href="/fourcompo/help"><li>Help</li></Link>
                <li>|</li>
                <li><Link href="/fourcompo/joinus">Join Us</Link></li>
                <li>|</li>
                <li> <Link href="/seccompo/login">Sign In</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default FNAV
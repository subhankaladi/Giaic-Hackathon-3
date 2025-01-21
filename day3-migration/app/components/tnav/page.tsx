import Link from 'next/link'
import React from 'react'
import './tnav.css'

const TNAV = () => {
  return (
    <div className='tnav-main'>
        <h3><Link href="/">Hello Nike App </Link></h3>
        <div className="tnav-sec"><span>Download the app to access everything Nike.</span><Link href="/seccompo/first">Get Your Great</Link></div>
    </div>
  )
}

export default TNAV
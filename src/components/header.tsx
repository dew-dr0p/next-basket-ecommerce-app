"use client"
import Image from 'next/image';
import phoneIcon from '/public/images/phone.svg';
import mailIcon from '/public/images/mail.svg';
import instagramIcon from '/public/images/instagram.svg';
import youtubeIcon from '/public/images/youtube.svg';
import facebookIcon from '/public/images/facebook.svg';
import twitterIcon from '/public/images/twitter.svg';
import downArrow from '/public/images/arrow_down.svg';
import profileIcon from '/public/images/profile.svg';
import cartIcon from '/public/images/cart.svg';
import heartIcon from '/public/images/heart.svg';
import searchIcon from '/public/images/search.svg';
import navIcon from '/public/images/hamburger.svg';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [navBar, setNavBar] = useState(false)

    const showNavBar = () => {
        setNavBar(!navBar)
    }

    return (
        <header>
            <div className="bg-[#23856D] font-bold text-white p-3 px-8 xl:px-12 text-sm hidden lg:flex justify-between">
                <div className="flex gap-2.5">
                    <div className='flex gap-1 items-center'>
                        <Image src={phoneIcon} alt='Phone Icon' />
                        <p>(225) 555-0118</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Image src={mailIcon} alt='Mail Icon' />
                        <p>michelle.rivera@example.com</p>
                    </div>
                </div>
                <p>Follow Us  and get a chance to win 80% off</p>
                <p className='flex gap-1'>
                    Follow Us : <span className='flex'>
                        <Image src={instagramIcon} alt='Instagram Icon' />
                        <Image src={youtubeIcon} alt='Youtube Icon' />
                        <Image src={facebookIcon} alt='Facebook Icon' />
                        <Image src={twitterIcon} alt='Twitter Icon' />
                    </span>
                </p>
            </div>
            <div className='p-4 px-8 xl:px-12 flex justify-between items-center'>
                <Link href={'/'} ><h1 className='font-bold text-2xl text-[#252B42]'>Bandage</h1></Link>
                <div className='hidden lg:flex gap-4 text-sm font-medium text-[#737373] items-center'>
                    <Link href={'#'} className='font-bold'>Home</Link>
                    <Link href={'#'} className='flex items-center gap-2.5'>Shop <Image src={downArrow} alt='Arrow Icon' className='inline' /></Link>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Contact</Link>
                    <Link href={'#'}>Pages</Link>
                </div>
                <div className='hidden lg:flex gap-4 text-sm text-[#23A6F0] items-center'>
                    <p className='font-bold flex items-center gap-2.5'><Image src={profileIcon} alt='Profile Icon' style={{display: 'inline'}} /> Login / Register</p>
                    <Image src={searchIcon} alt='Search Icon' />
                    <p className='flex items-center gap-2.5'><Image src={cartIcon} alt='Cart Icon' style={{display: 'inline'}} /> 1</p>
                    <p className='flex items-center gap-2.5'><Image src={heartIcon} alt='Heart Icon' style={{display: 'inline'}} /> 1</p>
                </div>
                <Image src={navIcon} alt='Menu Icon' className='lg:hidden cursor-pointer' onClick={showNavBar} />
            </div>
            {navBar && <div className='mt-10 grid text-sm lg:hidden gap-4'>
                <div className='grid gap-5 justify-items-center w-full text-[#737373]'>
                    <Link href={'#'} className='font-bold'>Home</Link>
                    <Link href={'#'}>Shop</Link>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Contact</Link>
                    <Link href={'#'}>Pages</Link>
                </div>
                <div className='grid gap-5 justify-items-center w-full text-[#23A6F0]'>
                    <p className='font-bold flex items-center gap-2.5'><Image src={profileIcon} alt='Profile Icon' style={{display: 'inline'}} /> Login / Register</p>
                    <Image src={searchIcon} alt='Search Icon' />
                    <p className='flex items-center gap-2.5'><Image src={cartIcon} alt='Cart Icon' style={{display: 'inline'}} /> 1</p>
                    <p className='flex items-center gap-2.5'><Image src={heartIcon} alt='Heart Icon' style={{display: 'inline'}} /> 1</p>
                </div>
            </div>}
        </header>
    );
}
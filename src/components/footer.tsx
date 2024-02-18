import Image from "next/image";
import facebookIcon from '/public/images/facebook_blue.svg';
import instagramIcon from '/public/images/instagram_blue.svg';
import twitterIcon from '/public/images/twitter_blue.svg';

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] text-sm text-[#737373]">
            <div className="px-12 lg:px-24 xl:px-48 p-10 grid gap-3 lg:flex justify-between">
                <h1 className='font-bold text-2xl text-[#252B42]'>Bandage</h1>
                <div className="flex gap-5 lg:px-10">
                    <Image src={facebookIcon} alt="Blue Facebook Icon" />
                    <Image src={instagramIcon} alt="Blue Instagram Icon" />
                    <Image src={twitterIcon} alt="Blue Twitter Icon" />
                </div>
            </div>
            <div className="px-12 lg:px-24 xl:px-48 bg-white p-10 grid lg:grid-flow-col gap-6">
                <div className="grid gap-4">
                    <h6 className="font-bold text-[#252B42] text-base">Company Info</h6>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className="grid gap-4">
                    <h6 className="font-bold text-[#252B42] text-base">Legal</h6>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className="grid gap-4">
                    <h6 className="font-bold text-[#252B42] text-base">Features</h6>
                    <p>Business Marketing</p>
                    <p>User Analytic</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                </div>
                <div className="grid gap-4">
                    <h6 className="font-bold text-[#252B42] text-base">Resources</h6>
                    <p>IOS & Android</p>
                    <p>Watch a Demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
                <div className="grid gap-4 lg:col-span-2">
                    <h6 className="font-bold text-[#252B42] text-base">Get In Touch</h6>
                    <div className="flex text-sm">
                        <input type="text" placeholder="Your Email" className="placeholder:text-[#737373] p-3 py-2 md:p-5 md:py-4 placeholder:text-sm border border-[#E6E6E6] rounded bg-[#F9F9F9] focus-visible:outline-none" />
                        <button className="p-3 py-2 md:p-5 md:py-4 bg-[#23A6F0] text-white rounded border border-[#E6E6E6]">Subscribe</button>
                    </div>
                    <p className="text-xs">Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div className="px-12 lg:px-24 xl:px-48 p-6 text-center lg:text-left">
                <p>Made With Love By Finland All Right Reserved </p>
            </div>
        </footer>
    );
}
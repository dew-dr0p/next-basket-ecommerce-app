import Image from "next/image";
import Products from "@/components/products";
import imageOne from '/public/images/image1.jpeg';
import imageTwo from '/public/images/image2.jpeg';
import imageThree from '/public/images/image3.jpeg';
import imageFour from '/public/images/image4.jpeg';
import bottomImage from '/public/images/bottomImage.jpeg';
import cardOne from '/public/images/card1.jpeg';
import cardTwo from '/public/images/card2.jpeg';
import cardThree from '/public/images/card3.jpeg';
import clock from '/public/images/clock.svg';
import chart from '/public/images/chart.svg';
import rightArrow from '/public/images/arrow_right.svg';
import iconOne from '/public/images/icon1.svg';
import iconTwo from '/public/images/icon2.svg';
import iconThree from '/public/images/icon3.svg';
import profileImage from '/public/images/portrait.png';
import gridOne from '/public/images/grid1.jpeg';
import gridTwo from '/public/images/grid2.jpeg';
import gridThree from '/public/images/grid3.jpeg';
import gridFour from '/public/images/grid4.jpeg';
import gridFive from '/public/images/grid5.jpeg';
import gridSix from '/public/images/grid6.jpeg';
import gridSeven from '/public/images/grid7.jpeg';
import gridEight from '/public/images/grid8.jpeg';
import gridNine from '/public/images/grid9.jpeg';
import starFull from '/public/images/star_filled.svg';
import starOutline from '/public/images/star.svg';

export default async function Home() {

  const productCount = 0

  async function getProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=10&select=thumbnail,title,category,price,discountPercentage')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  async function getNewProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=10&select=thumbnail,title,category,price,discountPercentage&skip=10')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const loadNewProducts = async () => {
    'use server';
    const response = await fetch('/api/fetch-more-products');
    if (!response.ok) {
        throw new Error('Failed to load more products'); 
    }
    const newProducts = await response.json();
    return newProducts;
};

  const productList = await getProducts()

  console.log(productList)

  const services = [
    {
      icon: iconOne,
      title: 'Easy Wins',
      text: 'Get your best looking smile now!'
    },
    {
      icon: iconTwo,
      title: 'Concrete',
      text: 'Defalcate is most focused in helping you discover your most beautiful smile'
    },
    {
      icon: iconThree,
      title: 'Hack Growth',
      text: 'Overcame any hurdle or any other problem.'
    },
  ]
  const cardImages = [cardOne, cardTwo, cardThree]
  const gridImages = [gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix, gridSeven, gridEight, gridNine]

  return (
    <main className="grid">
      {/* <div className="grid lg:grid-cols-5 justify-center gap-4 py-6 md:py-10 lg:py-20 px-7 md:px-14 lg:px-20 xl:px-36 min-h-[38.5rem]">
        <div className="relative col-span-2">
          <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
            <p className="text-[#2DC071]">5 Items</p>
            <h5 className="text-4xl">FURNITURE</h5>
            <p>Read More</p>
          </div>
          <Image src={imageOne} alt="First Image" fill={true} objectFit="cover" className="-z-10" />
        </div>
        <div className="relative col-span-3 lg:grid-rows-2 gap-4 grid">
          <div className="relative row-span-1">
            <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
              <p className="text-[#2DC071]">5 Items</p>
              <h5 className="text-4xl">FURNITURE</h5>
              <p>Read More</p>
            </div>
            <Image src={imageTwo} alt="Second Image" fill={true} objectFit="cover" className="-z-10" />
          </div>
          <div className="row-span-1 lg:grid-cols-2 gap-4 grid">
            <div className="relative col-span-1">
              <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
                <p className="text-[#2DC071]">5 Items</p>
                <h5 className="text-4xl">FURNITURE</h5>
                <p>Read More</p>
              </div>
              <Image src={imageThree} alt='Third Image' fill={true} objectFit="cover" className="-z-10" />
            </div>
            <div className="relative col-span-1">
              <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
                <p className="text-[#2DC071]">5 Items</p>
                <h5 className="text-4xl">FURNITURE</h5>
                <p>Read More</p>
              </div>
              <Image src={imageFour} alt="Fourth Image" fill={true} objectFit="cover" className="-z-10" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid grid-flow-row lg:grid-cols-10 lg:grid-rows-2 gap-4 py-6 md:py-10 lg:py-20 px-10 md:px-20 xl:px-36 min-h-[38.5rem]">
        <div className="relative lg:col-span-4 row-span-2 min-h-72">
          <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
            <p className="text-[#2DC071]">5 Items</p>
            <h5 className="text-4xl">FURNITURE</h5>
            <p>Read More</p>
          </div>
          <Image src={imageOne} alt="First Image" fill={true} objectFit="cover" className="-z-10" />
        </div>
        <div className="relative lg:col-span-6 row-span-1 min-h-72">
          <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
            <p className="text-[#2DC071]">5 Items</p>
            <h5 className="text-4xl">FURNITURE</h5>
            <p>Read More</p>
          </div>
          <Image src={imageTwo} alt="Second Image" fill={true} objectFit="cover" className="-z-10" />
        </div>
        <div className="relative lg:col-span-3 min-h-72">
          <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
            <p className="text-[#2DC071]">5 Items</p>
            <h5 className="text-4xl">FURNITURE</h5>
            <p>Read More</p>
          </div>
          <Image src={imageThree} alt='Third Image' fill={true} objectFit="cover" className="-z-10" />
        </div>
        <div className="relative lg:col-span-3 min-h-72">
          <div className="grid gap-1 p-6 font-bold text-sm text-[#252B42]">
            <p className="text-[#2DC071]">5 Items</p>
            <h5 className="text-4xl">FURNITURE</h5>
            <p>Read More</p>
          </div>
          <Image src={imageFour} alt="Fourth Image" fill={true} objectFit="cover" className="-z-10" />
        </div>
      </div>

      <Products productList={productList} />

      <div className="px-7 md:px-14 lg:px-32 xl:px-48 py-20 grid gap-20">
        <div className="text-[#737373] text-sm grid gap-2.5 text-center">
          <h6 className="text-xl">Featured Products</h6>
          <h5 className="text-[#252B42] font-bold text-2xl">THE BEST SERVICES</h5>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="grid lg:grid-flow-col gap-7">
          {services.map((service, index) => <div key={index} className="p-10 py-9 grid gap-5 justify-items-center text-center text-sm text-[#737373]">
            <Image src={service.icon} alt="Book Reader Icon" />
            <h5 className="text-[#252B42] text-2xl font-bold">{ service.title }</h5>
            <p>{ service.text }</p>
          </div>)}
        </div>
      </div>

      <div className="px-7 md:px-14 lg:px-32 xl:px-48 py-20 lg:py-28 grid gap-20">
        <div className="gap-2.5 grid text-sm text-[#23A6F0] font-bold text-center">
          <p>Practice Advice</p>
          <h5 className="text-[#252B42] text-4xl">Featured Posts</h5>
        </div>
        <div className="lg:flex grid justify-center gap-6 lg:gap-4">
          {cardImages.map((image, index) => (<div key={index} className="grid max-w-96 shadow-md relative">
            <p className="bg-[#E74040] px-2.5 rounded-sm shadow-sm absolute top-5 left-5 text-white text-sm font-bold">NEW</p>
            <Image src={image} alt="First Card" />
            <div className="p-6 pb-9 text-[#737373] text-sm grid gap-2.5">
              <div className="flex gap-4 text-xs">
                <p className="text-[#8EC2F2]">Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>
              <h5 className="text-xl text-[#252B42]">Loudest à la Madison #1 <br />(L&#39;integral)</h5>
              <p className="">We focus on ergonomics and meeting <br />you where you work. It&lsquo;s only a <br />keystroke away.</p>
              <div className="py-4 flex justify-between text-xs">
                <p className="flex gap-1">
                  <span><Image src={clock} alt="Clock Icon" /></span>
                  22 April 2021
                </p>
                <p className="flex gap-1">
                  <span><Image src={chart} alt="Chart Icon" /></span>
                  10 comments
                </p>
              </div>
              <p className="font-bold flex gap-2.5">Learn More <span><Image src={rightArrow} alt="Right Arrow Icon" /></span></p>
            </div>
          </div>))}
        </div>
      </div>

      <div className="py-32 px-7 md:px-14 lg:px-24 xl:px-40 grid justify-items-center gap-9 lg:grid-flow-col lg:justify-between">
        <div className="grid gap-7 justify-center text-center">
          <p className="text-2xl text-[#252B42] font-bold">What they say about us</p>
          <div className="py-7 grid gap-4 justify-items-center">
            <Image src={profileImage} alt="Profile Image" width={90} height={90} className="rounded-[50%]" />
            <div className="flex gap-1">
              {[1,2,3,4].map((arr, index) => <Image key={index} src={starFull} alt="Star Icon" />)}
              <Image src={starOutline} alt="Outline Star Icon" />
            </div>
            <p>Slate helps you see how many more days you need to work to <br />reach your financial goal.</p>
            <div className="font-bold text-sm text-[#23A6F0]">
              <p>Regina Miles</p>
              <p className="text-[#252B42]">Designer</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-3">
          {gridImages.map((image, index) => <Image key={index} src={image} alt="First Image in Grid" objectFit="cover" className="lg:w-36 lg:h-36 w-28 h-28" />)}
        </div>
      </div>

      <div className="relative min-h-[40rem] px-7 md:px-14 lg:px-32 xl:px-48 grid place-content-center">
        <div className="p-10 lg:p-20 xl:p-40 max-w-[50rem] grid gap-6 justify-items-center text-sm text-center font-bold">
          <p className="text-[#23A6F0]">Designing Better Experience</p>
          <h5 className="text-[#252B42] text-4xl">Problems trying to resolve the conflict between </h5>
          <p className="text-[#737373] font-normal">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
          <p className="text-[#23856D] text-2xl">$16.48</p>
          <button className="bg-[#23A6F0] p-10 py-4 text-white w-fit">ADD YOUR CALL TO ACTION</button>
        </div>
        <Image src={bottomImage} alt="Image" fill={true} objectFit="cover" className="-z-10" />
      </div>
    </main>
  );
}
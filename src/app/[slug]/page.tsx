import Image from 'next/image';
import Products from '@/components/products';
import brandOne from '/public/images/brand1.svg';
import brandTwo from '/public/images/brand2.svg';
import brandThree from '/public/images/brand3.svg';
import brandFour from '/public/images/brand4.svg';
import brandFive from '/public/images/brand5.svg';
import brandSix from '/public/images/brand6.svg';
import description from '/public/images/description.jpeg';
import heart from '/public/images/heart_black.svg';
import cart from '/public/images/cart_black.svg';
import eye from '/public/images/eye_black.svg';
import starFull from '/public/images/star_filled.svg';
import starOutline from '/public/images/star.svg';

async function getProductID() {
    const products = await fetch('https://dummyjson.com/products?limit=0&select=id,title').then(res => res.json())
    return products
}

export async function generateStaticParams() {
    // const products = await fetch('https://dummyjson.com/products?limit=100&select=id,title').then(res => res.json())
    const products = await getProductID()
    console.log(products)

    return products.products.map((product: any) => ({
        slug: product.title.replaceAll(' ', '-'),
        id: product.id
    }))
}

export const dynamicParams = false

export default async function DetailPage({ params }) {
    const { slug } = params
    
    const products = await getProductID()
    
    const id = (products.products.find((product: any) => slug === product.title.replaceAll(' ', '-'))).id
    
    console.log(slug, id, params)

    async function getProduct() {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const product = await getProduct()

    console.log(product)

    const brandImages = [brandOne, brandTwo, brandThree, brandFour, brandFive, brandSix]
    return (
        <main className='grid bg-[#FAFAFA]'>
            <div className='px-7 md:px-14 lg:px-32 xl:px-48 py-9 text-sm text-[#252B42] font-bold'>
                <p className='inline-flex gap-4'>Home <span className='text-[#BDBDBD] inline-flex gap-4'><span>&gt;</span> Shop</span></p>
            </div>
            <div className='px-7 md:px-14 lg:px-32 xl:px-48 pb-12 grid grid-flow-col gap-7'>
                <div className='grid gap-5'>
                    <div className='relative h-[28rem] grid items-center'>
                        <div className='flex justify-between z-10 p-10 text-6xl text-white'>
                            <p>{'<'}</p>
                            <p>{'>'}</p>
                        </div>
                        <Image src={description} alt='Product Image' fill={true} className='object-cover -z-0' />
                    </div>
                    <div className='flex gap-5'>
                        {[0,1,2].map((arr, index) => <Image key={index} src={description} alt='Product Image' height={75} />)}
                    </div>
                </div>
                <div className='p-6 flex flex-col font-bold text-sm text-[#737373]'>
                    <p className='font-normal text-[#252B42] text-xl'>{product.title}</p>
                    <div className='flex gap-2.5 mt-3 items-center'>
                        <div className="flex gap-1">
                            {[1,2,3,4].map((arr, index) => <Image key={index} src={starFull} alt="Star Icon" />)}
                            <Image src={starOutline} alt="Outline Star Icon" />
                        </div>
                        <p>10 Reviews</p>
                    </div>
                    <p className='text-[#252B42] text-2xl mt-5'>${product.price - (product.discountPercentage * product.price)}</p>
                    <p className='mt-1.5'>Availability  : <span className='text-[#23A6F0]'>In Stock</span></p>
                    <div className='w-[28rem] border-t border-[#BDBDBD] mt-28'></div>
                    <div className='flex gap-2.5 mt-7'>
                        {[0,1,3,8].map((arr, index) => <div key={index} className='w-8 h-8 bg-[#23A6F0] rounded-[50%]'></div>)}
                    </div>
                    <div className='flex gap-2.5 h-fit mt-24'>
                        <button className='p-5 py-2.5 rounded bg-[#23A6F0] h-fit text-white'>Select Options</button>
                        {[0,1,2].map((arr, index) => <div key={index} className='w-10 h-10 border border-[#E8E8E8] bg-white rounded-full flex place-content-center'>
                            <Image src={heart} alt='Heart Icon' />
                        </div>)}
                    </div>
                </div>
            </div>
            {/* <Products /> */}
            <div className='lg:grid hidden gap-4 px-7 md:px-14 lg:px-32 xl:px-48 bg-white'>
                <div className='flex justify-center gap-12 py-8 text-sm text-[#737373] font-bold text-center'>
                    <p>Description</p>
                    <p>Additional Information</p>
                    <p>Reviews <span>(0)</span></p>
                </div>
                <div className='pt-6 pb-12 grid grid-flow-col gap-32'>
                    <div className='pb-6 grid gap-7 text-sm text-[#737373]'>
                        <h5 className='font-bold text-2xl text-[#252B42]'>the quick fox jumps over </h5>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className='pl-6 border-l-2 border-[#23856D]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                    <Image src={description} alt='Product Description Image' width={413} className=' shadow-md' />
                </div>
            </div>
            <div className='px-7 md:px-14 lg:px-32 xl:px-48 py-12 grid lg:grid-flow-col gap-14 lg:gap-7 items-center justify-center lg:justify-normal'>
                {brandImages.map((image, index) => <Image key={index} src={image} alt='First Brand Image' className='px-2 rounded-lg' />)}
            </div>
        </main>
    );
}
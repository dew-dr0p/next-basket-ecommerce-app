"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products({ productList }: { productList: any }) {
    const [products, setProducts] = useState<any>([])
    const [productCount, setProductCount] = useState(0)
    const [moreProducts, setMoreProducts] = useState(true)

    const loadProducts = async () => {
        const response = await fetch('/api/fetch-more-products');
        if (!response.ok) {
            throw new Error('Failed to load more products'); 
        }
        const newProducts = await response.json();
        return newProducts;
    };

    // const loadNewProducts = () => {
    //     const newProducts = loadMoreProducts()
    //     setProducts([...products, newProducts])
    // }
    String().replaceAll(' ', '-')

    async function getNewProducts() {
        const res = await fetch(`https://dummyjson.com/products?limit=10&select=thumbnail,title,category,price,discountPercentage&skip=${productCount}`)
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
    }
    
    const loadNewProducts = async () => {
        const newProducts = await getNewProducts()
        console.log(newProducts)
        if (newProducts.products !== undefined) setProductCount(productCount => productCount += newProducts.limit)
        if (newProducts.total === newProducts.limit + newProducts.skip) setMoreProducts(false)
        setProducts([...products, ...newProducts.products])
    }
    
    // const productList = await getProducts()

    console.log(productList, products, productCount)

    useEffect(() => {
        setProducts(productList.products)
        setProductCount(productList.limit)
    }, [productList])
    // setProducts(productList)

    return (
        <div className="px-7 md:px-14 lg:px-32 xl:px-48 py-20 grid gap-6 justify-items-center">
        <div className="text-[#737373] text-sm grid gap-2.5 text-center">
          <h6 className="text-xl">Featured Products</h6>
          <h5 className="text-[#252B42] font-bold text-2xl">BESTSELLER PRODUCTS</h5>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="grid gap-7 lg:grid-cols-5 p-8">
          {products.map((product: any, index: number) => <Link href={`/${product.title.replaceAll(' ', '-')}`} className="grid justify-items-center text-center" key={index}>
            <Image src={product.thumbnail} alt="First Product" width={183} height={100} style={{objectFit: 'contain', maxHeight: 100}} />
            <div className="grid gap-2.5 p-4 pb-9 font-bold text-[#737373] text-base text-center justify-items-center">
              <h6 className="text-[#252B42]">{product.title}</h6>
              <p className="text-sm">{product.category}</p>
              <div className="flex gap-1.5 p-1 py-1.5">
                <p className="text-[#BDBDBD]">${product.price}</p>
                <p className="text-[#23856D]">${product.price - (product.discountPercentage * product.price)}</p>
              </div>
            </div>
          </Link>)}
        </div>
        {moreProducts && <button onClick={loadNewProducts} className="px-10 p-4 rounded border border-[#23A6F0] text-[#23A6F0] text-sm w-fit">LOAD MORE PRODUCTS</button>}
      </div>
    );
}
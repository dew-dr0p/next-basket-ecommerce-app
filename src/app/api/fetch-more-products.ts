import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {
    if (req.method !== 'GET') {
        // return res.status(405).end(); // Only allow GET requests
        return new NextResponse('Invalid Request Format', { status: 405 })
    }

    try {
      const response = await fetch('https://dummyjson.com/products?limit=10&select=thumbnail,title,category,price,discountPercentage&skip=10'); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const newProducts = await response.json();
      // res.status(200).json(newProducts);
      return new NextResponse(newProducts, {
        status: 200,
      })
    } catch (error) {
      console.error(error);
      // res.status(500).json({ error: 'Failed to fetch data' });
      return new NextResponse('Failed to fetch Data', {
        status: 500
      })
    }
}
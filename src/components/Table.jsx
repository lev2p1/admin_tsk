import Product from './Product'
import Pagination from './Pagination'

import '../varriables.css'

export default function Table({items = null}){
    return (
        <>
        

<div className="relative overflow-x-auto bg-white rounded-lg">
    <div className='flex w-full px-10 py-6 justify-between'>
        <p className='inter !text-lg flex items-center'>Products</p>
        <div className='flex'>
            <button className='bg-[#0E1422] text-white rounded px-5 py-2'>Add Product</button>
            <input type="text" className='border border-[#E6E7E8] rounded-md pl-[15px] ml-4' placeholder='Search products'/>
        </div>

    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 border-y border-[#E6E7E8] dark:text-gray-400 inter">
            <tr className=''>
                <th scope="col" className="px-32 py-3 inter">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 inter ">
                    SKU
                </th>
                <th scope="col" className="px-6 py-3 inter ">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 inter ">
                    Stock
                </th>
                <th scope="col" className="px-6 py-3 inter ">
                    Categories
                </th>
                <th scope="col" className="px-6 py-3 inter ">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className=''>
            <div className='mt-8'/>
            <Product name={"Raw Black T-Shirt Lineup"} sku={"47514501"} price={'75.00'} stock={"In stock"} categories={"T-shirt, Men"}/>
            <Product name={"Classic Monochrome Tees"} sku={"47514501"} price={'35.00'} stock={"In stock"} categories={"T-shirt, Men"}/>
            <Product name={"Monochromatic Wardrobe"} sku={"47514501"} price={'27.00'} stock={"In stock"} categories={"T-shirt"}/>
            <Product name={"Essential Neutrals"} sku={"47514501"} price={'22.00'} stock={"In stock"} categories={"T-shirt, Raw"}/>
            <Product name={"UTRAANET Black"} sku={"47514501"} price={'43.00'} stock={"In stock"} categories={"T-shirt, Trend"}/>
            <Product name={"Elegant Ebony Sweatshirts"} sku={"47514501"} price={'35.00'} stock={"In stock"} categories={"T-shirt"}/>
            <Product name={"Sleek and Cozy Black"} sku={"47514501"} price={'57.00'} stock={"In stock"} categories={"Hoodie"}/>
            <Product name={"MOCKUP Black"} sku={"47514501"} price={'30.00'} stock={"In stock"} categories={"T-shirt"} border={false}/>
             
        </tbody>
    </table>
    <div className='w-full flex justify-end py-9 px-8'>
        <Pagination></Pagination>
    </div>
</div>

        </>
    )
}
import tripleDot from '../static/tripleDot.svg'

export default function Product({border = true, name, sku, price, stock, categories}){
    return(
        <tr className={border ? "bg-white  dark:bg-gray-800 " + "dark:border-[#F6F6F6] border-b" : "bg-white  dark:bg-gray-800 "}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex items-center ml-12'>
                        <div src="" alt="" className='size-12 bg-[#F6F6F6] rounded mr-8'/>
                        <p>{name}</p>
                    </div>
                    
                </th>
                <td className="px-6 py-4">
                    {sku}
                </td>
                <td className="px-6 py-4">
                    ${price}
                </td>
                <td className="px-6 py-4">
                    {stock}
                </td>
                <td className="px-6 py-4">
                    {categories}
                </td>
                <td className="px-6 py-4">
                    <button>
                        <img src={tripleDot} alt="" />
                    </button>

                </td>
            </tr>
    )
}
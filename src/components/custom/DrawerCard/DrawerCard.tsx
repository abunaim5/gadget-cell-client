import type { CartProductResponseType } from "@/types/product";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

type DrawerCardProps = {
    product: CartProductResponseType;
}

const DrawerCard = ({ product }: DrawerCardProps) => {
    const [count, setCount] = useState<number>(1);

    return (
        <div className='flex items-center gap-3 shadow-sm py-2'>
            <img alt={`${product.name} image`} width={96} height={96} className='cursor-pointer' src={product.image} />
            <div className='pr-3 h-full'>
                <Link to={`/product/${product.productId}`} className='text-lg transition-all duration-300 hover:text-orange-500'><h1>{product.name}</h1></Link>
                <h2 className='my-2 text-[#F85712]'>${product.price * count}</h2>
                <div className='flex items-center gap-4 px-3 w-fit rounded-md border border-black'>
                    <button onClick={() => setCount(count - 1)} className={`cursor-pointer ${count === 1 ? 'pointer-events-none text-gray-500' : ''}`}><FaMinus /></button>
                    <span className='text-base'>{count}</span>
                    <button onClick={() => setCount(count + 1)} className='cursor-pointer'><FaPlus /></button>
                </div>
            </div>
        </div>
    );
};

export default DrawerCard;
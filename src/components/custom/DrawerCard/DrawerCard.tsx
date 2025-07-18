import { Button } from "@/components/ui/button";
import type { CartProductResponseType } from "@/types/product";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

type DrawerCardProps = {
    product: CartProductResponseType;
}

const DrawerCard = ({ product }: DrawerCardProps) => {
    const [count, setCount] = useState<number>(1);

    const handleDeleteCart = async () => {
        try {
            const res = await fetch(`https://gadget-cell-server.vercel.app/cart/${product._id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Product remove from cart.",
                    showConfirmButton: false,
                    timer: 2000
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to remove product!",
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='flex items-center gap-3 shadow-sm py-2'>
            <img alt={`${product.name} image`} width={96} height={96} className='cursor-pointer' src={product.image} />
            <div className='pr-3 h-full'>
                <Link to={`/product/${product.productId}`} className='text-lg transition-all duration-300 hover:text-orange-500'><h1>{product.name}</h1></Link>
                <h2 className='my-2 text-[#F85712]'>${product.price * count}</h2>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-4 px-3 py-1 w-fit rounded-md border border-black'>
                        <button onClick={() => setCount(count - 1)} className={`cursor-pointer ${count === 1 ? 'pointer-events-none text-gray-500' : ''}`}><FaMinus /></button>
                        <span className='text-base'>{count}</span>
                        <button onClick={() => setCount(count + 1)} className='cursor-pointer'><FaPlus /></button>
                    </div>
                    <Button onClick={handleDeleteCart} variant='outline' className='cursor-pointer'><Trash2 /></Button>
                </div>
            </div>
        </div>
    );
};

export default DrawerCard;
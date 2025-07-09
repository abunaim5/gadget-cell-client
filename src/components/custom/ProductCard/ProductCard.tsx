import { PiHeartStraightLight, PiShoppingCartSimple } from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import type { CartProductListType, ProductResponseType } from "@/types/product";

interface ProductPropTypes {
    product: ProductResponseType
}

const ProductCard = ({ product }: ProductPropTypes) => {

    const handleAddToCart = async () => {
        const cartProduct: CartProductListType = {
            productId: product._id,
            name: product.name,
            brand: product.brand,
            image: product.image,
            description: product.description,
            price: product.price,
            oldPrice: product.old_price,
            category: product.category,
            ratings: product.ratings,
            createdAt: product.createdAt
        };

        try {
            const res = await fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartProduct)
            });
            if (res.ok) {
                alert('Product added to cart');
            } else {
                alert('Failed to add product');
            }
        } catch (err) {
            console.error('Error: ', err);
        }
    };

    return (
        <div className='group'>
            <div className='relative group overflow-hidden'>
                <Link to={`/product/${product._id}`} className='absolute z-40 w-full h-full bg-black/5 group-hover:bg-black/10 group-hover:animate-in transform transition-transform ease-in duration-1000 cursor-pointer rounded-md' />
                <img alt={`${product.name} image`} width={400} height={600} className='w-full h-full group-hover:scale-110 transform transition-transform ease-in-out duration-1000 cursor-pointer' src={product.image} />
                <div className='flex flex-col gap-1 absolute z-50 right-2 xl:right-4 bottom-2 xl:bottom-auto xl:top-4 text-xl'>
                    <button className='xl:opacity-0 group-hover:opacity-100 group-hover:animate-in transform transition-all ease-linear duration-500 bg-white hover:bg-black hover:text-white p-2 rounded-sm'>
                        <PiHeartStraightLight />
                    </button>
                    <button className='xl:opacity-0 group-hover:opacity-100 group-hover:animate-in transform transition-all ease-linear duration-500 bg-white hover:bg-black hover:text-white p-2 rounded-sm'>
                        <HiOutlineEye />
                    </button>
                    <button onClick={handleAddToCart} className='xl:hidden bg-white hover:bg-black hover:text-white p-2 rounded-sm transform transition-all duration-500 cursor-pointer'>
                        <PiShoppingCartSimple />
                    </button>
                </div>
                <button onClick={handleAddToCart} className='hidden absolute z-50 left-1/2 bottom-4 -translate-x-1/2 text-xl opacity-0 group-hover:opacity-100 xl:flex items-center justify-center gap-2 group-hover:animate-in transform transition-all duration-500 ease-linear bg-white hover:bg-black hover:text-white px-4 py-2 rounded-sm cursor-pointer'>
                    <PiShoppingCartSimple />
                    <span className='text-sm'>Add to cart</span>
                </button>
            </div>
            <div className='text-center p-3'>
                <Link to={`/product/${product._id}`} className='text-2xl transition-all duration-300 hover:text-orange-500'><h1>{product.name}</h1></Link>
                <div className='flex items-center justify-center gap-3'>
                    <h2 className='text-lg text-[#F85712]'>${product.price}</h2>
                    <h2 className='text-lg text-gray-400 line-through'>${product.old_price}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
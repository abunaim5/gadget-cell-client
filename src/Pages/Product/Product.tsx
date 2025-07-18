import { FaCartArrowDown, FaFacebookF, FaMinus, FaPinterest, FaPlus, FaWhatsapp } from 'react-icons/fa';
import type { CartProductListType, ProductResponseType } from '@/types/product';
import { useLoaderData } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { Button } from '@/components/ui/button';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Swal from "sweetalert2";

const Product = () => {
    const product: ProductResponseType = useLoaderData();

    const handleAddToCart = async () => {
        const cartProduct: CartProductListType = {
            productId: product._id,
            name: product.name,
            brand: product.brand,
            image: product.image,
            description: product.description,
            price: product.price,
            old_price: product.old_price,
            category: product.category,
            ratings: product.ratings,
            createdAt: product.createdAt
        };

        try {
            const res = await fetch('https://gadget-cell-server.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartProduct)
            });
            if (res.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Product added to cart.",
                    showConfirmButton: false,
                    timer: 2000
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: 'Failed to add product',
                });
            }
        } catch (err) {
            console.error('Error: ', err);
        }
    };

    return (
        <section className='w-full lg:w-5/6 xl:w-4/6 mx-auto px-4 lg:px-0 py-11'>
            <div className='flex items-center justify-between bg-gray-50 px-6 py-3 rounded-md shadow-sm'>
                <div className='flex items-center gap-2'>
                    <span>Share:</span>
                    <FaFacebookF />
                    <FaPinterest />
                    <FaWhatsapp />
                </div>
                <Button variant='ghost' className='text-xl'><FaCartArrowDown /></Button>
            </div>

            <Suspense fallback={<div className="flex gap-2">
                <Skeleton className="h-96 w-full rounded-md" />
                <div className="space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            </div>}>
                <div className='flex flex-col lg:flex-row gap-2 mt-20'>
                    <figure className='w-full lg:w-1/2'>
                        <img src={product?.image} alt={`${product.name} image`} />
                    </figure>

                    <div className='px-0 md:px-6 lg:px-0 w-full lg:w-1/2 gap-6'>
                        <div className='space-y-3'>
                            <h2 className='text-4xl mb-2'>{product?.name}</h2>
                            <p>{product?.description}</p>
                            <div className='flex items-center gap-2'>
                                <span>Ratings:</span>
                                <Rating
                                    initialValue={product.ratings}
                                    onClick={function noRefCheck() { }}
                                    SVGstyle={{ display: 'inline' }}
                                    size={24}
                                    readonly
                                />
                            </div>
                            <p>Brand: {product?.brand}</p>
                            <p>Category: {product?.category}</p>
                            <p>Date: {product?.createdAt}</p>
                            <div className='flex items-center gap-3 text-2xl'>
                                <h2 className='text-[#F85712]'>${product.price}</h2>
                                <h2 className='text-gray-400 line-through'>${product.old_price}</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 w-fit mt-6'>
                            <div className='flex items-center gap-2 px-3  rounded-md border border-black'>
                                <Button variant='ghost'><FaMinus /></Button>
                                <span className='text-base'>{1}</span>
                                <Button variant='ghost'><FaPlus /></Button>
                            </div>
                            <Button onClick={handleAddToCart}>Add to Cart</Button>
                            <Button><IoMdHeartEmpty /></Button>
                            <Button className=''>Buy Now</Button>
                        </div>
                    </div>
                </div>
            </Suspense>
        </section>
    );
};

export default Product;
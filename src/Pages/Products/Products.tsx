import ProductCard from "@/components/custom/ProductCard/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { ProductResponseType } from "@/types/product";
import { Suspense, useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState<ProductResponseType[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/products');
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };

        getProducts();
    }, []);

    return (
        <section className='w-full lg:w-5/6 xl:w-4/6 mx-auto px-4 lg:px-0 py-11'>
            <Suspense fallback={<div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    Array.from({ length: 8 }).map((_, idx) => (
                        <div key={idx} className="flex flex-col space-y-3">
                            <Skeleton className="h-[150px] w-full rounded-xl" />
                            <div className="flex flex-col gap-2 items-center">
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        </div>
                    ))
                }
            </div>}>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        products.map((product: ProductResponseType) => <ProductCard key={product._id} product={product} />)
                    }
                </div>
            </Suspense>
        </section>
    );
};

export default Products;
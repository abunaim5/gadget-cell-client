import ProductCard from "@/components/custom/ProductCard/ProductCard";

const TrendingProducts = () => {
    return (
        <section>
            <div className='my-11'>
                <span className="text-2xl">Trending Products</span>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
import Banner from "../Banner/Banner";
import TrendingProducts from "../TrendingProducts/TrendingProducts";

const Home = () => {
    return (
        <>
            <div className='bg-[#E2E2E2]'>
                <Banner />
            </div>
            <div className='w-full lg:w-5/6 xl:w-4/6 mx-auto px-4 lg:px-0'>
                <TrendingProducts />
            </div>
        </>
    );
};

export default Home;
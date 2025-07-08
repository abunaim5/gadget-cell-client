import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <>
            <div className='bg-[#E2E2E2]'>
                <Banner />
            </div>
            <div className='w-full lg:w-5/6 xl:w-4/6 mx-auto px-4 lg:px-0'>
                <h1>Gadget Cell</h1>
            </div>
        </>
    );
};

export default Home;
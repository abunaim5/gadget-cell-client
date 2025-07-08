import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { PiShoppingCart } from 'react-icons/pi';
import { Button } from '@/components/ui/button';

const Banner = () => {

    return (
        <section className='grid grid-cols-5 grid-rows-5 gap-4 w-full lg:w-5/6 xl:w-4/6 h-[calc(100vh-76px)] mx-auto py-6 px-4 lg:px-0'>
            <div className='col-span-3 row-span-5 p-4 rounded-md bg-white'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 12500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide>
                        <div className='w-full flex flex-col items-center justify-center text-center'>
                            <img src="https://i.postimg.cc/QM1rZ1ZL/samsung-z-fold.png" className="max-w-xs lg:max-w-sm" />
                            <div className='flex-1/2 space-y-6'>
                                <h1 className="text-3xl md:text-5xl font-bold">Samsung Galaxy Z <br /> Fold 4</h1>
                                <p className='text-sm'>
                                    Innovative foldable phone with dual displays and powerful performance. The Samsung Galaxy Z Fold 4 is a premium foldable smartphone that offers a unique, cutting-edge design with dual displays and advanced features.
                                </p>
                                <Button className='bg-orange-500 hover:bg-orange-600'>Shop Now<PiShoppingCart className='text-3xl' /></Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full flex flex-col items-center justify-center text-center'>
                            <img src="https://i.postimg.cc/v8NtMMSL/macbook-air-m2.png" className="flex-1/2" />
                            <div className='space-y-6 flex-1/2'>
                                <h1 className="text-3xl md:text-5xl font-bold">Macbook Air M4<br />Max</h1>
                                <p className='text-sm'>
                                    Apple MacBook Pro M4 Max is the top choice for 2024, especially for tech enthusiasts and content creators. If you're a video editor or work with demanding tasks daily, this laptop is a must-have. Loved by reviewers for its lightning-fast processing.
                                </p>
                                <Button className='bg-orange-500 hover:bg-orange-600'>Shop Now<PiShoppingCart className='text-3xl' /></Button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='col-span-2 row-span-3 p-4 rounded-md bg-white'>
                <div className='w-full flex flex-col items-center justify-center text-center'>
                    <img src="https://i.postimg.cc/Zqbf7mRk/airpod-pro-2.png" className="flex-1/2" />
                    <div className='space-y-3 flex-1/2'>
                        <h1 className="text-xl md:text-3xl font-bold">AirPods Pro 2</h1>
                        <p className='text-sm'>
                            AirPods Pro 2nd Generation attaches with an enhanced Noise Cancelling arrangement.
                        </p>
                        <Button className='bg-orange-500 hover:bg-orange-600'>Shop Now<PiShoppingCart className='text-3xl' /></Button>
                    </div>
                </div>
            </div>
            <div className='col-span-2 row-span-2 p-4 rounded-md bg-white'>
                <div className='w-full h-full flex items-center justify-between text-center'>
                    <img src="https://i.postimg.cc/fyGddz6G/oneplus-watch.png" className='w-1/2' />
                    <div className='space-y-3 flex-1/2'>
                        <h1 className="text-2xl font-bold">OnePlus Watch</h1>
                        <p className='text-sm'>
                           The OnePlus Watch embodies sophistication with its premium and unique design.
                        </p>
                        <Button className='bg-orange-500 hover:bg-orange-600'>Shop Now<PiShoppingCart className='text-3xl' /></Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
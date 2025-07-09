import { footContents } from "@/constants/constants";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className='text-base bg-[#F6F6F8]'>
            <div className='w-full lg:w-5/6 xl:w-4/6 mx-auto flex justify-between flex-col md:flex-row gap-2 py-12 lg:py-20 xl:py-28'>
                {
                    footContents.map((content, idx) => <div key={idx} className='flex-1'>
                        <h3 className='text-xl lg:text-2xl mb-4'>{content.name}</h3>
                        <div className='flex gap-2 flex-col'>
                            {
                                content.routes.map((route, idx) => <Link key={idx} to={route.link} className={`text-gray-500 w-fit transition-all duration-300 hover:text-orange-500`}>{route.name}</Link>)
                            }
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Footer;
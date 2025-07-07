import { navLinks } from "@/constants/constents";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

type NavLinksType = {
    name: string;
    path: string;
}

const Navbar = () => {
    return (
        <nav className='py-4 lg:py-5 shadow'>
            <div className='w-5/6 mx-auto flex items-center justify-between'>
                <h2 className='text-3xl'>GadgetCell</h2>
                <div className='space-x-6'>
                    {
                        navLinks.map((nav: NavLinksType, idx) => <NavLink to={nav.path} key={idx} className={({ isActive }) => isActive ? 'text-cyan-500 font-semibold' : 'transition-all delay-100 text-gray-600 hover:text-cyan-500'}>{nav.name}</NavLink>)
                    }
                </div>
                <div className='flex items-center justify-end gap-2 md:gap-4 text-[22px] md:text-2xl'>
                    <IoSearchOutline className='hidden md:block cursor-pointer transition-all duration-300 hover:text-cyan-500' />
                    <FiUser className='hidden md:block cursor-pointer transition-all duration-300 hover:text-cyan-500' />
                    <Link to='/wishlist' className='relative hidden md:block group'>
                        <IoMdHeartEmpty className='transition-all duration-300 group-hover:text-cyan-500' />
                        <span className='absolute -top-1 -right-1.5 min-w-4 min-h-4 rounded-full flex items-center justify-center text-[10px] leading-none text-white bg-black'>0</span>
                    </Link>
                    <Link to='/cart' className='relative group'>
                        <PiShoppingCartSimple className='transition-all duration-300 group-hover:text-cyan-500' />
                        <span className='absolute -top-1 -right-1.5 min-w-4 min-h-4 rounded-full flex items-center justify-center text-[10px] leading-none text-white bg-black'>0</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
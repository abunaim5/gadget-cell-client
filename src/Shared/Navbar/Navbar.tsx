import DrawerCard from "@/components/custom/DrawerCard/DrawerCard";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { navLinks } from "@/constants/constants";
import type { CartProductResponseType } from "@/types/product";
import { useEffect, useState, type FormEvent } from "react";
import { FiUser } from "react-icons/fi";
import { IoMdArrowForward, IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import Swal from "sweetalert2";


type NavLinksType = {
    name: string;
    path: string;
}

const Navbar = () => {
    const [cartProduct, setCartProduct] = useState<CartProductResponseType[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const linkCls = 'px-4 py-[15px] border-b text-black hover:bg-[#F3F3F3] transition-all duration-[400ms]'

    const cartDrawerElem = <>
        <h3 className='shadow-md text-base px-4 py-3'>Cart Products</h3>
        <div className='max-h-[74.813vh] overflow-y-auto custom-scrollbar'>
            <div className='flex flex-col gap-4 mt-4'>
                {
                    cartProduct.map(product => <DrawerCard key={product._id} product={product} />)
                }
            </div>
        </div>
    </>

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Payment successful.",
            showConfirmButton: false,
            timer: 2000
        });
    }

    useEffect(() => {
        const getCartProducts = async () => {
            try {
                const res = await fetch('https://gadget-cell-server.vercel.app/cart');
                const data = await res.json();
                setCartProduct(data);
            } catch (err) {
                console.error(err);
            }
        };

        getCartProducts();
    }, []);

    return (
        <nav className='py-4 lg:py-5 shadow'>
            {/* Cart products drawer */}
            <Drawer direction='right' open={open} onOpenChange={() => setOpen(false)}>
                <DrawerContent className='max-h-[100vh] rounded-none w-full md:w-[340px]' aria-describedby="">
                    <DrawerHeader className='flex flex-row items-center justify-between border-b'>
                        <DrawerTitle className='text-2xl tracking-normal font-normal uppercase'>cart</DrawerTitle>
                        <DrawerClose>
                            <IoMdClose className='text-2xl' />
                        </DrawerClose>
                    </DrawerHeader>
                    <div className='flex-1'>
                        {cartDrawerElem}
                    </div>
                    <DrawerFooter className='border-t mt-0'>
                        <button onClick={() => setOpenModal(!openModal)} className='flex items-center gap-2 cursor-pointer hover:text-orange-500'>
                            Checkout
                            <IoMdArrowForward />
                        </button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* Checkout modal */}
            <Dialog open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
                <DialogContent className='sm:max-w-max max-h-[80vh] md:max-h-max overflow-auto' aria-describedby=''>
                    <DialogTitle className='sr-only'>Checkout</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='name' className='font-semibold block mb-2'>Name</label>
                        <input id='name' className='w-full rounded-sm px-3 py-2 border focus:outline-none focus:border-orange-400' type='text' placeholder='Name' autoCapitalize='name' />
                        <label htmlFor='email' className='font-semibold block my-2'>Email</label>
                        <input id='email' className='w-full rounded-sm px-3 py-2 border focus:outline-none focus:border-orange-400' type='email' placeholder='Email' autoCapitalize='email' />
                        <label htmlFor='address' className='font-semibold block my-2'>Address</label>
                        <input id='address' className='w-full rounded-sm px-3 py-2 border focus:outline-none focus:border-orange-400' type='text' placeholder='Address' autoCapitalize='address' />
                        <input className={`cursor-pointer w-full mt-8 py-[11px] rounded-sm bg-black hover:bg-gray-900 text-white`} type="submit" value='Pay Now' />
                    </form>
                </DialogContent>
            </Dialog>
            <div className='w-full lg:w-5/6 xl:w-4/6 mx-auto px-4 lg:px-0 flex items-center justify-between'>
                <div className='flex flex-1/2 items-center gap-2'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='block lg:hidden'><VscMenu className='text-2xl' /></button>
                    <Drawer direction='left' open={menuOpen} onOpenChange={() => setMenuOpen(!menuOpen)}>
                        <DrawerContent className='max-h-[100vh] rounded-none w-full md:w-[340px]' aria-describedby="">
                            <DrawerHeader className='border-b flex flex-row items-center justify-between'>
                                <DrawerTitle className='text-2xl tracking-normal font-normal'>MENU</DrawerTitle>
                                <DrawerClose>
                                    <IoMdClose className='text-2xl' />
                                </DrawerClose>
                            </DrawerHeader>
                            <div className='flex-1 flex flex-col text-sm text-gray-500'>
                                {
                                    navLinks.map((nav: NavLinksType, idx) => <Link key={idx} to={nav.path} onClick={() => setMenuOpen(!menuOpen)} className={`${linkCls}`}>{nav.name}</Link>)
                                }

                                <button className={`flex items-center gap-[5px] ${linkCls}`}><IoMdHeartEmpty className='text-lg' /> <span>Wishlist</span></button>

                                <button className={`flex items-center gap-[5px] ${linkCls}`}><IoSearchOutline className='text-lg' /> <span>Search</span></button>
                            </div>
                        </DrawerContent>
                    </Drawer>
                    <Link to='/' className='max-w-fit text-2xl md:text-3xl hidden lg:block'>
                        <h2>GadgetCell</h2>
                    </Link>
                </div>
                <Link to='/' className='max-w-fit text-2xl md:text-3xl text-center lg:hidden'>
                    <h2>GadgetCell</h2>
                </Link>
                <div className='hidden lg:block space-x-9'>
                    {
                        navLinks.map((nav: NavLinksType, idx) => <NavLink to={nav.path} key={idx} className={({ isActive }) => isActive ? 'text-orange-500 font-semibold' : 'transition-all delay-100 hover:text-orange-500'}>{nav.name}</NavLink>)
                    }
                </div>
                <div className='flex flex-1/2 items-center justify-end gap-2 md:gap-4 text-[22px] md:text-2xl'>
                    <IoSearchOutline className='hidden md:block cursor-pointer transition-all duration-300 hover:text-orange-500' />
                    <FiUser className='hidden md:block cursor-pointer transition-all duration-300 hover:text-orange-500' />
                    <Link to='/' className='relative hidden md:block group'>
                        <IoMdHeartEmpty className='transition-all duration-300 group-hover:text-orange-500' />
                        <span className='absolute -top-1 -right-1.5 min-w-4 min-h-4 rounded-full flex items-center justify-center text-[10px] leading-none text-white bg-black'>0</span>
                    </Link>
                    <button onClick={() => setOpen(!open)} className='relative group cursor-pointer'>
                        <PiShoppingCartSimple className='transition-all duration-300 group-hover:text-orange-500' />
                        <span className='absolute -top-1 -right-1.5 min-w-4 min-h-4 rounded-full flex items-center justify-center text-[10px] leading-none text-white bg-black'>{cartProduct?.length ?? 0}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
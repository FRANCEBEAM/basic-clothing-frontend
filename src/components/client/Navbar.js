import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiShoppingBag, BiUser, BiSearch } from 'react-icons/bi'

const Navbar = () => {
    const [click, SetClick] = useState(false)
    const handleClick = () => SetClick(!click);

    //Active navigation links
    const [activeSection, setActiveHome] = useState('home');
    const handleSetActiveSection = (section) => {
        setActiveHome(section);
    }

    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <>
            {!isAdminPage && (
                <div className={`w-full h-full fixed z-[51] ${location.pathname === '/signin' ? 'bg-transparent fixed z-10' : ''}`}>
                    <div className='p-3 py-7 w-full flex items-center justify-between m-auto lg:gap-20 lg:max-w-[1280px] lg:px-0'>
                        <div>
                            <Link to='/'>
                                <img className='w-[100px]' src="./assets/casibwhite.png" alt="casib logo" />
                            </Link>
                        </div>

                        <div>
                            <div className={`cursor-pointer lg:hidden ${location.pathname === '/signin' ? 'hidden' : ''}`} onClick={handleClick}>
                                {click ? '' : <FaBars size={34} color='white' />}
                            </div>
                            {!['/signin', '/signup', '/email-verification', '/verification-success', '/forgot-password', '/password-reset'].includes(location.pathname) && (
                                <ul className={click ? 'w-[320px] uppercase bg-black text-white absolute right-0 justify-center py-4 top-0 transition-all' : 'text-white top-[-100%] w-[320px] absolute right-0 transition-all lg:top-[0px] lg:inline-flex lg:relative lg:items-center lg:w-full lg:uppercase text-lg lg:text-sm xl:gap-6'}>
                                    <li className='p-3 py-3 flex justify-between items-center'>
                                        <Link to='/home'>
                                            <img className='w-[100px] lg:hidden' src="./assets/casibblack.png" alt="casib logo" />
                                        </Link>
                                        <div className='lg:hidden' onClick={handleClick}>
                                            {
                                                <FaTimes size={34} color='white'/> 
                                            }
                                        </div>
                                    </li>
                                    <li className="p-3 group" >
                                        <Link 
                                            className='relative'
                                            onClick={() => handleSetActiveSection('home')}
                                            to='/'>
                                            Home
                                            <span 
                                                className={`${activeSection === 'home' ? 'absolute bottom-[-1px] left-0 h-0.5 w-5 bg-white' : 'absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-white' }`}></span>
                                        </Link>
                                    </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('shop')} 
                                        to='/shop'>
                                        Shop
                                        <span 
                                            className={` ${activeSection === 'shop' ? 'absolute bottom-[-1px] left-0 h-0.5 w-5 bg-black' : 'absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-white'}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('arrivals')} 
                                        to='/arrivals'>
                                        New Arrivals
                                        <span 
                                            className={` ${activeSection === 'arrivals' ? 'absolute bottom-[-1px] left-0 h-0.5 w-5 bg-black' : 'absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-white'}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('sales')}
                                        to='/sales'>
                                        Sales
                                        <span 
                                            className={` ${activeSection === 'sales' ? 'absolute bottom-[-1px] left-0 h-0.5 w-5 bg-black' : 'absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-white'}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('about')}
                                        to='/about'>
                                        About Us
                                        <span 
                                            className={` ${activeSection === 'about' ? 'absolute bottom-[-1px] left-0 h-0.5 w-5 bg-black' : 'absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-white'}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('contact')}
                                        to='/contact'>
                                        Contact Us
                                        <span 
                                            className={` ${activeSection === 'contact' ? 'absolute bottom-[-1px] left-0 h-0.5 w-5 bg-black' : 'absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-white'}`}></span>
                                    </Link>
                                </li>
                                <div className='lg:flex lg:items-center lg:ml-20'>
                                    <li className="p-3 py-3" >
                                        <form>
                                            <div className='flex items-center'>
                                                <input className='w-full p-2 px-4 rounded-[20px] text-black' type="text" placeholder='Search your outfit' />
                                                <BiSearch className='absolute ml-[260px] lg:ml-[157px]' size={16} color='black'/>
                                            </div>
                                        </form>
                                    </li>
                                    <li className="p-3 py-3 text-lg lg:text-white" >
                                        <Link to='/cart'>
                                            <BiShoppingBag size={24} />
                                        </Link>
                                    </li>
                                    <li className="p-3 py-3 text-lg lg:text-white" >
                                        <Link to='/signin'>
                                            <BiUser size={24} />
                                        </Link>
                                    </li>
                                </div>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;

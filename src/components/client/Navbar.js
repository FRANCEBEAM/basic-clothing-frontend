import { useState, useEffect } from 'react';
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
    

    // navbar background
    const [navbarBgColor, setNavbarBgColor] = useState('transparent');
    const [navHover, setNavHover] = useState('group-hover:bg-black ');
    const [activeNavbar, setActiveNavbar] = useState('white');
    const [fontColor, setFontColor] = useState('white');
    const [barsColor, setBarsColor] = useState('white');
    const [iconsColor, setIconsColor] = useState('white');
    
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 600;

        if (scrollY > threshold) {
            setNavbarBgColor('white')
            setNavHover('black')
            setActiveNavbar('black')
            setFontColor('black')
            setBarsColor('black')
            setIconsColor('black')
        } else {
            setNavbarBgColor('transparent')
            setNavHover('white')
            setActiveNavbar('white')
            setFontColor('white')
            setBarsColor('white')
            setIconsColor('white')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            {!isAdminPage && (
                <div className={`w-full fixed z-[999] ${location.pathname === '/signin' ? 'bg-transparent fixed' : ''} bg-${navbarBgColor}`}>
                    <nav className={`p-3 py-4 w-full flex items-center justify-between m-auto lg:gap-20 lg:py-1 lg:max-w-[1280px] lg:px-0  `}>
                        <div>
                            <Link to='/'>
                                <img className='w-[100px]' src="./assets/casibwhite.png" alt="casib logo" />
                            </Link>
                        </div>

                        <div>
                            <div className={`cursor-pointer lg:hidden ${location.pathname === '/signin' ? 'hidden' : ''}`} onClick={handleClick}>
                                {click ? '' : <FaBars className='transition-all' size={34} color={`${barsColor}`} />}
                            </div>
                            {!['/signin', '/signup', '/email-verification', '/verification-success', '/forgot-password', '/password-reset'].includes(location.pathname) && (
                                <ul className={click ? 'w-[320px] uppercase bg-black text-white absolute right-0 justify-center py-4 top-0 transition-all' : `text-${fontColor} top-[-2000%] w-[320px] absolute right-0 transition-all lg:top-[0px] lg:inline-flex lg:relative lg:items-center lg:w-full lg:uppercase text-lg lg:text-sm xl:gap-6`}>
                                    <li className='p-3 py-3 flex justify-between items-center'>
                                        <Link to='/home'>
                                            <img className='w-[100px] lg:hidden' src="./assets/casibblack.png" alt="casib logo" />
                                        </Link>
                                        <div className='cursor-pointer lg:hidden' onClick={handleClick}>
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
                                                className={`${activeSection === 'home' ? `absolute bottom-[-1px] left-0 h-0.5 w-5 bg-${activeNavbar}` : `absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-${navHover}` }`}></span>
                                        </Link>
                                    </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('shop')} 
                                        to='/shop'>
                                        Shop
                                        <span 
                                            className={` ${activeSection === 'shop' ? `absolute bottom-[-1px] left-0 h-0.5 w-5 bg-${activeNavbar}` : `absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-${navHover}`}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('arrivals')} 
                                        to='/arrivals'>
                                        New Arrivals
                                        <span 
                                            className={` ${activeSection === 'arrivals' ? `absolute bottom-[-1px] left-0 h-0.5 w-5 bg-${activeNavbar}` : `absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-${navHover}`}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('sales')}
                                        to='/sales'>
                                        Sales
                                        <span 
                                            className={` ${activeSection === 'sales' ? `absolute bottom-[-1px] left-0 h-0.5 w-5 bg-${activeNavbar}` : `absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-${navHover}`}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('about')}
                                        to='/about'>
                                        About Us
                                        <span 
                                            className={` ${activeSection === 'about' ? `absolute bottom-[-1px] left-0 h-0.5 w-5 bg-${activeNavbar}` : 'absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-white'}`}></span>
                                    </Link>
                                </li>
                                <li className="p-3 py-3 group" >
                                    <Link 
                                        className='relative' 
                                        onClick={() => handleSetActiveSection('contact')}
                                        to='/contact'>
                                        Contact Us
                                        <span 
                                            className={` ${activeSection === 'contact' ? `absolute bottom-[-1px] left-0 h-0.5 w-5 bg-${activeNavbar}` : `absolute bottom-[-1px] left-0 h-0.5 w-5 group-hover:bg-${navHover}`}`}></span>
                                    </Link>
                                </li>
                                <div className='lg:flex lg:items-center lg:ml-20'>
                                    <li className="p-3 py-3" >
                                        <form>
                                            <div className='flex items-center'>
                                                <input className='w-full p-2 px-8 rounded-[20px] text-black' type="text" placeholder='Search your outfit' />
                                                <BiSearch className='absolute ml-[260px] lg:ml-[157px]' size={16} color='black'/>
                                            </div>
                                        </form>
                                    </li>
                                    <li className={`p-3 py-3 text-lg lg:text-${iconsColor}`} >
                                        <Link to='/cart'>
                                            <BiShoppingBag size={24} />
                                        </Link>
                                    </li>
                                    <li className={`p-3 py-3 text-lg lg:text-${iconsColor}`} >
                                        <Link to='/signin'>
                                            <BiUser size={24} />
                                        </Link>
                                    </li>
                                </div>
                                </ul>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}

export default Navbar;

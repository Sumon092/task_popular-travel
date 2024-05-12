import { useState } from 'react';
import { Bell, CircleUser, MenuIcon, XIcon } from 'lucide-react';
// import { ProfileIcon } from '../../assets/icons';
import { Link, useLocation } from 'react-router-dom';
import Hr from '../UI/Hr/Hr';


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation()
    const [activeRouteName, setActiveRouteName] = useState(null)
    console.log(activeRouteName)
    const routes = [{ name: 'Dashboard', id: 0, link: '/home' },
    { name: 'Master Price', id: 1, link: '/master-price' },
    { name: 'Custom Price', id: 2, link: '/custom-price' },
    { name: 'Calender', id: 3, link: '/calender' },
    { name: 'Reports', id: 4, link: '/reports' },
    { name: <Bell />, id: 5, link: '/notification' },
    { name: <CircleUser />, id: 6, link: '/profile' },
    ]
    const handleSetActiveRoute = (routeName) => {
        setActiveRouteName(routeName)
    }

    return (
        <>
            <nav className='bg-primary h-14 md:h-16 flex justify-start items-center'>
                <div onClick={() => setOpen(!open)} className='w-16 h-16 md:hidden text-white flex items-center ml-3'>
                    {
                        open ? <XIcon /> : <MenuIcon />
                    }
                </div>

                <ul className={`md:flex justify-center items-center md:static w-full absolute h-full duration-500 ease-in bg-primary ${open ? 'top-14 pl-3' : 'top-[-550px] text-white'}`}>
                    {
                        routes.map(route =>
                            <li className='mr-8 py-1 md:py-0' key={route.id}>
                                <Link
                                    to={route.link}
                                    className={`text-white hover:bg-teal-800 rounded-full px-3 py-1 ${location.pathname === route.link ? 'bg-teal-800 rounded-full' : ''}`}
                                    onClick={() => handleSetActiveRoute(route.name)}
                                >
                                    {route.name}
                                </Link>
                            </li>)
                    }
                </ul>
            </nav>
            {activeRouteName === 'Master Price' || activeRouteName === 'Custom Price' ? (
                <div>
                    <p className="text-center my-2 font-roboto font-bold text-2xl text-black">{activeRouteName || 'Master Price'}</p>
                    <Hr className="!border-t-gray-500" />
                </div>

            ) : null}
        </>

    );
};

export default NavBar;
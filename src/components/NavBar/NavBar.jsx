import { useState } from 'react';
import { Bell, CircleUser, MenuIcon, XIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation()
    const [activeRouteName, setActiveRouteName] = useState(null)
    console.log(activeRouteName)
    const routes = [
        { name: 'Dashboard', id: 0, link: '/home' },
        { name: 'Master Price', id: 1, link: '/master-price' },
        { name: 'Custom Price', id: 2, link: '/custom-price' },
        { name: 'Calender', id: 3, link: '/calender' },
        { name: 'Reports', id: 4, link: '/reports' },
        { name: <Bell />, id: 5, link: '/notification' },
        { name: <CircleUser />, id: 6, link: '/profile' },
    ];

    const handleSetActiveRoute = (routeName) => {
        setActiveRouteName(routeName)
    }

    return (
        <>
            <nav className='bg-primary/5 backdrop-blur-lg h-14 md:h-16 w-full shadow-md'>
                <div onClick={() => setOpen(!open)} className='w-16 h-16 md:hidden text-primary font-bold flex items-center ml-3'>
                    {open ? <XIcon /> : <MenuIcon />}
                </div>

                <ul className={`md:flex justify-center items-center md:static w-full absolute h-full duration-500 ease-in bg-primary ${open ? 'top-14 pl-3' : 'top-[-550px] text-white md:pl-24'}`}>
                    {routes.slice(0, 5).map(route => (
                        <li className='mr-4 py-1 md:py-0' key={route.id}>
                            <Link
                                to={route.link}
                                className={`text-white hover:bg-blue-100 hover:text-primary rounded-full px-3 py-1 ${location.pathname === route.link ? 'bg-blue-100 !text-primary rounded-full' : ''}`}
                                onClick={() => handleSetActiveRoute(route.name)}
                            >
                                {route.name}
                            </Link>
                        </li>
                    ))}
                    <div className="md:ml-auto md:flex md:pr-24">
                        {routes.slice(5).map(route => (
                            <li className='mr-4 py-1 md:py-0' key={route.id}>
                                <Link
                                    to={route.link}
                                    className={`text-white  rounded-full px-3 py-1 ${location.pathname === route.link ? 'rounded-full' : ''}`}
                                    onClick={() => handleSetActiveRoute(route.name)}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>


            </nav>




        </>
    );
};

export default NavBar;

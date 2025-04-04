import {Link, NavLink} from "react-router-dom";
import {MdRealEstateAgent} from "react-icons/md";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../provider/AuthProvider";

function NavBar() {
    const {user, logOut} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(() => {});
    };

    useEffect(() => {
        setName(user?.displayName);
    }, [name, user?.displayName]);

    const authBtn = (
        <>
            {!user ? (
                <div>
                    <div className='flex gap-4'>
                        <Link to='/login'>
                            <button className='px-6 py-3 border-2 rounded-lg border-primary text-textPrimary font-bold text-base'>
                                Login
                            </button>
                        </Link>
                        <Link to='/signup'>
                            <button className='px-6 py-3 rounded-lg bg-primary text-white font-bold text-base text-nowrap'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='hidden lg:flex gap-5 items-center'>
                    {user.displayName ? (
                        <h1>{name || user?.displayName}</h1>
                    ) : (
                        <h1>{user.email}</h1>
                    )}

                    <div className='dropdown'>
                        <div tabIndex={1} role='button' className='avatar'>
                            <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={1}
                            className=' dropdown-content space-y-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box min-w-56 max-w-fit absolute -right-6'
                        >
                            <li className='text-center'>
                                <Link to='/profile'>
                                    <button className='px-6 py-3 w-full  rounded-lg bg-primary text-white font-bold text-base text-nowrap'>
                                        Profile
                                    </button>
                                </Link>
                            </li>
                            <li className='text-center'>
                                <button
                                    onClick={handleLogout}
                                    className='px-6 py-3 w-full  rounded-lg bg-primary text-white font-bold text-base text-nowrap'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );

    const navLinks = (
        <>
            <li className='hover:bg-gray-300 rounded-md text-base font-semibold lg:font-normal'>
                <NavLink to='/'>Home</NavLink>
            </li>
            {user && (
                <li className='hover:bg-gray-300 rounded-md text-base font-semibold lg:font-normal'>
                    <NavLink to='/services'>Services</NavLink>
                </li>
            )}
            <li className='hover:bg-gray-300 rounded-md text-base font-semibold lg:font-normal'>
                <NavLink to='/about'>About Us</NavLink>
            </li>

            <li className='hover:bg-gray-300 rounded-md text-base font-semibold lg:font-normal'>
                <NavLink to='/contact'>Contact Us</NavLink>
            </li>
        </>
    );

    return (
        <>
            <div className='navbar bg-transparent  container px-7 mx-auto font-Plus'>
                <div className='navbar-start'>
                    <Link to='/'>
                        <div className='flex items-center font-bold text-2xl text-btnSecondary space-x-2'>
                            <MdRealEstateAgent />
                            <h1>ESTATERY</h1>
                        </div>
                    </Link>
                </div>
                <div className='navbar-center hidden  lg:flex'>
                    <ul className='menu menu-horizontal px-1 space-x-4 text-base font-normal'>
                        {navLinks}
                    </ul>
                </div>
                <div className='navbar-end flex items-center'>
                    <div className='lg:hidden mt-1'>
                        {user?.photoURL && (
                            <div className='dropdown'>
                                <div
                                    tabIndex={1}
                                    role='button'
                                    className='avatar'
                                >
                                    <div className='w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={1}
                                    className=' dropdown-content space-y-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit absolute -right-14'
                                >
                                    <li className='text-center'>
                                        <Link to='/profile'>
                                            <button className='px-6 py-3 w-full  rounded-lg bg-primary text-white font-bold text-base text-nowrap'>
                                                Profile
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className='px-6 py-3 w-full rounded-lg bg-primary text-white font-bold text-base text-nowrap'
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='dropdown relative'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost lg:hidden text-textPrimary'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-7 w-7 text-textPrimary'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=' menu-sm dropdown-content mt-3 z-[1] space-y-4 w-36 p-2 shadow bg-base-100 rounded-box min-w-fit relative right-0'
                        >
                            {navLinks}

                            <li className='hover:bg-white focus:bg-white'>
                                {authBtn}
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:flex'>{authBtn}</div>
                </div>
            </div>
        </>
    );
}

export default NavBar;

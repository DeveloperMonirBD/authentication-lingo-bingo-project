import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const links = (
        <>
            <li className="hover:text-brandPrimary">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/startLearning">Start-learning</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/tutorial">Tutorials</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/myProfile">My-Profile</NavLink>
            </li>
            <li className="hover:text-brandPrimary">
                <NavLink to="/aboutUs">About-Us</NavLink>
            </li>
        </>
    );

    return (
        <div className="">
            <div className="navbar container mx-auto px-3 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-md dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-600 font-semibold gap-2">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-extrabold text-brandPrimary">
                        Lingo Bingo
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-600 gap-2 font-semibold">{links}</ul>
                </div>
                <div className="navbar-end hidden md:flex gap-3">
                    <div className="">
                        {user && user?.email ? (
                            <div className="flex items-center gap-2">
                                <p>Welcome, {user.displayName}</p>
                                <img className="w-14 h-14 rounded-full object-cover object-center" src={user?.photoURL} alt="" />
                            </div>
                        ) : (
                            <img src={userIcon} alt="" />
                        )}
                    </div>

                    {user && user?.email ? (
                        <button onClick={logOut} className="btn btn-neutral btn-outline font-bold">
                            Log out
                        </button>
                    ) : (
                        <Link to="/auth/login" className="btn button-primary font-bold">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext)
    const links = (
        <>
            <li className="hover:text-orange-300">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-orange-300">
                <NavLink to="/startLearning">Start-learning</NavLink>
            </li>
            <li className="hover:text-orange-300">
                <NavLink to="/tutorial">Tutorials</NavLink>
            </li>
            <li className="hover:text-orange-300">
                <NavLink to="/aboutUs">About-Us</NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-200">
            <div className="navbar max-w-7xl mx-auto px-3 py-3">
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
                    <Link to="/" className="text-xl font-extrabold">
                        Lingo Bingo
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-600 gap-8 font-semibold">{links}</ul>
                </div>
                <div className="navbar-end lg:flex gap-4">

                    <div className='font-semibold'>{user.name}</div>

                    <img src={userIcon} alt="" />
                    <Link to="/auth/login" className="btn btn-neutral">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

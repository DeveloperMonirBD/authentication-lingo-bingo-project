import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.png';
import instagram from '../assets/insta.png';
import twitter from '../assets/x-2 1.png';
import youtube from '../assets/Youtube.png';

const Footer = () => {
    return (
        <div id="footer" className=" bg-gray-800 text-white mt-20 px-3 py-20">
            <footer className="footer p-10 max-w-7xl mx-auto lg:flex lg:justify-between items-start gap-10">
                <nav>
                    <div>
                        <Link className=" text-brandPrimary text-4xl font-bold">Lingo Bingo</Link>
                    </div>
                    <div className="text-base space-y-2 mt-2">
                        <p>Location: av. Washington 165, NY CA 54003</p>
                        <p>Phone: +31 85 964 47 25</p>
                        <p>Email: info@yourdomain.com</p>
                        <p>Openings hours: 9.00 AM - 5.00 PM</p>
                    </div>
                    <div className="flex gap-10 mt-4">
                        <Link>
                            <img src={facebook} alt="" />
                        </Link>
                        <Link>
                            <img src={twitter} alt="" />
                        </Link>
                        <Link>
                            <img src={youtube} alt="" />
                        </Link>
                        <Link>
                            <img src={instagram} alt="" />
                        </Link>
                    </div>
                </nav>

                <nav className="text-base">
                    <h6 className="text-2xl font-bold">Useful Links</h6>
                    <Link to="/" classNameName="link link-hover">
                        Home
                    </Link>
                    <Link to="/aboutUs" classNameName="link link-hover">
                        About Us
                    </Link>
                    <Link to="/startLearning" classNameName="link link-hover">
                        Start Learning
                    </Link>
                    <Link to="/tutorial" classNameName="link link-hover">
                        Tutorials
                    </Link>
                    <Link to="/myProfile" classNameName="link link-hover">
                        My Profile
                    </Link>
                    <Link to="#footer" classNameName="link link-hover">
                        Contact
                    </Link>
                </nav>

                <form className="text-base">
                    <h6 className="text-2xl font-bold">Drop a Message</h6>
                    <fieldset className="form-control w-80">
                        <label className="label"></label>
                        <div className=" space-y-4">
                            <div>
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item w-full" />
                            </div>

                            <button className="btn text-lg bg-brandPrimary text-white hover:text-gray-900 join-item w-full">
                                <Link to="/">Subscribe</Link>
                            </button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;

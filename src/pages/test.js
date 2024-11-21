import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../src/assets/google.png';
import logo from '../../src/assets/Lingo Bingo1.jpg';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile, auth } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get('name');

        if (name.length < 5) {
            setError({ ...error, name: 'Must be more than 5 character length' });
            return;
        }

        const email = form.get('email');
        const photo = form.get('photo');
        const terms = e.target.terms.checked;

        // reset error and status
        setErrorMessage('');
        setSuccess(false);

        if (!terms) {
            setErrorMessage('Please accept our terms and condition.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password should be 6 characters or longer');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true);
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate(location?.state ? location.state : '/');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(error => {
                const errorMessage = error.message;
                setSuccess(false);
                setErrorMessage(errorMessage);
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                navigate(location?.state ? location.state : '/');
                alert('Congratulations! You are signed in.');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="md:min-h-screen flex justify-center items-center mb-10">
            <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl md:p-8">
                <div className="flex justify-center">
                    <img className="w-32 rounded-xl shadow-xl border p-1" src={logo} alt="" />
                </div>
                <h2 className="text-3xl font-semibold text-center pt-6">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    {error.name && <label className="label text-sm text-rose-500">{error.name}</label>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered bg-[#F3F3F3]"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={handleShowPassword} className="btn btn-xs absolute right-3 text-lg top-12">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            className="input input-bordered bg-[#F3F3F3]"
                            required
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <button type="button" onClick={handleShowConfirmPassword} className="btn btn-xs absolute right-3 text-lg top-12">
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <div className="flex gap-3 mt-2">
                        <input className="w-5" type="checkbox" name="terms" />
                        <p className="text-gray-400 font-semibold">
                            Accept <span className="text-gray-500">Terms & Conditions</span>
                        </p>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn text-white text-base btn-neutral">Register</button>
                    </div>

                    {errorMessage && <p className="text-red-600 text-center mt-3">{errorMessage}</p>}

                    {success && <p className="text-green-500 text-center mt-3">Sign up is Successful.</p>}

                    <div className="form-control mt-6 flex justify-center gap-3">
                        <button type="button" onClick={handleGoogleLogin} className="btn text-base btn-neutral">
                            <img className="w-6 mr-1" src={google} alt="" /> Google Login
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 font-semibold">
                    <span>Already have an account? </span>
                    <Link className="text-blue-400 link-hover" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Register;
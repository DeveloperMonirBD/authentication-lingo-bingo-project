import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        // get form Data
        const email = form.get('email');
        const password = form.get('password');

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                setError({ ...error, login: err.code });
            });
    };

    return (
        <div className="md:min-h-[calc(100vh-200px)] flex justify-center items-center ">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl p-8">
                <h2 className="text-3xl font-semibold text-center pt-6">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                        {error.login && <label className="label text-red-600 text-sm">{error.login}</label>}
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white text-base btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center text-gray-500 font-semibold">
                    <span>Dont’t Have An Account ? </span>
                    <Link className="text-red-400 link-hover" to="/auth/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

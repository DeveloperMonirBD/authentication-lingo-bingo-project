import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../../src/assets/Lingo Bingo1.jpg';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

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
        const password = form.get('password');

        console.log(name, email, photo, password)


        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/myProfile');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="md:min-h-screen flex justify-center items-center mb-10">
            <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl p-8">
                <div className=" flex justify-center">
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
                        <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>

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
                    </div>

                    <div className="flex gap-3 mt-2">
                        <input className="w-5" type="checkbox" required />
                        <p className="text-gray-400 font-semibold">
                            Accept <span className="text-gray-500">Term & Conditions</span>
                        </p>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn text-white text-base btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center text-gray-500 font-semibold">
                    <span>Already Have An Account ? </span>
                    <Link className="text-blue-400 link-hover" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

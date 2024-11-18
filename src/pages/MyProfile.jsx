import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from '../assets/user.png';
import { Link } from "react-router-dom";

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="flex flex-col w-96 mx-auto justify-center items-center text-center bg-base-200 p-10 rounded-2xl shadow-xl">
                <div className="font-semibold flex">
                    {user && user?.email ? (
                        <div className="space-y-2">
                            <img className="object-cover object-center w-full" src={user?.photoURL} alt="" />
                            <p>{user.email}</p>
                            <p>Welcome To {user.displayName}</p>
                        </div>
                    ) : (
                        <img src={userIcon} alt="" />
                    )}
                </div>
                <Link to='/' className="btn mt-4 btn-neutral  btn-outline transition">Update</Link>
            </div>
        </div>
    );
};

export default MyProfile;
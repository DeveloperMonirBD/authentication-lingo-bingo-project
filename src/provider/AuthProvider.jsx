/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
     const [success, setSuccess] = useState(false);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then(result => {
            console.log(result.user)
            setSuccess(true)
        })
            .catch(error => {
                setErrorMessage(error.message);
                setSuccess(false)
        })
    };
    

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };    

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = updatedData => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
        loading,
        updateUserProfile,
        auth,
        errorMessage,
        setErrorMessage,
        success,
        setSuccess
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState} from 'react';


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Monir",
        email: "mrmonir0558@gmail.com"
})
   
    const authInfo = {
        user,
        setUser
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

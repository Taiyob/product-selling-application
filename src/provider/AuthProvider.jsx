import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase-config";
import PropTypes from 'prop-types'; 


const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    
    const info = {user};
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object,
}

export default AuthProvider;
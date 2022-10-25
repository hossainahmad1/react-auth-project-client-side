import React from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config';





export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {




const auhtInfo = {}

    return (
        <div>
            <AuthContext.Provider value={auhtInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
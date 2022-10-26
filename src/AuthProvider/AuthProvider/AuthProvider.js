import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';





export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currnetUser => {
            setUser(currnetUser)
            console.log(currnetUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])




    const auhtInfo = { user, setUser, createUser, signIn }

    return (
        <div>
            <AuthContext.Provider value={auhtInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
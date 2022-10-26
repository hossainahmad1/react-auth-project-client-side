import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';





export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
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




    const auhtInfo = { user, setUser, createUser, signIn, logOut,signInWithGoogle }

    return (
        <div>
            <AuthContext.Provider value={auhtInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';





export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const updateUser = (profile) => {
        return updateProfile(auth.currentUser,profile);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currnetUser => {
            setUser(currnetUser)
            setLoading(false)
            // console.log(currnetUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const auhtInfo = {
        user,
        setUser,
        loading,
        createUser,
        signIn,
        updateUser,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }

    return (
        <div>
            <AuthContext.Provider value={auhtInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
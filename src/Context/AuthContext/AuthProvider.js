import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    // register function 
    const registration =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    // Login function 
    const loginWithEP =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    // logOut function 
    const LogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
 
    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

/// update user 

const updateUser = (userInfo)=>{
    return updateProfile(auth.currentUser, userInfo)
}




    const authInfo = {auth, user, registration, loginWithEP, loading, LogOut, updateUser, setLoading}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
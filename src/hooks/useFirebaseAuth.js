import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';

import { 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        updateProfile,
        signOut
        } from 'firebase/auth';

export const useFirebaseAuth = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    const createUser = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const { user } =  await createUserWithEmailAndPassword(
                auth, 
                data.email,
                data.password
            )
            await updateProfile(user,{ 
                displayName: data.displayName
            })
            setLoading(false);

            return user

        } catch (error) {
            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = "The password must contain at least 6 characters."
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail already registered";
            } else {
                systemErrorMessage = "An error occurred, please try again later."
            }

            setLoading(false);

            setError(systemErrorMessage); 
        }

  }

  return { auth, createUser, error, loading}

}


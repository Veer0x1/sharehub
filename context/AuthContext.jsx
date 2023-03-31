import { useContext, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utility/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user?.displayName);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    console.log("LOGGING OUT");
    await router.replace("/");
    await signOut(auth);
  };

  useEffect(() => {
    if (user) {
      const usersRef = collection(db, "user");
      const query = doc(usersRef, user.uid);
      getDoc(query).then((docSnapshot) => {
        if (!docSnapshot.exists()) {
          setDoc(query, {
            name: user.displayName,
            balance: 1000000,
            Stocks: [],
            Bonds: [],
            MutualFunds: [],
            Crypto: [],
            investedValue: 0
          });
        }
      });
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ handleGoogleSignIn, user, logout, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

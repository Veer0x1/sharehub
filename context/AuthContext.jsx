import { useContext, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  set,
  addDoc,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db } from "../utility/firebase";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  //   const [user, setUser] = useState({});
  const [user, setUser] = useAuthState(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(user?.displayName);


  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
    }
  };

  const logout = async () => {
    console.log("LOGGING OUT");
    await router.replace("/");
    await signOut(auth);
    setIsLoggedIn(false);
    // setUser({});
  };

  useEffect(() => {
    if (user) {
      const usersRef = collection(db, "user");
      const query = doc(usersRef, user.uid);
      getDoc(query).then((docSnapshot) => {
        if (!docSnapshot.exists()) {
          setDoc(query, { name: user.displayName, balance: 1000000 });
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

//   const userRegistration = async (googleUser) => {
//     if (user?.name) return;
//     if (googleUser?.displayName) {
//       const CDref = doc(db, "campus directors", googleUser.uid);
//       const CDSnap = await getDoc(CDref);
//       if (CDSnap.exists()) {
//         // console.log("Document data:", CDSnap.data());
//         setUser(CDSnap.data());
//       } else {
//         const newUser = {
//           id: googleUser.uid,
//           referral_code:
//             googleUser.uid.slice(0, 4).toLowerCase() +
//             Date.now().toString().substring(9),
//           name: googleUser.displayName,
//           email: googleUser.email,
//           avatar: googleUser.photoURL,
//           time: Date.now(),
//           registrations: [],
//         };
//         await setDoc(doc(db, "campus directors", newUser.id), newUser);
//         setUser(newUser);
//         console.log("No such document!");
//       }
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       userRegistration(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

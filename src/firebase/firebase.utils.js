import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-DnyvJQlbmds6an8aropbMeWKjBg_DFE",
  authDomain: "crwn-db-44556.firebaseapp.com",
  projectId: "crwn-db-44556",
  storageBucket: "crwn-db-44556.appspot.com",
  messagingSenderId: "494970192481",
  appId: "1:494970192481:web:5537952191c91d3ee82020",
  measurementId: "G-ST922477PS",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //Means user does not exist then return
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

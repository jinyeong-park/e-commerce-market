import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDlNqob72O_NVzkv0DDKTQ-nfBRAVnhPFg",
  authDomain: "jbly-clothing-db.firebaseapp.com",
  databaseURL: "https://jbly-clothing-db.firebaseio.com",
  projectId: "jbly-clothing-db",
  storageBucket: "jbly-clothing-db.appspot.com",
  messagingSenderId: "170725713800",
  appId: "1:170725713800:web:2775fa6ae4d6d8df07bc3d",
  measurementId: "G-ZRX41V5GLP"
}

// make api request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // .set: create method
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error.message);

    }
  }
  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
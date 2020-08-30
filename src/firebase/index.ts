import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./config";

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const providor = new firebase.auth.GoogleAuthProvider();
export const PROVIDER_ID_Google = firebase.auth.GoogleAuthProvider.PROVIDER_ID;

export default firebase;

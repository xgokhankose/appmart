import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC6X-iJT6wHWLB1kDtxVH31NgVxSyfKBo0",
  authDomain: "appmart-d2a46.firebaseapp.com",
  projectId: "appmart-d2a46",
  storageBucket: "appmart-d2a46.appspot.com",
  messagingSenderId: "931524669219",
  appId: "1:931524669219:web:794e7184b75217cb08e696",
  measurementId: "G-BM60ED3E0F",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app);
export const storage = getStorage(app);

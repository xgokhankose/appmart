import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { collection } from 'firebase/firestore';
import config from './config';

const firebaseConfig = {
  apiKey: config.REACT_APP_FIREBASE_API_KEY,
  authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: config.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: config.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: config.REACT_APP_FIREBASE_APP_ID,
  measurementId: config.REACT_APP_FIREBASE_MEASUREMNT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app);
export const storage = getStorage(app);
export const productsRef = collection(db, 'products');

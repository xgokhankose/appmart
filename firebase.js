import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC6X-iJT6wHWLB1kDtxVH31NgVxSyfKBo',
  authDomain: 'appmart-d2a4.firebaseapp.com',
  projectId: 'appmart-d2a4',
  storageBucket: 'appmart-d2a4.appspot.com',
  messagingSenderId: '93152466921',
  appId: '1:931524669219:web:794e7184b75217cb08e69',
  measurementId: 'G-BM60ED3EF',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app);
export const storage = getStorage(app);
export const productsRef = collection(db, 'products');

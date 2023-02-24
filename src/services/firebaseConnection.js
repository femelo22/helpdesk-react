import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyBxpIfKqyiYGNhuHk0_FmTmMtrdEZkpStI',
  authDomain: 'sistema-chamados-aa440.firebaseapp.com',
  projectId: 'sistema-chamados-aa440',
  storageBucket: 'sistema-chamados-aa440.appspot.com',
  messagingSenderId: '282855201499',
  appId: '1:282855201499:web:667abf0509698fca2c4afe',
  measurementId: 'G-FB2YJ5MV0M',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

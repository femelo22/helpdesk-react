import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyBxpIfKqyiYGNhuHk0_FmTmMtrdEZkpStI',
  authDomain: 'sistema-chamados-aa440.firebaseapp.com',
  projectId: 'sistema-chamados-aa440',
  storageBucket: 'sistema-chamados-aa440.appspot.com',
  messagingSenderId: '282855201499',
  appId: '1:282855201499:web:667abf0509698fca2c4afe',
  measurementId: 'G-FB2YJ5MV0M',
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
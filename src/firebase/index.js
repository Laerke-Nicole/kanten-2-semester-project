// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Cloud firestone
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAoKtUqjD90pJeNV27dMc_yTE9jCtkOe5U',
  authDomain: 'kanten-web.firebaseapp.com',
  projectId: 'kanten-web',
  storageBucket: 'kanten-web.appspot.com',
  messagingSenderId: '194272900016',
  appId: '1:194272900016:web:2de8888c48dbc9c46b9c75'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
import { getAuth } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCksKN-aVavtKURSsemeZV2GXsQfcDHAnk',
  authDomain: 'netflixgpt-27db5.firebaseapp.com',
  projectId: 'netflixgpt-27db5',
  storageBucket: 'netflixgpt-27db5.firebasestorage.app',
  messagingSenderId: '2889722840',
  appId: '1:2889722840:web:87c5e81a3422f1e8de60ad',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

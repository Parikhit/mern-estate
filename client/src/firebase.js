import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'mern-estate-app-ed86a.firebaseapp.com',
    projectId: 'mern-estate-app-ed86a',
    storageBucket: 'mern-estate-app-ed86a.appspot.com',
    messagingSenderId: '294494636223',
    appId: '1:294494636223:web:d5a1a5219b19726f2f5e0a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

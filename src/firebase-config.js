import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDn7-LNlrUKHg-rvl52RJa1AWTXhQLHreA',
  authDomain: 'shrisathiproject.firebaseapp.com',
  projectId: 'shrisathiproject',
  storageBucket: 'shrisathiproject.appspot.com',
  messagingSenderId: '1052231324050',
  appId: '1:1052231324050:web:c58141773a86270eecb14b',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

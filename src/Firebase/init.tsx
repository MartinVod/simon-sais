import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Initialize Firebase app
const firebaseConfig = {
  apiKey: 'AIzaSyBkzQ48eCfsfzNkrUHz0M_gqdqRu8vZ1fU',
  authDomain: 'simonsais-a38e0.firebaseapp.com',
  projectId: 'simonsais-a38e0',
  appId: 'com.martinvod.simonsais',
};

let firebaseApp;
if (getApps().length === 0) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

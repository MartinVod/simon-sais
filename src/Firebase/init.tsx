import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Initialize Firebase app
const firebaseConfig = {
  apiKey: 'AIzaSyBkzQ48eCfsfzNkrUHz0M_gqdqRu8vZ1fU',
  projectId: 'simonsais-a38e0',
  appId: 'com.martinvod.simonsais',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBetUhB8zz2w16N_n-dW9qjrrIv3Vwxghg",
  authDomain: "ducfirstproject-2002.firebaseapp.com",
  projectId: "ducfirstproject-2002",
  storageBucket: "ducfirstproject-2002.appspot.com",
  messagingSenderId: "753968790628",
  appId: "1:753968790628:web:c39f932b1d9ad12c9a7371",
  measurementId: "G-T8W0K9DM6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

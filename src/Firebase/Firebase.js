import { initializeApp , getApp ,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// import { config } from 'dotenv';
// config();

const firebaseConfig = {
  apiKey: "AIzaSyCHr1ASmK0Td7dfbu1mKHUSEMo62ZX_xVg",
  authDomain:  "leetclone-66f8e.firebaseapp.com",
  projectId:  "leetclone-66f8e",
  storageBucket:  "leetclone-66f8e.appspot.com",
  messagingSenderId: "926668420248",
  appId: "1:926668420248:web:1ee488724f3386875b4ced",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth,app,firestore};
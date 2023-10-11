import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: Process.env.REACT_APP_API_KEY,
  authDomain: Process.env.REACT_APP_AUTH_DOMAIN,
  projectId: Process.env.REACT_APP_PROJECT_ID,
  storageBucket: Process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: Process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: Process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore 초기화
const appFireStore = getFirestore(app);

// 인증 초기화
const appAuth = getAuth();

export { appFireStore, appAuth };

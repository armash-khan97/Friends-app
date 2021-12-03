import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyChMxHZOFBUe2hPgmsIBLNG2EOO1Uon-tA",
  authDomain: "friends-app-59d85.firebaseapp.com",
  projectId: "friends-app-59d85",
  storageBucket: "friends-app-59d85.appspot.com",
  messagingSenderId: "170111344327",
  appId: "1:170111344327:web:eff0ac7c438c6794bd68e2",
  measurementId: "G-HL0MGLG260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
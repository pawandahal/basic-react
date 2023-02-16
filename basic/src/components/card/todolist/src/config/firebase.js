
import { initializeApp } from "firebase/app";
import {getDatabase,ref,set,update,onValue} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDbnEcHMV08VOwvJxiFUyK9pGuqLdqM0oc",
  authDomain: "todos-app-436a5.firebaseapp.com",
  databaseURL: "https://todos-app-436a5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todos-app-436a5",
  storageBucket: "todos-app-436a5.appspot.com",
  messagingSenderId: "1092350635646",
  appId: "1:1092350635646:web:dcb7e79d46beb22021b22f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app)
export {database,ref,set,update,onValue};
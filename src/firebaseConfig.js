import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_jBU_PK3b-Ba_7WgjcWBSZpShlBzkOeE",
  authDomain: "ecommerce2000.firebaseapp.com",
  projectId: "ecommerce2000",
  storageBucket: "ecommerce2000.appspot.com",
  messagingSenderId: "876980607418",
  appId: "1:876980607418:web:0a464edf63f5922d706583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
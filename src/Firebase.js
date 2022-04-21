import {initializeApp} from "firebase/app";
import  {getFirestore} from"@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJtTI-nK_abvb3O-vF1riXxBK4GoB7_QQ",
    authDomain: "projet-mobile-intensif.firebaseapp.com",
    projectId: "projet-mobile-intensif",
    storageBucket: "projet-mobile-intensif.appspot.com",
    messagingSenderId: "842541748608",
    appId: "1:842541748608:web:18a975325b2edf8f25f165"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
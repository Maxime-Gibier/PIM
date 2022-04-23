import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDJtTI-nK_abvb3O-vF1riXxBK4GoB7_QQ",
	authDomain: "projet-mobile-intensif.firebaseapp.com",
	projectId: "projet-mobile-intensif",
	storageBucket: "projet-mobile-intensif.appspot.com",
	messagingSenderId: "842541748608",
	appId: "1:842541748608:web:18a975325b2edf8f25f165",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result) =>{
        console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error)=>{
        console.log(error);
    })
};

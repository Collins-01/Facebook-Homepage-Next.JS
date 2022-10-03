import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-EBuY6fJp_ZYllI5P6qShCsetwxme9Pg",
    authDomain: "facebook-website-demo.firebaseapp.com",
    projectId: "facebook-website-demo",
    storageBucket: "facebook-website-demo.appspot.com",
    messagingSenderId: "386220632673",
    appId: "1:386220632673:web:ffccad759fab3c04521820",
    measurementId: "G-WZKC2SHXM5"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const storage = getStorage(app);
  
  
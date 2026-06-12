import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-v3bmaiAl_QbqxVyqYerOBC76TxEm3uw",
  authDomain: "airbnb-firenze-f45e9.firebaseapp.com",
  projectId: "airbnb-firenze-f45e9",
  storageBucket: "airbnb-firenze-f45e9.firebasestorage.app",
  messagingSenderId: "563836044492",
  appId: "1:563836044492:web:b1f28c6302c445bf80ae69"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

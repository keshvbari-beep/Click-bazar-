import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAm21JJrnFio4st-g9fzZXtGIJe9O55dog",
  authDomain: "click-bazar-34142.firebaseapp.com",
  projectId: "click-bazar-34142",
  storageBucket: "click-bazar-34142.firebasestorage.app",
  messagingSenderId: "935418282030",
  appId: "1:935418282030:web:7414bf771fa1a5df721fbf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

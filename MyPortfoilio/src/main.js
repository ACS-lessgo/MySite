import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyB8UNrnpPnP-65Snz3_QJ5IMclWLEANUVQ",
  authDomain: "my-portfolio-7d4ff.firebaseapp.com",
  databaseURL: "https://my-portfolio-7d4ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-7d4ff",
  storageBucket: "my-portfolio-7d4ff.appspot.com",
  messagingSenderId: "315985407581",
  appId: "1:315985407581:web:748f9668334e93b02667b4"
};


const app = initializeApp(firebaseConfig);
// Create a reference to your Firebase database
const db = getDatabase();
const formDataRef = ref(db, "formData"); // Use your desired database path
createApp(App).use(router).provide("$app", app).mount('#app'); // firebase available globally

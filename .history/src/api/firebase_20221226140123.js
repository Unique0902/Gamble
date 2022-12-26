import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDNcN7jGP0dvdhIW1hbJzTAOxuMVPLK-Ss',
  authDomain: 'gamble-8fe9a.firebaseapp.com',
  databaseURL:
    'https://gamble-8fe9a-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gamble-8fe9a',
  storageBucket: 'gamble-8fe9a.appspot.com',
  messagingSenderId: '1098870381181',
  appId: '1:1098870381181:web:e46dd831e8fe396a1d6f14',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
  });
}

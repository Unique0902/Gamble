import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

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

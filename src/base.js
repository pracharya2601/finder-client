import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBSGwZG0pyofm7wnEtxzv8ddXA75Pg2T3A',
  authDomain: 'cocoontechlab.firebaseapp.com',
  databaseURL: 'https://cocoontechlab.firebaseio.com',
  projectId: 'cocoontechlab',
  storageBucket: 'cocoontechlab.appspot.com',
  messagingSenderId: '100536164171',
  appId: '1:100536164171:web:6f129db2e882bfa96892ce',
  measurementId: 'G-FJ577FJ3EJ',
};
firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase as default };

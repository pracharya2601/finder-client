import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDgsauhHRZWFQoz6Su6WXh2S3OEoSgJAjU',
  authDomain: 'easypezy-39664.firebaseapp.com',
  databaseURL: 'https://easypezy-39664.firebaseio.com',
  projectId: 'easypezy-39664',
  storageBucket: 'easypezy-39664.appspot.com',
  messagingSenderId: '609611715142',
  appId: '1:609611715142:web:3e11d610f4fc59e7567047',
  measurementId: 'G-WE4YXW4HHW',
};
firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase as default };

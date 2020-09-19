import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
// import 'firebase/analytics'
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_APP_ID,
    // measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
  });
//   firebase.analytics();
}

export default firebase;
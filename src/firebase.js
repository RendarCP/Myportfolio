import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { initializeApp } from 'firebase';

const settings = {timestampsInSnapshots: true};

// const app = initializeApp({
//         apiKey: "AIzaSyAbzWd1xUtVrumLso61mC9mu0LUVR0VVb4",
//         authDomain: "myportfolio-0217.firebaseapp.com",
//         databaseURL: "https://myportfolio-0217.firebaseio.com",
//         projectId: "myportfolio-0217",
//         storageBucket: "myportfolio-0217.appspot.com",
//         messagingSenderId: "845530695306"
// })
const config = {
        apiKey: "AIzaSyAbzWd1xUtVrumLso61mC9mu0LUVR0VVb4",
        authDomain: "myportfolio-0217.firebaseapp.com",
        databaseURL: "https://myportfolio-0217.firebaseio.com",
        projectId: "myportfolio-0217",
        storageBucket: "myportfolio-0217.appspot.com",
        messagingSenderId: "845530695306"
}

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;

// export const db = app.database();
// export const pfRef = db.ref('portfolio');
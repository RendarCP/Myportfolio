import { initializeApp } from 'firebase';

const app = initializeApp({
        apiKey: "AIzaSyAbzWd1xUtVrumLso61mC9mu0LUVR0VVb4",
        authDomain: "myportfolio-0217.firebaseapp.com",
        databaseURL: "https://myportfolio-0217.firebaseio.com",
        projectId: "myportfolio-0217",
        storageBucket: "myportfolio-0217.appspot.com",
        messagingSenderId: "845530695306"
})

export const db = app.database();
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBhPa55KLxEcVmodMjC7RTISgrdhQGSsrQ",
    authDomain: "fir-1917e.firebaseapp.com",
    databaseURL: "https://fir-1917e.firebaseio.com",
    projectId: "fir-1917e",
    storageBucket: "",
    messagingSenderId: "118442598435"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth
};

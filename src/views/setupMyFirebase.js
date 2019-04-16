import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDrRP1ewh9C5R2QhL4gvYz7pl_g6qBPL0k",
  authDomain: "semesterproject-235b9.firebaseapp.com",
  databaseURL: "https://semesterproject-235b9.firebaseio.com",
  projectId: "semesterproject-235b9",
  storageBucket: "semesterproject-235b9.appspot.com",
  messagingSenderId: "358587526074"
};
firebase.initializeApp(config);

export const MYDB = firebase.database();
export const DBAUTH = firebase.auth();
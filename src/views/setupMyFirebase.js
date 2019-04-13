import firebase from "firebase";

const config = {

};
firebase.initializeApp(config);

export const MYDB = firebase.database();
export const DBAUTH = firebase.auth();

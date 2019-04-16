<template>
  <div id="top">
    <h1>Semester Project for CIS 371</h1>
    <div id="signin">
      <h2>Login</h2>
      <div class="fields">
        <input id="InEmail" type="text" placeholder="Email">
        <br>
        <input id="InPass" type="password" placeholder="Password">
        <br>
        <button v-on:click="Signin">Sign In</button>
      </div>
    </div>

    <div id="signup">
      <h2>Sign Up</h2>
      <div class="fields">
        <input id="UpUser" type="text" placeholder="Username">
        <br>
        <input id="UpEmail" type="text" placeholder="E-mail">
        <br>
        <input id="UpPass" type="password" placeholder="Password">
        <br>
        <button v-on:click="Register">Register</button>
        <br>
        <button v-on:click="$router.go(-1)">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    MYDB
  } from "./setupMyFirebase.js";
  import {
    DBAUTH
  } from "./setupMyFirebase.js";

  export default {
    methods: {
      Signin() {
        let Email = document.getElementById("InEmail").value;
        let password = document.getElementById("InPass").value;
        DBAUTH.signInWithEmailAndPassword(Email, password)
      },

      Register() {
        let Email = document.getElementById("UpEmail").value;
        let password = document.getElementById("UpPass").value;
        let username = document.getElementById("UpUser").value;

        DBAUTH.createUserWithEmailAndPassword(Email, password)
          .then(function (user) {
            MYDB.ref().child("Users").child(DBAUTH.currentUser.uid).child("Username").set(username);
          })
      }
    }
  }
</script>
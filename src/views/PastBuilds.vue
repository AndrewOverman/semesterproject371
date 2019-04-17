<template>
  <div>
    <h1>Your Past Builds:</h1>
    <br>
    <button class="link" v-on:click="$router.go(-1)">Back</button>
    <br>
  </div>
</template>

<style>
  img {
    text-align: center;
    padding: 3px
  }
</style>

<script>
  import {
    MYDB
  } from "./setupMyFirebase.js";
  import {
    DBAUTH
  } from "./setupMyFirebase.js";
  export default {
    props: {
      champion: {
        type: String
      },

    },
    data() {
      return {
      }
    },
    beforeMount() {

    },
    methods: {
      resetItems() {
        for (var i = 142; i < this.$data.items.length + 142; i++) {
          document.getElementById(i).style.filter = "grayscale(100%)";
        }
        this.$data.selectedItems = [];
      },
      resetChamps() {
        for (var i = 0; i < this.$data.champs.length; i++) {
          document.getElementById(i).style.filter = "grayscale(100%)";
        }
        this.$data.selectedChampion = [];
        console.log(this.$data.selectedChampion);
      },
      share() {
        if (this.$data.selectedChampion.length != 1) {
          alert("Please select one champion.");
        } else if (this.$data.selectedItems.length != 6) {
          alert("Please select 6 items.");
        } else if (this.$data.buildComment == "") {
          alert("Please input a comment")
        } else {
          alert("submitted :)");
          let newKey = MYDB.ref().child(DBAUTH.currentUser.uid).push().key;
          MYDB.ref().child("CustomBuilds").child(DBAUTH.currentUser.uid).child(newKey).child("Items").set(this.$data
            .selectedItems);
          MYDB.ref().child("CustomBuilds").child(DBAUTH.currentUser.uid).child(newKey).child("Champ").set(this.$data
            .selectedChampion);
          MYDB.ref().child("CustomBuilds").child(DBAUTH.currentUser.uid).child(newKey).child("Comment").set(this.$data
            .buildComment);
        }

      }

    }
  }
</script>
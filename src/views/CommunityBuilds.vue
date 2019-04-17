<template>
  <div>
    <h1>Your Past Champions:</h1>
    <br>
    <button class="link" v-on:click="$router.go(-1)">Back</button>
    <br>
    <table id="buildTable" align="center">
      <tr>
        <th>Champion</th>
      </tr>
    </table>
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

    },
    data() {
      return {
        buildTableID :  document.getElementById("buildTable")
      }
    },
    beforeMount() {

    },
    mounted(){
      MYDB.ref().child("Builds").child(DBAUTH.uid).once('value', snapshot => {
        snapshot.forEach(build => {
          console.log("NO ERROR")
          this.buildTable(this.$data.buildTableID, build);
        })
      });
      //this.buildTable(buildTable, MYDB.ref().child("Builds").child(DBAUTH.currentUser.uid).child(DBAUTH.currentUser.key).val());
    },
    methods: {
      buildTable(table, build) {
        let newTable = document.getElementById("buildTable");
        let numRows = MYDB.ref().child("Builds").length;
        let row = document.createElement("tr");
        row.id = build.key;
        let champion = build.child("Champ").val();
        let items = build.child("Items").val();
        let comment = build.child("Comment").val();
        console.log(champion);
        console.log(items);
        console.log(comment);

        let td = document.createElement("td");
        let champImg = document.createElement("img");
        console.log("Got here")
        champImg.src = "https://ddragon.leagueoflegends.com/cdn/9.7.1/img/champion/" + champion + ".png";
        td.appendChild(champImg);
        row.appendChild(td);
        newTable.appendChild(row);
        // for (let i = 0; i < 6; i++) {
        //   let td = document.createElement("td");
        //   td.id 
        // }
        // var img = document.createElement("img");
        // img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

        // var src = document.getElementById("header");
        // .appendChild(img);
        // let itemsHTML = [];
        // for (let i = 0; i < 6; i++) {
        //   itemsHTML.push("<img src='https://ddragon.leagueoflegends.com/cdn/9.7.1/img/item/' +  items + '.png'"
        //     alt = "" > );
        //   "
        // }
        // "<td>" + items + "</td>" +
        //   "<td>" + comment + "</td>" +
        //   row.innerHTML = friendrow;
        // table.appendChild(row);

        //(table, friend) {
        // let row = document.createElement("tr");
        // row.id = friend.key;
        // let name = friend.child("name").val();
        // let age = friend.child("age").val();
        // let number = friend.child("phone").val();
        // if (number.length == 7) {
        //   number = number.substring(0, 3) + "-" + number.substring(3);
        // } else if (number.length == 10) {
        //   number = "(" + number.substring(0, 3) + ") " + number.substring(3, 6) + "-" + number.substring(6);
        // }
        // let friendrow = "<td>" + name + "</td>" + "<td>" + age + "</td>" + "<td>" + number + "</td>" +
        //   "<td><button class='delete-button' onclick='deleteRow(this)'>Remove</button></td>";
        // row.innerHTML = friendrow;
        // table.appendChild(row);
      },
      checkListeners() {
        // let friendsTable = document.getElementById("friendsTable");
        // let searchTable = document.getElementById("searchTable");

        // friendsRef.on('child_added', snapshot => {
        //   buildTable(friendsTable, snapshot);
        // });

        // friendsRef.on('child_removed', snapshot => {
        //   let key = snapshot.key;
        //   let friendsTableRow = friendsTable.querySelector("tr[id='" + key + "']");
        //   friendsTable.removeChild(friendsTableRow);
        // });
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
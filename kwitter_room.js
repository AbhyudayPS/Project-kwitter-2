
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCfp4kTu1IbAPwhv4JBCkCz2_oHkuDjQh8",
    authDomain: "class-test-bdf82.firebaseapp.com",
    databaseURL: "https://class-test-bdf82-default-rtdb.firebaseio.com",
    projectId: "class-test-bdf82",
    storageBucket: "class-test-bdf82.appspot.com",
    messagingSenderId: "456963777690",
    appId: "1:456963777690:web:afd37fcabb50f20a86eb23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
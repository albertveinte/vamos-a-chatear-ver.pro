var firebaseConfig = {
  apiKey: "AIzaSyBE1M6cDwtoJzQocljML7nMAfW5v2RoCSQ",
  authDomain: "kwitter-70b9d.firebaseapp.com",
  databaseURL: "https://kwitter-70b9d-default-rtdb.firebaseio.com",
  projectId: "kwitter-70b9d",
  storageBucket: "kwitter-70b9d.appspot.com",
  messagingSenderId: "670366606174",
  appId: "1:670366606174:web:bead5d7f2c0bd34b80e5cf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
  }
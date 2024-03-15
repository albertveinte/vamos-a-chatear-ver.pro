//AGREGA TUS ENLACES DE FIREBASE AQUÍ
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

      user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bienvenido " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "añadir el nombre de la sala" 
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Inicia el código
      console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
     //Finaliza el código
     });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
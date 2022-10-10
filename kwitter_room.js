
const firebaseConfig = {
  apiKey: "AIzaSyA78dV3PR7NFBkMQECKg-QRrbRsXsplVGI",
  authDomain: "kwitter-webpage-97d7a.firebaseapp.com",
  databaseURL: "https://kwitter-webpage-97d7a-default-rtdb.firebaseio.com",
  projectId: "kwitter-webpage-97d7a",
  storageBucket: "kwitter-webpage-97d7a.appspot.com",
  messagingSenderId: "1030339291421",
  appId: "1:1030339291421:web:0cc99926b273f7ad54d9f4",
  measurementId: "G-MWSSLJKMGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

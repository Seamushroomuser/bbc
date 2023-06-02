var firebaseConfig = {
    apiKey: "AIzaSyC1NJpDVLBI5o6ru1Af45diZJJvb9i6vBw",
    authDomain: "class-test-ae76f.firebaseapp.com",
    databaseURL: "https://class-test-ae76f-default-rtdb.firebaseio.com",
    projectId: "class-test-ae76f",
    storageBucket: "class-test-ae76f.appspot.com",
    messagingSenderId: "752985085991",
    appId: "1:752985085991:web:1a1291513b38e057f0d602"
};
var firebase;
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name + "!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "add room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row; }); }); } 
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
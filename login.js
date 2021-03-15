var firebaseConfig = {
  apiKey: "AIzaSyD3tADzBd9_DBvugRDYOicZMyYQsAEo9WE",
  authDomain: "kwitter-ce7ea.firebaseapp.com",
  projectId: "kwitter-ce7ea",
  storageBucket: "kwitter-ce7ea.appspot.com",
  messagingSenderId: "1047711127867",
  appId: "1:1047711127867:web:c13ee84e609924bf707f1e",
  measurementId: "G-47KJQL9N2E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose: "adding user"
    });
    window.location("kwitterroom.html")
}

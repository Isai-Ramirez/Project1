
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCPXKI0iPhjsRW1lbxJOgkOo6NNmiXp-3s",
    authDomain: "digital-footprint-1999d.firebaseapp.com",
    databaseURL: "https://digital-footprint-1999d.firebaseio.com",
    projectId: "digital-footprint-1999d",
    storageBucket: "",
    messagingSenderId: "820087665716"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit-button").on("click", function(event) {
    event.preventDefault();

   var search = $("#search").val().trim();
   console.log(search);
   console.log("Submit");

  // var newSearch = {
   //    info: search,
   //};

   database.ref().push(search);

   //console.log(newSearch.info);

  // $("#search").val("");

  });

  database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());

      var search = childSnapshot.val();


  });

  $("#facebook").on("click", function(){
      var datestamp = Date.now();

      database.ref().push(datestamp);
      database.ref().push(this.id)
  });

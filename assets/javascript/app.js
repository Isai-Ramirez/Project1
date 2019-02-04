
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

  
  //on click function on search button
  $("#submit-button").on("click", function(event) {
    event.preventDefault();

   var search = $("#search").val().trim();
   console.log(search);
   console.log("Submit");

  
   database.ref().push(search);


  });
  // storing child info
  database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());

      var search = childSnapshot.val();
      


  });
   
// monitoring clicks and time clicked for facebook link
  $("#facebook").on("click", function(){
      var datestamp = Date.now();

      database.ref().push(datestamp);
      database.ref().push(this.id)
  });

  // monitoring clicks and time clicked on menu items
  $("a").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});




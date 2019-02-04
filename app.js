
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

   var queryURL;
   var secondQuery;
   var search = $("#search").val().trim();
   var datestamp = Date.now();
   console.log(search);
   console.log("Submit");

   database.ref().push(datestamp);
   database.ref().push(search);


   $.ajax({
       url: queryURL,
       method: "GET"
   }).then(function(response){
       $("#first").append("First Name: " + response)
       $("#last").append("Last Name: " + response)
       $("#city").append("City: " + response)
       $("#country").append("Country: " + response)
       
       $("#zip").append("Zip: " + response)



  });

    $.ajax({
        url: secondQuery,
        method: "GET"
    }).then(function(response){
        $("#isp").append("ISP: " + response)
    })
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
  $("#a").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});
$("#home").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});
$("#phone").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});
$("#email").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});
$("#address").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});
$("#account").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});
$("#title").on("click", function () 
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
});
$("#submit").on("click", function()
{
    var datestamp = Date.now();
    database.ref().push(datestamp);

    var content = this.innerText;
    database.ref().push(content);
})


});

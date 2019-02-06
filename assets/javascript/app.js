
$(document).ready(function () 
{
    
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
    $("#submit-button").on("click", function (event) {
    event.preventDefault();
    
    var search = $(".validate").val();
    console.log(search);
    console.log("Submit");
    $(".validate").val("");
    $("#first_name").removeClass("valid");
    $("#last_name").removeClass("valid");
    $("#firstname_label").removeClass("active");
    $("#lastname_label").removeClass("active");
    
    $("#address").removeClass("valid");
    $("#address_label").removeClass("active");

    $("#phone").removeClass("valid");
    $("#phone_label").removeClass("active");

    $("#email").removeClass("valid");
    $("#email_label").removeClass("active");
    

    
    database.ref().push(search);

    var timer = 15;
    var myInterval;
    $(".progress").removeClass("hide");

    myInterval = setInterval(decrement, 1000);
    function decrement() {
        timer--;
        if (timer === 0){
            stop();
        }
    }

    function stop() {
        clearInterval(myInterval);
        $("#status-bar").addClass("hide");
    }
    
    
});

// storing child info
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    
    var search = childSnapshot.val();
    
    
});

// monitoring clicks and time clicked for facebook link
$("#facebook").on("click", function () {
    var datestamp = Date.now();
    
    database.ref().push(datestamp);
    database.ref().push(this.id)
});

// monitoring clicks and time clicked on menu items
$("a").on("click", function () {
    var datestamp = Date.now();
    database.ref().push(datestamp);
    
    var content = this.innerText;
    database.ref().push(content);
});

// side nav bar + modal
$('.sidenav').sidenav();
$('.modal').modal();
});

        
        var content = this.innerText;
         database.ref().push(content);

   




    // monitoring clicks and time clicked for facebook link
    $("#facebook").on("click", function () {
        var datestamp = Date.now();

        database.ref().push(datestamp);
        database.ref().push(this.id)
    });

    // monitoring clicks and time clicked on menu items
    $("#a").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    });
    $("#home").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    });
    $("#phone").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    });
    $("#email").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    });
    $("#address").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    });
    $("#account").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    });
    $("#title").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    });
    $("#submit").on("click", function () {
        var datestamp = Date.now();
        database.ref().push(datestamp);

        var content = this.innerText;
        database.ref().push(content);
    })
     $('.sidenav').sidenav();
     $('.modal').modal();
  ;


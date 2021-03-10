
     $(".btn").hover(
     function () {
         $(this).addClass("hovertest");
     }, function () {
         $(this).removeClass("hovertest");
     });


     $(document).click(function () {
         var yourName = prompt("What is your name?");
         var yourAge = prompt("How old are you?");
         var capitalFirstChar = yourName.slice(0,1).toUpperCase();
var restOfName = yourName.slice(1, yourName.length).toLowerCase();
var fullName = capitalFirstChar + restOfName;
alert("Hello " + fullName);
     })
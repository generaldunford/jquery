$(document).ready(function () {

$.ajax({
    type: "get",
    url: "https://v2.jokeapi.dev/joke/Any",
    dataType: "json",
    success: function (response) {
        $("p").text(response.setup)
        $("h1").text(response.delivery)
        
    }
});

// animate a text

new Typed("#animate", {
  
string: ["i am a frontend dev", "reach out to me on","+2348033418532"],
typeSpeed: 100,
backSpeed: 100,
loop: true


})
    
});
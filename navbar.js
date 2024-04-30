$(document).ready(function(){

     $("button").click(function(){ 
        $(".small a").css("display","block");
        $(".small a").css("margin","1rem 0");
        $(".small").toggle(3000)

        $("#testing").toggleClass("logo")
        
     })
})
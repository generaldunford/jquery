$(document).ready(function() {

  //  $("button").click(function() {
  //      $("h1").css("color", "red");
  //      $("h1").css("transition", "all 10s ease-in-out")
 //       $("h1").css("transition", 'rotate(360deg)')
        
 // })

 $("input").change(function(){

     let whatyoutype = $(this).val()
     
     $("h1").text(whatyoutype)


    
 })
    
})


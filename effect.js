$(document).ready(function() {

    // hide text
    $("#hide").click(function() {
        $("h1").hide(2000)
    })

    // show text
    $("#show").click(function() {
        $("h1").show(2000)
        
    })

    // toggle  text
    $("#toggle").click(function() {
        $("h1").toggle(2000)
    })

    // slide up
    $("#slideup").click(function() {
        $("h1").slideUp(3000)
        
    })

    // slide down
    $("slidedown").click(function() {
        $("h1").slideDown(3000)
        
    })

    //fade in
    $("#fadein").click(function() {
        $("h1").fadeIn(3000)
    })

    // fade out
    $("#fadeout").click(function() {
        $("h1").fadeOut(3000)
    })

    // fade toggle
    $("#fadetoggle").click(function() {
        $("h1").fadeToggle(3000)
        
    })

    // fade to
    $("fadeto").click(function() {
        $("h1").fadeTo("3000")
    })
    
})
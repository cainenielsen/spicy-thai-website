window.onscroll = function (e) {  
    if($("html").scrollTop() !== 0) {

        $("#nav-bar-top").removeClass("fade-out");
        $("#nav-bar-top").addClass("fade-in");
        $("#nav-bar-top").css("background-color", "white");
        document.getElementById("nav-bar-top").style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
        

    }   else {

        $("#nav-bar-top").removeClass("fade-in");
        $("#nav-bar-top").addClass("fade-out");
        $("#nav-bar-top").css("background-color", "initial");
        document.getElementById("nav-bar-top").style.boxShadow = "initial";

    }     
}
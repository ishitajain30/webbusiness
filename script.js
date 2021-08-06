var toggle = document.querySelector(".toggle");
var topNav = document.querySelector(".nav ul");

toggle.addEventListener("click", function() {
    console.log("toggle clicked");
    topNav.classList.toggle("active");
});

function choice(){
    document.querySelector(".choice").style.display = "block";
}
var d = document.querySelector("#date span");
var greetings;
var hours = new Date().getHours();
var mins = new Date().getMinutes();
if (hours < 12 ){
    greetings = "good morning";
} else if (hours <= 17){
    greetings = "Good afternoon";
}
else {
    greetings =  "Good evening";
}
d.innerHTML = greetings;
document.querySelector("#hours").innerHTML = hours;
document.querySelector("#mins").innerHTML = mins;

document.querySelector(".light").addEventListener("click", function(){
    document.querySelector(".choice").style.display = "none";
    alert("light mode is enabled")
})
document.querySelector(".dark").addEventListener("click", function() {
    document.querySelector(".choice").style.display = "none";
    document.querySelector(".nav").style.color = "white";
    document.querySelector(".nav").style.backgroundColor = "black";
    document.querySelector(".toggle").style.border = "3px solid white";
    document.querySelector(".toggle .fas").style.color = "white";
    document.querySelector(".nav ul").style.backgroundColor = "black";
    // document.querySelector(".#home").style.backgroundColor = "black";

    var x = document.querySelectorAll(".black");
    var purple = document.querySelectorAll(".purple");
    var gray = document.querySelectorAll(".gray");
    var btn_purple = document.querySelectorAll(".btn_purple");
    var i;
    for(i=0; i < x.length; i++) {
        x[i].style.color = "white";
    }
    for(i=0; i < purple.length; i++) {
        purple[i].style.color = "#ECECEC";
    }
    for(i=0; i < gray.length; i++) {
        gray[i].style.color = "#F0ECE2";
    }
    for(i=0; i < btn_purple.length; i++) {
        btn_purple[i].style.color = "#F2A365";
    }

});


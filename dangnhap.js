var lg = document.getElementById("login");
var rg = document.getElementById("register");

function login() {
    lg.style.left = "0px";
    rg.style.right = "-520px";
    lg.style.opacity = 1;
    rg.style.opacity = 0;
}

function register() {
    lg.style.left = "-510px";
    rg.style.right = "0px";
    lg.style.opacity = 0;
    rg.style.opacity = 1;
}

var eye_on = document.getElementById("eye_on");
var eye_off = document.getElementById("eye_off");
var password_show = document.getElementById("login_input-password");

function onClick(){
    if(password_show.type == "password"){
        password_show.type = "text";
        eye_off.style.display = "none";
        eye_on.style.display = "initial";
    } else {
        password_show.type = "password";
        eye_off.style.display = "initial";
        eye_on.style.display = "none";
    }
}

onClick();


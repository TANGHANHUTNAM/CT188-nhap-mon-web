function ClickLogin() {
    var lg = document.getElementById("login");
    var rg = document.getElementById("register");
    lg.style.left = "0px";
    rg.style.right = "-520px";
    lg.style.opacity = 1;
    rg.style.opacity = 0;
}

function ClickRegister() {
    var lg = document.getElementById("login");
    var rg = document.getElementById("register");
    lg.style.left = "-510px";
    rg.style.right = "0px";
    lg.style.opacity = 0;
    rg.style.opacity = 1;
}

// Hien thi pass
function ShowPass(){
var eye_on = document.getElementById("eye_on");
var eye_off = document.getElementById("eye_off");
var password_show = document.getElementById("login_input-password");
    if(password_show.type == "password"){
        password_show.type = "text";    
        eye_off.style.display = "initial";
        eye_on.style.display = "none";
    } else if(password_show.type == "text") {
        password_show.type = "password";
        eye_off.style.display = "none";
        eye_on.style.display = "initial";
    }
}


const login = document.getElementById("login");
const email_lg = document.getElementById("login_input-mail");
const password_lg = document.getElementById("login_input-password");
const register = document.getElementById("register");
const ho_rg = document.getElementById("register_input-ho");
const ten_rg = document.getElementById("register_input-ten");
const email_rg = document.getElementById("register_input-email");
const password_rg = document.getElementById("register_input-password");

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.add("error");
    parent.classList.remove("success");
    small.innerText = message;
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.remove("error");
    parent.classList.add("success");
    small.innerText = "Success";
}

function checkEmptyError(list){
    let isEmptyError = false;
    list.forEach(input => {
        input.value = input.value.trim();
        if(input.value === ""){
            isEmptyError = true;
            showError(input, "This field is required");
        }
    });
    return isEmptyError;
}

function checkEmailError(input){
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if(isEmailError){
       showError(input, "Email is Invalid");
    } 
    return isEmailError;
}

function checkLengthError(input, min, max){
    input.value = input.value.trim();

    if(input.value.length < min) {
        showError(input, `Must be at least ${min} characters`);
        return true;
    } if(input.value.length > max){
        showError(input, `Do not exceed ${max} characters`);
        return true;
    }
    return false;
    
}

login.addEventListener("submit", function(e){
    e.preventDefault();
    var isEmptyError = checkEmptyError([email_lg, password_lg]);
    var isEmailError = checkEmailError(email_lg);
    var isEmailLengthError = checkLengthError(email_lg, 6, 30);
    var isPasswordLengthError = checkLengthError(password_lg, 8, 30);
    // if(checkEmptyError([email_lg, password_lg])){
    //     return;
    // } else if (checkEmailError(email_lg)){
    //     return;
    // } else if (checkLengthError(email_lg, 6, 30)){
    //     return;
    // } else if (checkLengthError(password_lg, 8, 30)){
    //     return;
    // } else {
    //     var email = email_lg.value;
    //     var password = password_lg.value;
    //     var user = localStorage.getItem(email);
    //     var data = JSON.parse(user);
    //     if(user == null){
    //         alert("Email không tồn tại!");
    //         return;
    //     } else if(password != data.password){
    //         alert("Password không chính xác");
    //         return;
    //     } else if(email === data.email && password === data.password){
    //         alert("Đăng nhập thành công");
    //         window.location.href="./trangchu.html";
    //     }
    // }
});

register.addEventListener("submit", function(e){
    
    
    var ho = document.getElementById("register_input-ho").value;
    var ten = document.getElementById("register_input-ten").value;
    var email = document.getElementById("register_input-email").value;
    var password = document.getElementById("register_input-password").value;
    var user = {
        ho: ho,
        ten: ten,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert("Đăng ký thành công!");
    document.getElementById("register").reset();
    window.location.href="./dangnhap-dangky.html"; 
});





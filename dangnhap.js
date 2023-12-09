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
// Khai báo biến các input login
const login = document.getElementById("login");
const email_lg = document.getElementById("login_input-mail");
const password_lg = document.getElementById("login_input-password");
// Show lỗi
function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.add("error");
    parent.classList.remove("success");
    small.innerText = message;
}
// Show thành công
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.remove("error");
    parent.classList.add("success");
    small.innerText = "Success";
}

// Kiểm tra email rỗng
function checkEmptyEmailError(){
    let isEmptyError = false;
    email_lg.value = email_lg.value.trim();
    if(email_lg.value === ""){
        isEmptyError = true;
        showError(email_lg, "This field is required");
    } else {
        showSuccess(email_lg);
    }
    return isEmptyError;
}

// Kiểm tra password rỗng
function checkEmptyPasswordError(){
    let isEmptyError = false;
    password_lg.value = password_lg.value.trim();
    if(password_lg.value === ""){
        isEmptyError = true;
        showError(password_lg, "This field is required");
    } else {
        showSuccess(password_lg);
    }
    return isEmptyError;
}

// Kiểm tra email nhập vào đúng định dạng
function isValidEmail(email){
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(String(email).toLowerCase());
}

// Kiểm tra độ dài chuỗi nhập vào
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

// Kiểm tra email login hợp lệ
function checkEmailLogin(){
    var check = false;
    if(checkEmptyEmailError() || checkLengthError(email_lg, 6, 30)){
        check = false;
    } else if (!isValidEmail(email_lg.value)){
        showError(email_lg, "Email is Invalid");
        check = false;
    } else {
        showSuccess(email_lg);
        check = true;
    }
    return check;
}

// Kiểm tra password login hợp lệ
function checkPasswordLogin(){
    var check = false;
    if(checkEmptyPasswordError()){
        check = false;
    } else if (checkLengthError(password_lg, 8, 30)){
        check = false;
    } else {
        showSuccess(password_lg);
        check = true;
    }
    return check;
}

email_lg.addEventListener('blur', checkEmailLogin, true);
password_lg.addEventListener('blur', checkPasswordLogin, true);
const username = document.getElementsByClassName("username");
// Submit form đăng nhập
login.addEventListener("submit", function(e){
    e.preventDefault();
    var EmailLoginCorrect = checkEmailLogin();
    var PasswordLoginCorrect = checkPasswordLogin();
    if(!EmailLoginCorrect || !PasswordLoginCorrect){
        alert("Đăng nhập thất bại. Vui lòng nhập thông tin chính xác!");
    } else {
        var email = email_lg.value;
        var password = password_lg.value;
        var user = localStorage.getItem(email);
        var data = JSON.parse(user);
        if(user == null){
            alert("Email không tồn tại!");
            showError(email_lg, "Email does not exist!");
            return;
        } else if(password != data.password){
            alert("Password không chính xác!");
            showError(password_lg, "Password is incorrect!");
            return;
        } else if(email === data.email && password === data.password){
            e.preventDefault();
            alert("Đăng nhập thành công!");
            username.innerText = data.ten;
            window.location.href="./trangchu.html";
        }
    }
});



// Khai báo các biến input register
const register = document.getElementById("register");
const ho_rg = document.getElementById("register_input-ho");
const ten_rg = document.getElementById("register_input-ten");
const email_rg = document.getElementById("register_input-email");
const password_rg = document.getElementById("register_input-password");

// Kiểm tra họ
function checkHoRegister(){
    var check = false;
    if(ho_rg.value === ""){
        showError(ho_rg, "This field is required");
        check = false;
    } else {
        showSuccess(ho_rg);
        check = true;
    }
    return check;
}
// Kiểm tra tên
function checkTenRegister(){
    var check = false;
    if(ten_rg.value === ""){
        showError(ten_rg, "This field is required");
        check = false;
    } else {
        showSuccess(ten_rg);
        check = true;
    }
    return check;
}

// Kiểm tra Email đăng ký
function checkEmailRegister(){
    var check = false;
    if(email_rg.value === ""){
        showError(email_rg, "This field is required");
        check = false;
    } else if (checkLengthError(email_rg, 6, 30)){
        check = false;
    } else if(!isValidEmail(email_rg.value)){
        check = false;
        showError(email_rg, "Email is Invalid");
    } else {
        check = true;
        showSuccess(email_rg);
    }
    return check;
}

// Kiểm tra Password đăng ký
function checkPasswordRegister(){
    var check = false;
    if(password_rg.value === ""){
        showError(password_rg, "This field is required");
        check = false;
    } else if (checkLengthError(password_rg, 8, 30)){
        check = false;
    } else {
        check = true;
        showSuccess(password_rg);
    }
    return check;
}

ho_rg.addEventListener('blur', checkHoRegister, true);
ten_rg.addEventListener('blur', checkTenRegister, true);
email_rg.addEventListener('blur', checkEmailRegister, true);
password_rg.addEventListener('blur', checkPasswordRegister, true);

// Submit form Đăng ký
register.addEventListener("submit", function(e){
    e.preventDefault();
    var checkHo = checkHoRegister();
    var checkTen = checkTenRegister();
    var checkEmail = checkEmailRegister();
    var checkPassword = checkPasswordRegister();
    if(!checkHo || !checkTen || !checkEmail || !checkPassword){
        alert("Đăng ký thất bại. Vui lòng xem lại thông tin!");
    } else {
        var ho = ho_rg.value;
        var ten = ten_rg.value;
        var email = email_rg.value;
        var password = password_rg.value;
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
    }
});





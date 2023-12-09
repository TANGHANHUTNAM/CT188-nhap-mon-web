function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Lắng nghe sự kiện click nút Gửi
document.querySelector('.main_contactForm input[type="submit"]').addEventListener('click', function(event) {
  // Ngăn chặn hành vi mặc định của nút Gửi (tải lại trang)
  event.preventDefault();

  // Lấy giá trị email từ input
  var emailInput = document.querySelector('.main_contactForm input[name="email"]');
  var emailValue = emailInput.value;

  // Kiểm tra tính hợp lệ của email
  if (!validateEmail(emailValue)) {
    alert('Vui lòng nhập địa chỉ email hợp lệ.');
    return;
  }

  // Tiếp tục xử lý form (nếu email hợp lệ)
  submitForm();
});

function submitForm() {
  // Kiểm tra thông tin người dùng trước khi gửi
  var nameInput = document.querySelector('.main_contactForm input[name="name"]');
  var emailInput = document.querySelector('.main_contactForm input[name="email"]');
  
  if (nameInput.value.trim() === '') {
    alert('Vui lòng nhập họ và tên');
    nameInput.focus();
    return false;
  }
  
  if (emailInput.value.trim() === '') {
    alert('Vui lòng nhập email');
    emailInput.focus();
    return false;
  }
  
  // Gửi dữ liệu form liên hệ bằng Ajax
  var form = document.getElementById('form-Id');
  var xhr = new XMLHttpRequest();
  var url = form.action; // Lấy giá trị action của form
  
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Xử lý phản hồi từ máy chủ (nếu cần thiết)
      alert('Cảm ơn bạn đã liên hệ!');
    }
  };
  
  var formData = new FormData(form);
  var data = new URLSearchParams(formData).toString();
  xhr.send(data);
}
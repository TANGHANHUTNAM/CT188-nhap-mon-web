function submitForm(event) {
  event.preventDefault(); // Ngăn chặn gửi form mặc định

  // Lấy giá trị từ các trường input
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const messageInput = document.getElementById("messageInput");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  // Kiểm tra họ tên không được trống
  if (name === "") {
    alert("Vui lòng nhập họ và tên.");
    return;
  }

  // Kiểm tra địa chỉ email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Vui lòng nhập địa chỉ email hợp lệ.");
    return;
  }

  // Kiểm tra số điện thoại chỉ chứa chữ số và lời nhắn có ít nhất 8 kí tự
  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phone) || message.length < 8) {
    if (!phoneRegex.test(phone)) {
      alert("Vui lòng nhập số điện thoại hợp lệ (chỉ chứa chữ số).");
    }
    if (message.length < 8) {
      alert("Lời nhắn phải có ít nhất 8 kí tự.");
    }
    return;
  }

  // Thực hiện các hành động khác tại đây (ví dụ: gửi dữ liệu)
  

  // Reset giá trị của các input và textarea
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  messageInput.value = "";

  // Hiển thị thông báo gửi thông tin thành công
  alert("Thông tin đã được gửi thành công!");
}

// Gán sự kiện submit cho form
const form = document.getElementById("form-Id");
form.addEventListener("submit", submitForm);
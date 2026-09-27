const form = document.getElementById("loginForm");
const username = document.getElementById("loginusername");
const email = document.getElementById("loginemail");
const password = document.getElementById("loginpassword");
const savedUsername = localStorage.getItem("username");
const savedEmail = localStorage.getItem("email");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value === "") {
    alert("Vui lòng nhập tên đăng nhập");
    return;
  }
  if (email.value === "") {
    alert("Vui lòng nhập email");
    return;
  }
  if (password.value === "") {
    alert("Vui lòng nhập mật khẩu");
    return;
  }
  if (username.value !== savedUsername || email.value !== savedEmail) {
    alert("Thông tin đăng nhập không trùng khớp");
    return;
  }
  alert("Đăng nhập thành công");
  window.location.href = "cuoiki.html";
});

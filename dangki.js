const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nam = document.getElementById("nam");
const nu = document.getElementById("nu");
const matkhau = document.getElementById("matkhau");
const nhaplaimatkhau = document.getElementById("nhaplaimatkhau");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value === "") {
    alert("Vui lòng nhập tên đăng nhập!");
    return;
  }
  if (email.value === "") {
    alert("Vui lòng nhập email!");
    return;
  }
  if (birthdate.value === "") {
    alert("Vui lòng nhập ngày tháng năm sinh!");
    return;
  }
  if (!nam.checked && !nu.checked) {
    alert("Vui lòng lựa chọn giới tính");
    return;
  }
  if (matkhau.value !== nhaplaimatkhau.value) {
    alert("Mật khẩu nhập lại không khớp vui lòng kiểm tra lại");
    return;
  }
  console.log("Đã bấm nút đăng kí");
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("birthdate", birthdate.value);
  window.location.href = "dangnhap.html";
  console.log(username.value);
  console.log(email.value);
  console.log(birthdate.value);
  if (nam.checked) {
    console.log("Nam");
  }
  if (nu.checked) {
    console.log("Nữ");
  }
});

let form = document.getElementById("registerForm");
let hoten = document.getElementById("hoten");
let email = document.getElementById("email");
let matkhau = document.getElementById("matkhau");
let ngaysinh = document.getElementById("ngaysinh");
let nam = document.getElementById("nam");
let nu = document.getElementById("nu");
let thongbao = document.getElementById("thongbao");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (hoten.value === "") {
    thongbao.textContent = "Vui lòng nhập họ tên!";
    return;
  }
  if (email.value === "") {
    thongbao.textContent = "Vui lòng nhập email!";
    return;
  }
  if (matkhau.value === "") {
    thongbao.textContent = "Vui lòng nhập mật khẩu!";
    return;
  }
  if (ngaysinh.value === "") {
    thongbao.textContent = "Vui lòng nhập ngày tháng năm sinh!";
    return;
  }
  if (!nam.checked && !nu.checked) {
    thongbao.textContent = "Vui lòng chọn giới tính!";
    return;
  }
  thongbao.textContent = "Đăng ký thành công!";
});

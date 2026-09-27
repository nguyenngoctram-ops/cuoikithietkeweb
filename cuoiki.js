const username = localStorage.getItem("username");
const userdisplay = document.getElementById("userdisplay");
userdisplay.textContent = "👤" + username;
const buttons = document.querySelectorAll(".readmore");
const fullcontents = document.querySelectorAll(".fullcontent");
const logout = document.getElementById("logout");
logout.addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("email");

  window.location.href = "dangnhap.html";
});
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    if (fullcontents[index].style.display === "none") {
      fullcontents[index].style.display = "block";
      button.textContent = "Thu gọn";
    } else {
      fullcontents[index].style.display = "none";
      button.textContent = "Xem thêm";
    }
    console.log("Đã bấm nút");
  });
});

// drop down-----start
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);
// drop down-----end

let wk_mngt1 = document.getElementById("wk_mngt1");

wk_mngt1.addEventListener("click", () => {
  window.location.href = "../pages/wk_mngt.html";
});

let hreflink = document.getElementById("hrefLogin");
console.log(hreflink);

let useremail = localStorage.getItem("email");
console.log(useremail);

if (useremail) {
  const Uname = useremail.substring(0, useremail.indexOf("@"));
  console.log(Uname);

  hreflink.innerText = Uname;
}
// username show in navbar over

let opentaskpage = document.getElementById("opentaskpage");

opentaskpage.addEventListener("click", () => {
  if (hreflink.innerText == "Log in") {
    alert("Please login first");
  } else {
    window.location.href = "../pages/wk_task.html";
  }
});
// drop down-----start
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

let wk_mngt1 = document.getElementById("wk_mngt1");

wk_mngt1.addEventListener("click", () => {
  window.location.href = "./pages/wk_mngt.html";
});
// drop down-----end

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

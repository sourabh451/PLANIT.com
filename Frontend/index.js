// drop down-----start
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

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

const menuIcon = document.getElementById("menu-icon");
const xmarkIcon = document.getElementById("xmark");
const menuDisplay = document.getElementById("subnav-body");
const mainText = document.getElementById("main-text");

menuIcon.addEventListener("click", () => {
  //remove "off" & add "on"
  menuIcon.classList.remove("on");
  menuIcon.classList.add("off");
  //add "on" & remove "off"
  xmarkIcon.classList.remove("off");
  xmarkIcon.classList.add("on");
  //To open Display menu
  menuDisplay.style.display = "flex";
  //To remove main text
  mainText.style.display = "none";
});

xmarkIcon.addEventListener("click", () => {
  //add "on" & remove "off"
  xmarkIcon.classList.remove("on");
  xmarkIcon.classList.add("off");
  //remove "off" & add "on"
  menuIcon.classList.remove("off");
  menuIcon.classList.add("on");
  //To close Display menu
  menuDisplay.style.display = "none";
  //To add main text
  mainText.style.display = "flex";
});

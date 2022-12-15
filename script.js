<<<<<<< HEAD
let ham = document.querySelector(".hamburger");

ham.addEventListener("click", () => {
  console.log("ham clicked");
  let menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    document.getElementById("nav").style.display = "block";
  } else {
    menu.style.display = "none";
  }
=======
let ham = document.querySelector(".hamburger");

ham.addEventListener("click", () => {
  console.log("ham clicked");
  let menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    document.getElementById("nav").style.display = "block";
  } else {
    menu.style.display = "none";
  }
>>>>>>> 9b93b46fe4f45213bc3cb79f41b4a5a2a2da3b5e
})
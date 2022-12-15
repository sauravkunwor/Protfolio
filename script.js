let ham = document.querySelector(".hamburger");

ham.addEventListener("click", () => {
  console.log("ham clicked");
  let menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    document.getElementById("nav").style.display = "block";
  } else {
    menu.style.display = "none";
  }
})
let menuIcon = document.querySelector(".menu");
let links = document.querySelector("ul.links");

menuIcon.addEventListener("click", () =>{
  links.classList.add("mobile");
})
document.body.addEventListener("click", (e) => {
  if(e.target != menuIcon ) {
    links.classList.remove("mobile");
  }
})
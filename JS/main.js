let menuIcon = document.querySelector(".menu");
let links = document.querySelector("ul.links");
let links = document.querySelectorAll("ul.links li a");
menuIcon.addEventListener("click", () =>{
  links.classList.add("mobile");
})
links.forEach(link => {
  link.addEventListener("click" , (e) => {
    e.target.classList.add("active");
    links.forEach(link => {
      if(link.classList.contains("active") && link != e.target){
        link.classList.remove("active");
      }
    })
  })
})
document.body.addEventListener("click", (e) => {
  if(e.target != menuIcon ) {
    links.classList.remove("mobile");
  }
})

let menu = document.querySelector(".header__menu");
let menuList = document.querySelector(".menu-list");
let backdrop =  document.querySelector(".black-shadow");
let count = 0;

menu.addEventListener("click", () => {
  if(count == 0){
    menuList.classList.add("display");
    backdrop.classList.add("backdrop");
    count++;
  } else{
    menuList.classList.remove("display");
    backdrop.classList.remove("backdrop");
    count--;
  }
});

backdrop.addEventListener("click", () => {
  menuList.classList.remove("display");
  backdrop.classList.remove("backdrop");
  count--;
})


 const HamburgerBox = document.getElementById('HamburgerBox');

const NavElem =document.getElementById("NavElem")
console.log(NavElem);


HamburgerBox.addEventListener('click',(e)=>{
    e.stopPropagation();
  NavElem.classList.toggle("ShowHamburger");
})






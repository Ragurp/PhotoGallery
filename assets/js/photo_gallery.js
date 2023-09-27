let link = document.querySelector("link");
let flex = document.querySelector(".flex");
let grid = document.querySelector(".grid");
let h1 = document.querySelector("h1");
grid.addEventListener("click",()=>{
    link.attributes[1].value = "../assets/css/grid.css";
    h1.innerHTML = "grid photo gallery";
})
flex.addEventListener("click",()=>{
    link.attributes[1].value = "../assets/css/flex.css";
    h1.innerHTML = "flex photo gallery";
})
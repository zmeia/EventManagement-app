
let box = document.querySelector(".box");

console.log(box.scrollTop);

box.addEventListener("scroll",function(){
    let header = window.document.querySelector("header");
    header.classList.toggle("sticky" , box.scrollTop > 10);
    
    console.log(box.scrollTop);
})

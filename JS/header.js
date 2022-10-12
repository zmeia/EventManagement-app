
var box = document.querySelector(".box");

console.log(box.scrollTop);

box.addEventListener("scroll",function(){
    var header = window.document.querySelector("header");
    header.classList.toggle("sticky" , box.scrollTop > 10);
    
    console.log(box.scrollTop);
})

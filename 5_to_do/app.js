console.log(location.href);
console.log(window);
console.log(window.document.body);
// document.body.firstElementChild.remove();

const body = document.body;
let number = 0;
body.addEventListener('click', ()=>{
    number ++;
    body.innerHTML= `<h1>You clicked ${number} times !</h1>`
});
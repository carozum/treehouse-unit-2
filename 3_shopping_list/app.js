// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents


const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener('click', ()=>{
    // store the value of the input and then reset input
    const item = input.value;
    input.value = "";

    // create an <li> with span and del button inside
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = item;

    const del = document.createElement("button");
    del.textContent = "delete";

    li.appendChild(span);
    li.appendChild(del);
    ul.appendChild(li);

    // activate the del button
    del.addEventListener('click', ()=>{
        ul.removeChild(li)
    });

    // use the focus() method to focus the input element ready for entering the next shopping list item.
    input.focus();


})



    





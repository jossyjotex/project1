"use strict";

let heading = document.querySelector("h2");
let decBtn = document.querySelector(".dec");
let incBtn = document.querySelector(".inc");
let resBtn = document.querySelector(".res");

// let determinant = 0

function increase() {
  heading.innerText++;
  // heading.innerText++
}

incBtn.addEventListener("click", increase);

// for dec

decBtn.addEventListener("click", function () {
  heading.innerText--;
});

// res

let reset = function () {
  heading.innerText = 0;
};

resBtn.addEventListener("click", reset);

let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let buttonstyle = getComputedStyle(this);
    let buttonbgcolor = buttonstyle["backgroundColor"];
    document.body.style.backgroundColor = buttonbgcolor;
  });
}

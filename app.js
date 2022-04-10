"use strict";

let switchValue = document.querySelector("#switchValue");
const anually = document.querySelector("#anually");
const monthly = document.querySelector("#monthly");
const basicPrice = document.querySelector("#basicPrice");
const proPrice = document.querySelector("#proPrice");

function switchValueCheck() {
  if (switchValue.checked === true) {
    basicPrice.innerHTML = "19.99";
    proPrice.innerHTML = "24.99";
    masterPrice.innerHTML = "39.99";
  } else {
    basicPrice.innerHTML = "199.99";
    proPrice.innerHTML = "249.99";
    masterPrice.innerHTML = "399.99";
  }
}

anually.addEventListener("click", (evt) => {
  switchValue.checked = false;
  switchValueCheck();
});

monthly.addEventListener("click", (evt) => {
  switchValue.checked = true;
  switchValueCheck();
});

switchValue.addEventListener("click", (evt) => {
  switchValueCheck();
});

const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU Clicked me!");
};

function scream() {
  console.log("AH");
}

btn.onmouseenter = scream;

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("Clicked!");
});

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = shout;
// tasButton.onclick = twist;

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);

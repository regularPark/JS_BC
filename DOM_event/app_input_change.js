const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", function (e) {
//   console.log("hi");
// }); // 블러 아웃할 때만 동작

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
}); // 모든 input에 동작

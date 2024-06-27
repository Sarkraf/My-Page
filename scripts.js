const flipButton = document.getElementsByClassName("flipButton")[0];
const flipped = document.getElementsByClassName("card")[0];

flipButton.addEventListener("click", function () {
  flipped.style.backgroundColor =
    flipped.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
});

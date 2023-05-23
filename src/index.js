import "./styles.css";

const btn = document.querySelector("button");
const container = document.querySelector(".container");
const divs = [];
let index = 0;

function animate() {
  if (index >= divs.length) return;
  divs[index].children[0].classList.add("animate");
}

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("child");
  if (divs.length === 0 || index === divs.length) {
    div.classList.add("animate");
    console.log("hey");
  }
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("parent");
  parentDiv.appendChild(div);
  parentDiv.addEventListener("animationend", () => {
    index++;
    animate();
  });
  container.appendChild(parentDiv);
  divs.push(parentDiv);
});

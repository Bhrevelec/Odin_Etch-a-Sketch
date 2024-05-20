//global variables
const container = document.querySelector(".container");
const values = document.querySelectorAll(".value");

const createGrid = (size) => {
  //First create as many divs as there are columns
  //Inside those divs, create as many divs as there are rows
  for (let i = 1; i <= size; i++) {
    let verticalDiv = document.createElement("div");
    verticalDiv.setAttribute("class", "column");
    container.appendChild(verticalDiv);
    for (let j = 1; j <= size; j++) {
      let horizontalDiv = document.createElement("div");
      horizontalDiv.setAttribute("class", "value");
      horizontalDiv.style.border = "2px solid black";
      //horizontalDiv.innerText = i + "+" + j;
      verticalDiv.appendChild(horizontalDiv);
      //Add event listener to check if mouse hovers over a cell
      horizontalDiv.addEventListener("mouseenter", () => {
        horizontalDiv.style.backgroundColor = "blue";
      });
    }
  }
};

createGrid(16);

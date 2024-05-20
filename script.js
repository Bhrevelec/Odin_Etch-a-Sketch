//global variables
const container = document.querySelector(".container");

const createGrid = (size) => {
  //First create as many divs as there are rows
  //Inside those divs, create as many divs as there are columns
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
    }
  }
};

createGrid(16);

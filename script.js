//global variables
const container = document.querySelector(".container");
const values = document.querySelectorAll(".value");
const btn = document.querySelector("button");

//Ask user input on size when they request a new grid
btn.addEventListener("click", () => {
  const userInput = prompt(
    "How many squares per side should the grid contain?"
  );
  if (userInput && userInput < 100) {
    removeAllChildNodes(container);
    createGrid(userInput);
  }
});

//Clear all child nodes from a parent
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

//Creates a grid of variable size inside the container div
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
      horizontalDiv.style.border = "1px solid black";
      //horizontalDiv.innerText = i + "+" + j;
      verticalDiv.appendChild(horizontalDiv);
      //Add event listener to check if mouse hovers over a cell
      horizontalDiv.addEventListener("mouseenter", () => {
        horizontalDiv.style.backgroundColor = "blue";
      });
    }
  }
};

//Startup grid
createGrid(16);

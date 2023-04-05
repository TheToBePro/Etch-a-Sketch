const gridBox = document.querySelector(".left-side");
const reset = document.querySelector(".reset");
const gridshow = document.querySelector(".gridshow");
let gridSize = document.querySelector(".gridSize");
let gridNumber = 16;
const gridColor = document.querySelector(".gridColor");
const myCheckbox = document.getElementById("myCheckbox");

function createGrid(gridNumber) {
  // Remove existing grid divs
  while (gridBox.firstChild) {
    gridBox.removeChild(gridBox.firstChild);
  }

  // Create new grid divs
  for (let i = 0; i < gridNumber; i++) {
    for (let j = 0; j < gridNumber; j++) {
      const gridDivs = document.createElement("div");
      gridDivs.style.cssText = `width: calc(100% / ${gridNumber} - 2px); height: calc(100% / ${gridNumber} - 2px);border:1px solid white;`;
      gridBox.appendChild(gridDivs);
      gridDivs.addEventListener("mouseover", () => {
        if (myCheckbox.checked === true) {
          if (gridDivs.style.backgroundColor !== "") {
            return; // If it does, return from the event listener
          }
          gridDivs.addEventListener("mouseover", () => {
            gridDivs.style.backgroundColor = getRandomHexColor();
          });
        } else {
          if (gridDivs.style.backgroundColor !== "") {
            return; // If it does, return from the event listener
          }
          gridDivs.addEventListener("mouseover", () => {
            gridDivs.style.backgroundColor = gridColor.value;
          });
        }
      });

      reset.addEventListener("click", (e) => {
        gridDivs.style.removeProperty("background-color");
      });
    }
  }
}
createGrid(gridNumber);
gridSize.addEventListener("input", (eventvalue) => {
  gridshow.textContent = eventvalue.target.value;
  let gridNumber = eventvalue.target.value;
  createGrid(gridNumber);
});
gridColor.onchange = function () {
  return this.value;
};
myCheckbox.onchange = function () {
  return this.checked;
};
function getRandomHexColor() {
  // Generate a random number between 0 and 255 for each color component
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Convert each decimal value to its equivalent hex value
  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");

  // Concatenate the three hex values with a hash symbol and return the result
  return `#${redHex}${greenHex}${blueHex}`;
}

/*const gridBox = document.querySelector(".left-side");
const reset = document.querySelector(".reset");
const gridshow = document.querySelector(".gridshow");
const gridSize = document.querySelector(".gridSize");
const gridColor = document.querySelector(".gridColor");
const myCheckbox = document.getElementById("myCheckbox");
let gridNumber = 16;

function createGrid(gridNumber) {
  // Remove existing grid divs
  gridBox.innerHTML = "";

  // Create new grid divs
  for (let i = 0; i < gridNumber ** 2; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.style.width = `calc(100% / ${gridNumber} - 2px)`;
    gridDiv.style.height = `calc(100% / ${gridNumber} - 2px)`;
    gridDiv.style.border = "1px solid white";
    gridBox.appendChild(gridDiv);

    gridDiv.addEventListener("mouseover", () => {
      if (myCheckbox.checked) {
        if (gridDiv.style.backgroundColor) {
          return;
        }
        gridDiv.style.backgroundColor = getRandomHexColor();
      } else {
        if (gridDiv.style.backgroundColor) {
          return;
        }
        gridDiv.style.backgroundColor = gridColor.value;
      }
    });

    reset.addEventListener("click", () => {
      gridDiv.style.backgroundColor = "";
    });
  }
}

function getRandomHexColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

createGrid(gridNumber);

gridSize.addEventListener("input", (event) => {
  gridNumber = event.target.value;
  gridshow.textContent = gridNumber;
  createGrid(gridNumber);
});

gridColor.addEventListener("input", (event) => {
  gridColor.value = event.target.value;
});

myCheckbox.addEventListener("change", () => {
  createGrid(gridNumber);
});
*/

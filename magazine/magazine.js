// Get references to the HTML elements
const input = document.getElementById("input");
const output = document.getElementById("output");

function exclusion(str) {
  return "un" + str;
}

function strengthen(str) {
  return "plus" + str;
}

function emphasize(str) {
  return "doubleplus" + str;
}

// Attach an event listener to the input textbox
// input.addEventListener("input", () => {
//   const str = input.value;
//   output.textContent = `Exclusion: ${exclusion(str)}\nStrengthen: ${strengthen(str)}\nEmphasize: ${emphasize(str)}`;
// });


function prepend() {
    const str = input.value;
    output.textContent = `Exclusion: ${exclusion(str)}\nStrengthen: ${strengthen(str)}\nEmphasize: ${emphasize(str)}`;  
}
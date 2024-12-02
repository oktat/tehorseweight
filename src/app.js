import { calcWeight } from "./tools.js";

const doc = {
  chestPerimeterInput: document.querySelector('#chestPerimeter'),
  lengthInput: document.querySelector('#length'),
  weightInput: document.querySelector('#weight'),
  calcButton: document.querySelector('#calcButton')
}

doc.calcButton.addEventListener('click', () => {
  const perimeter = Number(doc.chestPerimeterInput.value);
  const length = Number(doc.lengthInput.value);
  const weight = calcWeight(perimeter, length);
  doc.weightInput.value = String(weight);
});

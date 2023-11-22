const oneNumberInputField = document.getElementById("one-number-input");
const moduloNumberInputField = document.getElementById("modulo-number-input");
const moduloList = document.getElementById("list-of-modulos");
const result = document.getElementById("result");

let r = Math.floor(Math.random() * 1001);
let didIGuess = false;
const modulos = [];

const guessTheNumber = () => {
  if (didIGuess == false) {
    oneNumberInputField.value == r
      ? (result.innerHTML = "CORRECT")
      : (result.innerHTML = "WRONG");
  }

  didIGuess = true;
};

const guessTheModuloNumber = () => {
  modulos.push(
    `r % ${moduloNumberInputField.value} = ${r % moduloNumberInputField.value}`
  );
  moduloList.innerHTML = modulos;
};

const reset = () => {
  didIGuess = false;
  result.innerHTML = "";
};

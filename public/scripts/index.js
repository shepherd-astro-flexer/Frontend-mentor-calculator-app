const calcKeys = document.querySelectorAll(".calc-keys");
const calcOutput = document.querySelector(".calculator-output");

let calculation = [];

calcKeys.forEach(keys => {
  keys.addEventListener("click", e => {
    const { value } = e.target;

    if (value === "=") {
      const result = (eval(calculation.join(""))).toString(); // ! eval method returns a number as an output, so we converted it to string first so that we can use the split method on it.
      calcOutput.innerText = result;
      calculation = result.split("");
    } else if (value === "x") {
      calcOutput.innerText += value;
      calculation.push("*");
    } else if (value === "DEL") {
      calculation.pop();
      const sliced = calcOutput.innerText.slice(0, -1); // ! Storing to memory
      calcOutput.innerText = sliced; // ! Always remember reassigning
    } else {
      calcOutput.innerText += value;
      calculation.push(value);
    }
  })
})















// const calcButtonsContainer = document.querySelector("#calculator-buttons-container");
// const calcLastRow = document.querySelector("#calculator-last-row");

// const values = "7,8,9,DEL,4,5,6,+,1,2,3,-,.,0,/,x,RESET,=";

// splitValues = values.split(",");

// const calcValues = splitValues.forEach(val => {
  
//   const calcKeys = document.createElement("button");
//   calcKeys.innerText = val;
//   calcKeys.values = val;
//   calcKeys.className = val === "DEL" ? "calc-keys calc-delete-key" : "calc-keys";
//   val === "RESET" || "=" ? calcLastRow.append(calcKeys) : calcButtonsContainer.append(calcKeys);
//   // calcButtonsContainer.append(calcKeys);

//   calcKeys.addEventListener("click", () => {
//     console.log(calcKeys.values);
//   })
// })
const calcKeys = document.querySelectorAll(".calc-keys");
const calcOutput = document.querySelector(".calculator-output");

let calculation = [];

calcKeys.forEach(keys => {
  keys.addEventListener("click", e => {
    const { value } = e.target;
    const lastOperator = calculation.slice(calculation.length -1); // ! We're just going to spread this single value on the isNaN() method, to lessen code a little bit

    const countNaN = calculation.reduce((accu, currVal) => {
      const notANumber = isNaN(currVal);
      if (notANumber) accu++;
      return accu;
    }, 1)

    if (value === "=") {
      if (calcOutput.innerText === "") return; // ! If calcOutput is empty then just return.
      else {
        const result = (eval(calculation.join(""))).toString(); // ! eval method returns a number as an output, so we converted it to string first so that we can use the split method on it.
        calcOutput.innerText = result;
        // counter = 0;
        // operatorCounter = 0;
        calculation = [...result];
        console.log(calculation);
      }
    } else if (value === "DEL") {
      calculation.pop();
      const sliced = calcOutput.innerText.slice(0, -1); // ! Storing to memory
      calcOutput.innerText = sliced; // ! Always remember reassigning(not related here)
    } else if (value === "RESET") {
      calcOutput.innerText = "";
      calculation = [];
      console.log(calculation);
    } else {
      // This is for the MDAS operators + the "."
      if (isNaN(value)) {
        if (isNaN(...lastOperator)) { // ? Did that do the trick?
          return;
        } else {
          // const calcSliced = calculation.slice(0, -1);
          // const evaluate = (eval(...calcSliced)).toString;
          if (countNaN <= 1) {
            calcOutput.innerText += value;
            value === "x" ? calculation.push("*") : calculation.push(value);
            console.log(`NaN: ${countNaN}`, `calculation: ${calculation}`);
          } else {
            console.log("Test?");
            // ! Something wrong with the logic. Will figure out next time.
            const evalSliced = eval(calculation.slice(0, -1).join("")).toString();
            const operatorSliced = calculation.slice(calculation.length - 1);

            const newCalculation = [...evalSliced, ...operatorSliced];

            calculation = newCalculation;

            calcOutput.innerText = newCalculation.join("");
          }
        }
      } else { // Appending and pushing numbers
        calcOutput.innerText += value;
        calculation.push(value);
      }
    }

    
  })
})
    // if (value === "x" || value === "/" || value === "+" || value === "-") {

      // else if () {

      // }


    // if (counter === 0 && isNaN(value)) {
    //   if (value === "x" || value === "/" || value === "+" || value === "-") {
    //     counter++;
    //   }
    // }

    // if (counter > 0 && isNaN(...lastOperator)) {
    //   const last = lastOperator.join()
    //   if ( === "x" || value === "/" || value === "+" || value === "-") {
    //     return;
    //   }
    // }


// if (value !== "DEL") {
      //   console.log("test2", value);
      // }

// if (counter === 0 && isNaN(value)) {
    //   if (value === "DEL" && "RESET" && "=") {
    //     console.log("wat");
    //     return;
    //   } else {
    //     counter += 1;
    //     // operatorCounter = 0;

    //     console.log(counter);
    //   }
    // }
    // for automatically evaluating the values if counter is greater than 0(variable for tracking number of operator) perator
    // if (counter > 0 && isNaN(value) ) {
    //   if (value === "DEL" && "RESET" && "=") { // ! Testing
    //     console.log("wat");
    //     return;
    //   } else {
    //     console.log("Test")
    //     const slicedValue = eval(calculation.slice(0, -1).join("")).toString().split("");
    //     const slicedOperator = calculation.slice(calculation.length - 1);
    //     const newCalculation = [...slicedValue, ...slicedOperator];

    //     calculation = newCalculation;

    //     const textSlice = newCalculation.join("");
    //     calcOutput.innerText = textSlice;

    //     console.log(calculation);
    //   }
    // }


// let sampleArray = ["1", "3", "+", "5", "6", "/"];

// const currentOperator = sampleArray.slice(sampleArray.length -1);

// const calculateValue = eval(sampleArray.slice(0, -1).join("")).toString().split("");

// sampleArray = [...calculateValue, ...currentOperator];



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
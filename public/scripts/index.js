const calcKeys = document.querySelectorAll(".calc-keys");
const calcOutput = document.querySelector(".calculator-output");
const toggleChange = document.querySelector(".change-mode");

// Theme
const bodyBgOne = document.querySelectorAll(".body-bg-one");
const themeOneText = document.querySelectorAll(".theme-one-text");
const keysBorderOne = document.querySelectorAll(".keys-border-one");
const bgResetDeleteOne = document.querySelectorAll(".bg-reset-delete-one");
const buttonsContainerColorOne = document.querySelectorAll(".buttons-container-color-one");
const outputThemeOne = document.querySelector(".output-theme-one");
const bgEqualOne = document.querySelector(".bg-equal-one");
const calcUpperThemeOne = document.querySelectorAll(".calc-upper-theme-one");
const sliderBgOne = document.querySelector(".slider-bg-one");
const thumbBgOne = document.querySelector(".thumb-bg-one");

let calculation = [];

calcKeys.forEach(keys => {
  keys.addEventListener("click", e => {
    const { value } = e.target;
    const lastOperator = calculation.slice(calculation.length -1); // ! We're just going to spread this single value on the isNaN() method, to lessen code a little bit

    const countNaN =  calculation.reduce((accu, currVal) => {
      const isNotANumber = isNaN(currVal);
      isNotANumber && accu++;
      return accu;
    }, 0);

    if (value === "=") {
      if (calcOutput.innerText === "") return; // ! If calcOutput is empty then just return.
      else {
        const result = (eval(calculation.join(""))).toString(); // ! eval method returns a number as an output, so we converted it to string first so that we can use the split method on it.
        calcOutput.innerText = result;
        
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
          if (countNaN <= 0) {
            calcOutput.innerText += value;
            value === "x" ? calculation.push("*") : calculation.push(value);
            console.log(`NaN: ${countNaN}`, `calculation: ${calculation}`);
            console.log(`This ran because countNaN is less than or equal to 0:`, countNaN);
          } else {
            console.log("count is not less than or equal to 0", countNaN);
            // // ! Check array / Wrong countNaN value (?)
            // // ! Something wrong with the logic. Will figure out next time.

            value === "x" ? calculation.push("*") : calculation.push(value);
            const sliced = calculation.slice(0, -1).join("");
            const evaluated = eval(sliced).toString();
            // Operator added
            const slicedOperator = calculation.slice(calculation.length -1);

            calculation = [...evaluated, ...slicedOperator];
            
            // We are creating a new array with the value * changed
            const calcTimes = calculation.map(calc => {
              return calc === "*" ? calc = "x" : calc;
            })

            calcOutput.innerText = calcTimes.join("");
          }
        }
      } else { // Appending and pushing numbers
        calcOutput.innerText += value;
        calculation.push(value);
      }
    }
  })
})


toggleChange.addEventListener("change", e => {
  const value = e.target.value;

  console.log(value);
  if (value == 1) {
    changeMode("one", "two", "three");
  } else if (value == 2) {
    changeMode("two", "one", "three");
  } else if (value == 3) {
    changeMode("three", "one", "two");
  }
})

const changeMode = (add, remove1, remove2) => {
  bodyBgOne.forEach(bodyBg => {
    bodyBg.classList.remove(`body-bg-${remove1}`);
    bodyBg.classList.remove(`body-bg-${remove2}`);
    bodyBg.classList.add(`body-bg-${add}`);
  })
  
  outputThemeOne.classList.add(`output-theme-${add}`);
  outputThemeOne.classList.remove(`output-theme-${remove1}`);
  outputThemeOne.classList.remove(`output-theme-${remove2}`);

  bgEqualOne.classList.add(`bg-equal-${add}`);
  bgEqualOne.classList.remove(`bg-equal-${remove1}`);
  bgEqualOne.classList.remove(`bg-equal-${remove2}`);

  themeOneText.forEach(themeOne => {
    themeOne.classList.remove(`theme-${remove1}-text`);
    themeOne.classList.remove(`theme-${remove2}-text`);
    themeOne.classList.add(`theme-${add}-text`);
  })
  keysBorderOne.forEach(keysBorder => {
    keysBorder.classList.remove(`keys-border-${remove1}`);
    keysBorder.classList.remove(`keys-border-${remove2}`);
    keysBorder.classList.add(`keys-border-${add}`);
  })
  bgResetDeleteOne.forEach(bgResetDelete => {
    bgResetDelete.classList.remove(`bg-reset-delete-${remove2}`);
    bgResetDelete.classList.remove(`bg-reset-delete-${remove1}`);
    bgResetDelete.classList.add(`bg-reset-delete-${add}`);
  })
  buttonsContainerColorOne.forEach(buttonsContainer => {
    buttonsContainer.classList.remove(`buttons-container-color-${remove1}`);
    buttonsContainer.classList.remove(`buttons-container-color-${remove2}`);
    buttonsContainer.classList.add(`buttons-container-color-${add}`);
  })

  calcUpperThemeOne.forEach(calcUpper => {
    calcUpper.classList.remove(`calc-upper-theme-${remove1}`);
    calcUpper.classList.remove(`calc-upper-theme-${remove2}`);
    calcUpper.classList.add(`calc-upper-theme-${add}`);
  })

  sliderBgOne.classList.add(`slider-bg-${add}`);
  sliderBgOne.classList.remove(`slider-bg-${remove1}`);
  sliderBgOne.classList.remove(`slider-bg-${remove2}`);

  thumbBgOne.classList.add(`thumb-bg-${add}`);
  thumbBgOne.classList.remove(`thumb-bg-${remove1}`);
  thumbBgOne.classList.remove(`thumb-bg-${remove2}`);
}

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
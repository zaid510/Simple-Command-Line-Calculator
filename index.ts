import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: ("Enter your first Number"),
    type: "number",
    name: "firstNumber",
  },
  {
    message: ("Enter your second Number"),
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select operator to perform action",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
    ],
  },
]);
if (answer.operator === "Addition") {
  console.log(`Your value is ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operator === "Subtraction") {
  console.log(`Your value is ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operator === "Multiplication") {
  console.log(`Your value is ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operator === "Division"){
  console.log(`Your value is ${answer.firstNumber / answer.secondNumber}`);
} else console.log(`Please Select Valid Operator`);

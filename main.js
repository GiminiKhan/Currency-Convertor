#! /usr/bin/env node
// currency converter
import inquirer from "inquirer";
// Printing a welcome message
console.log("\n\tWelcome to \'Giminikhan\' - Currency Converter in Typescript\n");
// In PKR
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    //GBP
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    //IN DOLLER 
    "USD": {
        "PKR": 277.58,
        "GBP": 0.83,
        "USD": 1
    }
};
// STEP 2 :using Inquirer
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency..?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency"
    },
    // conversion amount
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount"
    }
]);
// step 3 output
const { from, to, amount } = answer;
//check input in given program
if (from && to && amount) {
    //formula
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from${from} to ${to} is ${result}`);
}
else {
    //generate error
    console.log("Invalid inputs");
}

/// <reference path ="utility.ts" /> 
//utlizamos el triple slash para utilizar el modulo utility

let utils = Utility.Taxes;

console.log(utils.calculateIva(100));
console.log(utils.calculatePenaltyIva(200));

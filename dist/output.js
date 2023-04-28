"use strict";
//utilizamos el export para trabajar en modulos, en utility va a ser nuestra informacion base que luego podremos usarlas
//para ello usamos la palabra reservada de typescript "namespace"
var Utility;
//utilizamos el export para trabajar en modulos, en utility va a ser nuestra informacion base que luego podremos usarlas
//para ello usamos la palabra reservada de typescript "namespace"
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculateIva = calculateIva;
        function calculatePenaltyIva(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculatePenaltyIva = calculatePenaltyIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
/// <reference path ="utility.ts" /> 
//utlizamos el triple slash para utilizar el modulo utility
let utils = Utility.Taxes;
console.log(utils.calculateIva(100));
console.log(utils.calculatePenaltyIva(200));

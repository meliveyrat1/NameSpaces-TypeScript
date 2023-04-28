//utilizamos el export para trabajar en modulos, en utility va a ser nuestra informacion base que luego podremos usarlas
//para ello usamos la palabra reservada de typescript "namespace"
namespace Utility {
    export namespace Taxes {
        export function calculateIva(price: number): number {
        return (price * 0.21) + price
        }
        export function calculatePenaltyIva(price: number): number{
            return (price * 0.30) + price;
        }
    }
}

//aqui podemos exportar, clses, interfcaes, variables, incluso namespace
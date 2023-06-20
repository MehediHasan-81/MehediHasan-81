const Omit = [3, 4, 5];

function squareRootOfSumOfSquares(Omit) {

    let sumOfSquares = 0;

    for (let i = 0; i < Omit.length; i++) { 

        sumOfSquares += Math.pow(Omit[i], 2); 
    } 
        return Math.sqrt(sumOfSquares); 
    };

    console.log(squareRootOfSumOfSquares(Omit));
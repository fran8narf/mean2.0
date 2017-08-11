'use strict'

var args = process.argv.slice(2)

var operation = args[1];
var numOne = args[0];
var numTwo = args[2];

var result = '\n Introduce bien los parámetros (1 mas/menos/por/entre 2). \n';


function calculatorGo(){
	if (args.length === 3) {
		switch (operation){
			case "mas":
				result = "Suma: "+parseFloat(numOne + numTwo);
				break;
			case "menos":
				result = "Resta: "+parseFloat(numOne - numTwo);
				break;
			case "por":
				result = "Multiplicación: "+parseFloat(numOne * numTwo);
				break;
			case "entre":
				result = "División: "+parseFloat(numOne / numTwo);
				break;
		}
	}
	console.log(result);
}

calculatorGo();

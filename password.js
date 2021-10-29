const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome back to your very secure account user. Please input your password", function(input){
	tokens = input.split(' ');
	
	passWor = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
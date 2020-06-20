// Instructions from your teacher:
// Write a function called prependToString, which accepts two strings.

// The function should return a new string with the second string prepended to the first string.

// Examples:

// prependToString('awesome', 'very') // 'veryawesome'

// prependToString('world', 'hello ') // 'hello world'

// prependToString('nothing', '') // 'nothing'

function prependToString(str1, str2) {
	console.log(str2 + str1);
}

prependToString('world', 'hello ');
prependToString('awesome', 'very');
prependToString('nothing', '');

// same here. Works in console - prepends strings but repl does not like it.

// note from repl:

//   Failed tests.
// adds_the_second_parameter_to_the_front_of_the_string( this requirement is not met. Vadym)

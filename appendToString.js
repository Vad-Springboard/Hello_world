// Write a function called appendToString, which accepts two strings.

// The function should return a new string which consists of the second string appended to the first string.

// Examples:

// appendToString("Hello", " World!"); // "Hello World!"

// appendToString("Foo", "bar"); // "Foobar"

// appendToString("bar", "Foo"); // "barFoo"

// appendToString("", "test"); // "test"

// appendToString("other test", ""); // "other test"

// Here is my solution:

function appendToString(str1, str2) {
	console.log(str1 + str2);
}

// appendToString('Hello', ' World!');
// appendToString('Foo', 'bar');
// appendToString('bar', 'Foo');
// appendToString('', 'test');
// appendToString('other test', '');

// in Chrome console I'm getting concatenated string OK, however repl does not accept it.

// this is a note from repl.it:
// Failed tests
// returns_a_string_with_appended_characters (this requirement apparently is not met. Vadym)
// Make sure you return a new string with the new characters appended to the original string
// Expected undefined to be 'Hello World!'.
// More info

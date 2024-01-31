// // features of every programming lanugage:
// -syntax 
// -logical operators (if, and, else)
// -primitive data types -strings numbers booleans
// -complex data types-arrays, objects, dictionaries
// -weakly typed languages are also called "dynamic" languages
// --if able to change type of variable from one thing to another
// --JS and Python are both weakly typed languages
//-how do you run the code? one to compile or another to compiled source code?
// -strongly typed languages need compiler to take human readable code and
// turn it into a machine/computer(assembly) language to run it

//why js matters and internet
// front-end=client 
// backend=servers, databases
// fullstack=front and backend
//language of the web
//Code Platoon teaches JS and Python for maximum flexibility

//node.js
//way to run js on backend

// variables
// fubar programming tradition for variable placeholder
//always run your code!!!! almost after every line I write per Adam instructor
//you probably cannot run your code enough
foo = "hello" //best practice is to use let or const. Adam recommends start with
//const, then change to let if you need to. Changing the values of variables
// is called mutation and that can cause tricky errors.
let bar = "goodbye"
const z = 13
console.log(foo, bar, z)
// z = 4
console.log(z) //TypeError: Assignment to constant variable
//when there is an error with node.js, it stops the code and throws an error
//how to read an error message:
// the most important information for an error message, look at the start or
// the bottom
// for example: line number
//everything else in the middle of the start/end is not important for us, just
//extra information that we don't necessarily use

// functions(think of functions as stuff taking data as input and spitting out
// an output)
//we can call a function before its defined b/c of function hoisting
myName = makeFullName("Eleanor", "Roosevelt")
console.log(myName)
function makeFullName(firstName, lastName) {
    return firstName + " " + lastName
}
//JS doesn't throw back an error if you don't input both parameters unfortunately

// conditional logic


// jest


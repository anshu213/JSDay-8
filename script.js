//.....................Function....................//.............................
//..........regular Function............
function a() {
    console.log("a");
}
a();

//..............arrow Function...........

const n = (b) => {
    console.log("n", b);
}
n(10);
n("Hello");

//.................Function Expression...............

const a1 = function(){
    console.log("a1");
}
a1();

//..............Function without parameters...........................
//A function without parameters does not take any input. It performs a fixed operation whenever it is called.

function greet (){
    console.log("Hello....Welcome to Javascript");
}
//calling the function
greet();

//................Fuction with parameters.............................
//A function with parameters can accept values, making it more flexible. The function can work differently depending on the input values.

function greetuser(name){ //name is a parameter
         console.log("Hello " + name + " Welcome to Javascript");
}
greetuser("Anshuman");
greetuser("Shivam");

//.................................JAVASCRIPT FUNCTIONS................................//......................
//Javascript provides functions similar to most of the scripting and programming languages. In javascript, a function allows you to define a block of code, give it a name and then execute it as many times as you want.

function showmessage(){
    alert("Hello World!");
}
showmessage();

// problem: You are provided with a string you have to slice the name from the string and print the sliced string
// (using slice)
// input : Hi Prepbytes
// output : Prepbytes

let str = "Hi Prepbytes";
let res = str.slice(3);
console.log(res);

// problem: You are provided an array of integer you have to print the sum of array.
//Input: 1234
//Output: 10

let arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);



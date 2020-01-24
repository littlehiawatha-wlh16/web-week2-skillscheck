//////////////////PROBLEM 1////////////////////

// Create a variable called 'myName' with a value that is your name. 

// Code here

let myName = 'Jacob'

//////////////////PROBLEM 2////////////////////

// Create a variable called 'faveNum' with a value that is your favorite number. 

//Code here
let faveNum = 500038943579829749823908
//////////////////PROBLEM 3////////////////////

// Create a variable called 'lovesCode' and assign it a value of true.

//Code here

let lovesCode = true


//////////////////PROBLEM 4////////////////////

// Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. The function should return the sum of the two parameters.

//Code here

let sum = function(num1,num2){
	return num1 + num2
}

//////////////////PROBLEM 5////////////////////

// Create a function called 'lovesCodeChecker' that takes in a single parameter called 'x'. Check to see if 'x' is equal to true. If it is, return a true boolean. If 'x' does not equal true, return a false boolean.  

//Code here
let lovesCodeChecker = function(x){
	if(x===true){
		return true
	}else {
		return false
	}
}

//////////////////PROBLEM 6////////////////////

// Create a function called 'oddChecker' that takes in one parameter, 'num'. Your function should check to see if the parameter is even or odd. If the parameter is odd, return 'the number is odd'. If the number is even, return 'the number is even'.

//Code here

let oddChecker = num => {
	if( num % 2 === 0) {
		return 'the number is even'
	} else{
		return 'the number is odd'
	}
}

//////////////////PROBLEM 7////////////////////

// Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. Have the function take the two parameters and return a string that says "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"

//Code Here
let iLove = (name,love) => {
	return `${name} loves ${love}`
}



//////////////////PROBLEM 8////////////////////

// Create a copy of the faveColors array called 'colorCopy' using slice.
const faveColors = ['red', 'green', 'black']

//Code Here

let colorCopy = faveColors.slice(0,faveColors.length)

//console.log(colorCopy)

//////////////////PROBLEM 9////////////////////

// Add a fourth color to the end of the 'colorCopy' array using push.

//Code Here

colorCopy.push('white')

//console.log(colorCopy)

//////////////////PROBLEM 10////////////////////

// Create a new array called 'middleNums' from the numbers array that will capture only the middle numbers (2, 3, 4).
const numbers = [1, 2, 3, 4, 5]

//Code Here
let middleNums = numbers.splice(1,numbers.length-2)

//////////////////PROBLEM 11////////////////////

// Create an object called 'me' that has the following keys: firstName, state, age, and greeter. The value of the firstName key should be your name as a string. The value of the property state should be your current state or providence of residence as a string. The value of age should be your age as a number. greeter should be a method that returns the string 'Hello! My name is NAMEVALUE and I live in STATEVALUE' with the corresponding values. 

//Code Here
let me = {
	firstName: 'James',
	state: 'Kansas',
	age: 37,
	greeter: function() { return `Hello! My name is ${firstName} and I live in ${state}`}
	// greeter: function(me.firstName, me.state){
	// 	return `Hello! My name is ${me.firstName} and I live in ${me.state}`
	// }


	//greeter: `Hello! My name is ${me.firstName} and I live in ${me.state}`
	//greeter: `Hello! My name is ${me.firstName} and I live in ${me.state}`
	
};
// console.log(me)
//  me.greeter = `Hello! My name is ${me.firstName} and I live in ${me.state}`
//  `Hello! My name is ${me.firstName} and I live in ${me.state}`

//////////////////PROBLEM 12////////////////////

// Create a function called 'bigOrSmall' that takes in one parameter, 'arr', which will be an array of numbers. Inside of the bigOrSmall function, create a new array called 'answers'. Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. If it is, push 'big' as a string to the answers array. If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. Return the answers array inside of the function.

// Code here1
let bigOrSmall = function(arr){
	let answers = [];
	for(i = 0; i < arr.length; i++){
		if(i > 100){
			return 'big'
		}else{
			return 'small'
		}
	}
	return bigOrSmall
}

// let bigOrSmall = function(arr){
// 	let answers = []
// 	for(answers = 0; i < answers.length; i++){
// 		if(answers > 100){
// 			return 'big'
// 		}else{
// 			return 'small'
// 		}
// 	}
// 	return bigOrSmall()
// }

//////////////////PROBLEM 13////////////////////

// Create a function called 'arrayReverser' that takes in one parameter, 'arr'. Inside of arrayReverser, create an empty array called 'reversed'. Using a for loop, loop over the passed in array IN REVERSE (this means your counter should decrement), and then add each item to the 'reversed' array variable you created. Finally, return the 'reversed' array variable. 

//Code Here
let arrayReverser = function(arr){
	let reversed = [];
	for( i = arr.length - 1; i > 0; i--){
		console.log(reversed)
		return reversed.push
	}

}

//////////////////PROBLEM 14 - 18 Setup////////////////////

// Below is an array, myNumbers. You will be using .map, .filter, .reduce and .forEach to manipulate the array in the following problems.
const myNumbers = [3, 55, 788, 2, 1]


//////////////////PROBLEM 14////////////////////

// First, use .map to create a new array that doubles each number. Call the new array 'doubled'.

// Code Here

let doubled = myNumbers.map(function(element){
	return element *= 2
})

//////////////////PROBLEM 15////////////////////

// Now, use .filter to create a new array containing any numbers that are greater than 100. Call the new array 'filtered'. 

// Code Here
let filtered = myNumbers.filter(function(element){
	return element > 100
})

//////////////////PROBLEM 16////////////////////

// Next, use reduce to get the total of the numbers in the array summed together. Store the total in a new variable named 'total'. 

// Code Here
let total = myNumbers.reduce(function(acc, element){
	return acc + element
})

//////////////////PROBLEM 17////////////////////

// Finally, use .forEach to find the index of each item in the array. To begin, create an empty array called 'myNumbersIndex'. Then, use forEach to push each item's index from the myNumbers array into the newly created myNumbersIndex array. 

// Code Here
let myNumbersIndex = []
myNumbers.forEach(function(element){

	for(i = 0; i<myNumbers.length; i++){
		console.log(myNumbers)
		return myNumbers[i].push
	}
	console.log(myNumbersIndex)
})

//////////////////PROBLEM 18////////////////////

// Did you know that George Foreman has five sons named George? Go ahead and change everyone's name in the notGeorge array to George using .map. Store the resulting array in a variable named 'forTheLoveOfGeorge'.
const notGeorge = ['Louis', 'Ted', 'Bill', 'Sharon', 'Mark', 'Angela']

// Code Here
let forTheLoveOfGeorge = notGeorge.map(function(element){
	return 'George'
})

//////////////////PROBLEM 19////////////////////

// Using the people array, filter out everyone that isn't a friend into a new array called 'enemies'. Use .filter(). 
const people = [
	{ name: 'Matt', friend: true, awesomeLevel: 10 },
	{ name: 'Matias', friend: true, awesomeLevel: 10 },
	{ name: 'Catie', friend: false, awesomeLevel: 3 },
	{ name: 'Samantha', friend: false, awesomeLevel: 4 },
	{ name: 'Jonathan', friend: true, awesomeLevel: 8 },
	{ name: 'Josh', friend: true, awesomeLevel: 7 }
]

// Code Here

let enemies = people.filter(function(element) {
	if(element === false){
		return element.push
	} 
})

//////////////////PROBLEM 20////////////////////

// Using the people array above, get a total of the awesomeLevel from all the people, and store that value in a variable named 'totallyAwesome'. Use .reduce().

// Code Here

const totallyAwesome = people.reduce(function(acc,element){
	return acc + element
})

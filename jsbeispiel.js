function reverseArray(arr) {
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    console.log(arr2);
}

function reverseString(ch){
					let ch1="";
          for (let i = ch.length - 1; i >= 0; i--) {
          ch1+=ch[i]
          }
          console.log(ch1)
}

function count(ch){
		let count=0;
    for (let i=0; i<ch.length;i++) {
    if ("aeiuozrtpqsdfghjklmwxcvbnAEIUOZRTYPQSDFGHJKLMWXCVBN".includes(ch[i])) {
        count += 1;
      }
    }
    console.log(count)
}

function cap(phrase) {
    let result = phrase.charAt(0).toUpperCase();  
    for (let i = 1; i < phrase.length; i++) {
        if (phrase[i - 1] === " ") {
            result += phrase[i].toUpperCase();  
        } else {
            result += phrase[i]; 
        }
    }
    
    console.log(result);  
}


function max(arr){
let max=arr[0]
for (let i=1; i<arr.length;i++) {
if (max<arr[i]){
max=arr[i]
}
}
console.log(max)
}

function min(arr){
let min=arr[0]
for (let i=1; i<arr.length;i++) {
if (min>arr[i]){
min=arr[i]
}
}
console.log(min)
}

function sum(arr){
let sum=0
for (let i=0; i<arr.length;i++) {
sum+=arr[i]
}
console.log(sum)
}

function filter(arr) {
    let arr2 = [];
    const vowels = "aeiouyAEIOUY";
    for (let i = 0; i < arr.length; i++) {
        if (!vowels.includes(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2.join(''));
}



function PrimeFactors(n) {
    n = parseInt(n, 10); 

    if (isNaN(n) || n < 1) {
        return "Input must be a positive integer"; 
    }

    let factors = [];

    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

console.log(PrimeFactors("475"));


function generateFibonacci(terms) {
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, terms);
}

function factorial(n) {
    let result = 1;
    let equation = "";
    
    for (let i = 1; i <= n; i++) {
        result *= i;
        equation += i;
        if (i < n) {
            equation += "*";
        }
    }
    
    equation += "=" + result;
    return equation;
}

let number = 15; 
console.log(factorial(number));
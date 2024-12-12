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

function cap(mot){
		mot=mot[0].toUpperCase()+mot.slice(1,mot.length-1)
    console.log(mot)
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

function fact(number) {
    let fact = "1";

    function PrimeFactors(n) {
        let factors = [];
        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }
        return factors;
    }

    let primeFactors = PrimeFactors(number);

    for (let i = 0; i < primeFactors.length; i++) {
        fac += "x" + primeFactors[i];
    }

    return fact;
}

function generateFibonacci(terms) {
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, terms);
}


function game() {
    let score = 0;
    
    // Function 1: Reverse an array
    function reverseArrayGame() {
        let arr = [1, 2, 3, 4, 5];
        let correctAnswer = arr.reverse().join(", ");
        let userAnswer = prompt("What is the reversed array of [1, 2, 3, 4, 5]?");
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 2: Reverse a string
    function reverseStringGame() {
        let str = "hello";
        let correctAnswer = str.split("").reverse().join("");
        let userAnswer = prompt("What is the reversed string of 'hello'?");
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 3: Count vowels
    function countVowelsGame() {
        let str = "Hello World";
        let count = 0;
        for (let char of str) {
            if ("aeiouAEIOU".includes(char)) {
                count++;
            }
        }
        let userAnswer = prompt("How many vowels are in 'Hello World'?");
        if (parseInt(userAnswer) === count) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + count);
        }
    }

    // Function 4: Capitalize the first letter of each word
    function capitalizeWordsGame() {
        let phrase = "hello world";
        let correctAnswer = phrase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        let userAnswer = prompt("What is the capitalized version of 'hello world'?");
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 5: Find the maximum number in an array
    function maxArrayGame() {
        let arr = [5, 3, 9, 2];
        let correctAnswer = Math.max(...arr);
        let userAnswer = prompt("What is the maximum number in the array [5, 3, 9, 2]?");
        if (parseInt(userAnswer) === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 6: Find the minimum number in an array
    function minArrayGame() {
        let arr = [5, 3, 9, 2];
        let correctAnswer = Math.min(...arr);
        let userAnswer = prompt("What is the minimum number in the array [5, 3, 9, 2]?");
        if (parseInt(userAnswer) === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 7: Sum the elements in an array
    function sumArrayGame() {
        let arr = [5, 3, 9, 2];
        let correctAnswer = arr.reduce((sum, num) => sum + num, 0);
        let userAnswer = prompt("What is the sum of the array [5, 3, 9, 2]?");
        if (parseInt(userAnswer) === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 8: Remove vowels from a string
    function filterVowelsGame() {
        let str = "Hello World";
        let correctAnswer = str.replace(/[aeiouAEIOU]/g, '');
        let userAnswer = prompt("What is 'Hello World' without vowels?");
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 9: Prime factors of a number
    function primeFactorsGame() {
        let num = 28;
        let correctAnswer = "2, 2, 7";
        let userAnswer = prompt("What are the prime factors of 28?");
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 10: Generate Fibonacci sequence
    function fibonacciGame() {
        let terms = 5;
        let correctAnswer = "0, 1, 1, 2, 3";
        let userAnswer = prompt("What is the Fibonacci sequence for 5 terms?");
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Function 11: Factorial of a number
    function factorialGame() {
        let num = 4;
        let correctAnswer = "4*3*2*1=24";
        let userAnswer = prompt("What is the factorial of 4?");
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    }

    // Start the game
    reverseArrayGame();
    reverseStringGame();
    countVowelsGame();
    capitalizeWordsGame();
    maxArrayGame();
    minArrayGame();
    sumArrayGame();
    filterVowelsGame();
    primeFactorsGame();
    fibonacciGame();
    factorialGame();

    alert("Your total score is: " + score);
}

game();

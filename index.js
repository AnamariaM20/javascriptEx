//BASIC https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// Date

const date = new Date();
const day = date.getDay()
const dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(dayWeek[day])

let curentTime =  date.getTime()
console.log(curentTime)

    const hourNowIs = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric'})

console.log(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true }));  
console.log(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }));  
console.log(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric'}));  // This is ok
console.log(date.toLocaleString('en-US', {second: 'numeric'}));

console.log(`Date now is ${hourNowIs}`)

//Get Current Date in Various Formats

//let dateIso = date.toISOString().split() // ['2025-04-01T15:30:27.361Z']
//let dateIso = date.toISOString().split("T") //[ "2025-04-01", "15:30:57.762Z"]
let dateIso = date.toISOString().split("T")[0] //2025-04-01
console.log(dateIso)


const usDate = `${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}` // se pune + 1 din cauza indexului
console.log(usDate)

const dateEu = `${date.getDate()}- ${date.getMonth() +1 } - ${date.getFullYear()}` 
console.log(dateEu)

// function printWindowContents(){
//     window.print()
// }

// printWindowContents()
//-------------------------------------------------------------------------
//Calculate Area of Triangle (Sides: 5, 6, 7)

const num = [5, 6, 7]
function numIn(a, b, c){
    return a*b*c
}

console.log(numIn(5, 6, 7))

let rotateWord ="w3resource"

//substring(0, str.length - 1)   ==================> selectezi stringul de la indexul 0 pana la indexul lungime - 1
//console.log(str.substring(2));
// Expected output: "zilla"

function rotateStringRight(str) {
    //setInterval(() => {
        //str = str[str.length - 1]  ==> e
        //str = str.substring(0, str.length - 1) ==> w3resourc
        //console.log(str)
        str = str[str.length - 1] + str.substring(0, str.length - 1);
        console.log(str);
    //}, 500); // Adjust the interval speed as needed
}

// Call the function with the string
rotateStringRight("w3resource");

// -------------------------------------LEAP YEAR----------------------------------
function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) ||( year % 400 === 0)){
        return "year is leap"
    } else {
        "year is not leap"
    }
};

console.log(isLeapYear(2000))

const data = new Date(1972);

function isFirstDaySaturday(data){
     if(data.getMonth()===0 && data.getDate() === 0){
        return "Prima zi a a anului a fost sambata"

     }else {"Prima zi a anului nu a fost sambata"}
 }

 console.log(isFirstDaySaturday(data))
// const dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for (let year = 2014; year <= 2050; year++){
    let date = new Date(year, 2, 1) //2= martie
    if(date.getDay() === 0){ //0= duminica
        console.log(`Martie 1st is a Sunday in ${year}`)
    }
}
//----------------------------------Check Leap Year (Gregorian Calendar)---------------------------------------------------
//Math.floor(Math.random() * 10) + 1 == transforma un numar random int-un numar integer
//parseInt transforma un string numar intr-un numar

// random integer between 1 and 10 javascript   ===   Math.floor(Math.random() * 10) + 1

// let y = document.querySelector("number")
// let x= Math.floor(Math.random() * 10) + 1
// function randomNumber(x, y){
//     if(x === y){
//         return alert("you match")
//     } else {alert("try again")}
// }

//-------------------------------Guess number ----------------------------------------------------------
// randomNumber()
// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user for a guess
//const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the guess is correct
// if (userGuess === randomNumber) {
//     alert("🎉 Good Work! You guessed correctly.");
// } else {
//     alert(`❌ Not matched. The correct number was ${randomNumber}. Try again!`);
// }
//-----------------------------------------------------------
// let nowDate = new Date()
// let nowDate1 = `${nowDate.getDate()}- ${nowDate.getMonth() +1 } - ${nowDate.getFullYear()}` 
// console.log(nowDate1)
// let chrismasDay = new Date(2025, 12, 25).toISOString().split("T")[0]

// console.log(chrismasDay)

let countDownDate = new Date("Dec 25, 2025 15:37:25").getTime()
console.log(countDownDate)
let nowDate = new Date().getTime()

function countDown(){
    let distance = countDownDate - nowDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  return console.log(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ")
}
countDown()
//-----------------------------Multiplication and Division (User Input)---------------------------


function multiply(){
    let firstNumber = document.getElementsByClassName("firstNumber")[0].value;
    let secondNumber = document.getElementsByClassName("secondNumber")[0].value;

    document.getElementById("result").innerHTML = Number(firstNumber) * Number(secondNumber);
}

function divide(){
    let firstNumber = document.getElementsByClassName("firstNumber")[0].value;
    let secondNumber = document.getElementsByClassName("secondNumber")[0].value;
        document.getElementById("result").innerHTML = Number(firstNumber) / Number(secondNumber);
    
}

//-------------------------------------Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit------------


function changeToFahrenheit(){
   let celsiusInput  = document.getElementsByClassName("celsiusInput")[0].value
   document.getElementById("fahrenheit").innerHTML = Number(celsiusInput * 9/5) + 32;
}

function changeToCelsius(){
    let fahrenheitInput = document.getElementsByClassName("fahrenheitInput")[0].value; 
    document.getElementById("celsius").innerHTML = Number(fahrenheitInput-32)* 5/9;

}
//---------------------15. Difference Between Number and 13--------------------


function differece(x){
    if(x <= 13){
        return 13 - x
    }else{
        return (x-13)*2
    }
}

console.log(differece(4))

let apa = 15
console.log(differece(apa))

//----------16. Sum Two Integers (Triple if Equal)---------

function sum(a, b){
    if (a === b){
        return a + b
    } else{
        return (a+b)*3
    }
}

console.log(sum(3, 4))

// -----17. Difference Between Number and 19 (Triple if >19)


function difference(x){
    if(x >= 19){
        return (x-19)*3
    }else{
        return x-19
    }
}

//-----------18. Check if Number or Sum is 50

function xx(a, b){
    if(a > 50 || b > 50 || a+b > 50){
        return true
    }else{
        return false
    }
}

console.log(xx(2, 25))

///----21. Add 'Py' to Start of String if Not Present

function includesPy (a){
    if(a.includes("py")){
        return a.substring(2)
    }else{
        return "py"+a
    }
}
let includePy = "pyana"
let notIncludesPy = "ana"
console.log(includesPy(includePy))
console.log(includesPy(notIncludesPy))

//---- 22. Remove Character at Specified Position in String
//substr(indexStart, lenght)
//substring() If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.
//The two parameters of substr() are start and length, while for substring(), they are start and end.
//The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

//string.slice(indexStart, IndexEnd)
let word = "Sanipol"
console.log(word)

let wordI = word.substr(2,3)
console.log(wordI)

let wordX= word.slice(0, 3)
console.log(wordX)
let wordY = word.slice(4, 7)
console.log(wordY)
const newWord = wordX + wordY
console.log(newWord)

//-----------25 Check if Number is Multiple of 3 or 7


function multipleTreSeven(x) {
    if(x % 3 === 0 || x % 7 === 0) {
    return true
} else {
    return false
}}

console.log(multipleTreSeven(13))
//-----------26. Add Last 3 Characters to Front and Back of String

let sentence = "this is my life"
let sentenceLastThreeLetters = sentence.substr((sentence.length - 3), sentence.length )
console.log(sentenceLastThreeLetters)
let newSentence = sentenceLastThreeLetters + sentence + sentenceLastThreeLetters
console.log(newSentence)

//charAt(index)

//--------- 27. Check if String Starts with 'Java'

//startsWith(searchString, position)

let aWord = "javascript"
let startWithAword = aWord.startsWith("java", 1)
console.log(startWithAword)

// 28. Check if Two Integers are in Range 50?99

function ventiOtto(x, y){
    if(x >= 50 && x <= 99 && y >= 50 && y <= 99){
        return "ok both number"
    } else {
        return "one of them it is not in range "
    }
}

console.log(ventiOtto(25, 78))

//------30. Remove 'Script' from String at 5th Position

let trentaWord = "apple, chair, tapier, sanier, sss "

function trenta(str){
    if(str.includes("script", 4)){

        return str.replace("script", "")
    } else{
        return str
    }
}

console.log(trenta(trentaWord))

// ----31. Find Largest of Three Integers
//${Math. max(num1, num2, num3)}

function trentUno(x, y, z){
    return `the largest number is ${Math.max(x,y,z)}`
   // Math.max(x,y,z)
}
console.log(trentUno(12, 4, 8))

//-- 32. Find Closest Value to 100 from Two Numbers

function trentaDue(a, b){
    let difA = Math.abs(100-a)
    let difB = Math.abs(100-b)

    if(difA > difB){
        return b
    } else if(difA < difB){
        return a
    }else{
        return "the both are equal"
    }
}

console.log(trentaDue(42, 2))

//---- 34. Find Larger Number in Range 40?60
// funtia asta pe care am scris-o returneaza 1 sau 0. Adica true sau false; 
function trentaQuatro(x, y){
  const inRange = (n) => n >= 40 && n <= 60 
    return Math.max(inRange(x), inRange(y))
}

console.log(trentaQuatro(47, 58))

function trentaQuatro(x, y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
      return Math.max(x, y);
    }
    return 0; // sau altă valoare care semnalează că unul e în afara intervalului
  }

// ---- 35. Check Character Between 2nd and 4th Positions in String

let wordTrentaCinque = "Saturai "

function trentaCinque(str, char) {
    // Extract characters from index 1 (2nd position) to index 3 (4th position)
    const sub = str.substring(1, 4); //
    return sub.includes(char);
}
  console.log(trentaCinque(wordTrentaCinque, "a"))

  // ---37. Modify String Based on Length (First 3 Lowercase/Uppercase)


  let ana = "ana"
 let anaa = ana.toUpperCase()
  console.log(anaa)

function trentasette(str){
    if(str.length < 3){
        let str1 = str.toLowerCase()
    return str1
  } else if( str.length > 3){
    let str2 = str.toUpperCase()
    return str2

  }
}
console.log(trentasette("saria"))

// ---39. Sum Two Integers and Return Based on Range

function trentaNove(a, b){
    if( sum(a, b) >= 50 && sum(a, b) <= 80 ){
        return 65
    }else{
        return 80
    }
}
console.log(trentaNove(5, 1))

//-----40. Check if Integer is 8 or Difference/Sum Equals 8

function quaranta(a, b){
    const sum = a+b
    const dif = a-b
     if(a == 8 || b == 8 || sum == 8 || dif == 8) {
        return true
     }
}
console.log(quaranta(5, 3))

//----41. Return 30, 40, or 20 Based on Same Numbers
function quarantaUno(a, b, c){
    if(a === b && a === c && b === c){
        return 30
    } else if ( a === b || b ===c || c ===a){
        return 40
    }else {
        return 20
    }
}

console.log(quarantaUno(23, 23, 0))
console.log(quarantaUno(23, 23, 23))
console.log(quarantaUno(3, 23, 0))

//FETCH API


async function fetchData() {
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = `<p>Title: ${data.title}</p><p>Body: ${data.body}</p>`;
    } catch (error) {
    console.error('Error fetching data:', error);
    }
    }
    fetchData();





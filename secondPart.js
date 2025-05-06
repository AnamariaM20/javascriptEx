//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

//42. Check Numbers in Strict or Soft Increasing Mode

function checkIncreasingMode(a, b, c) {
    if (a < b && b < c) {
      return "Strict mode";
    } else if (a <= b && b <= c) {
      return "Soft mode";
    } else {
      return "Not increasing";
    }
  }

 // 43. Check Rightmost Digits of Three Numbers

function quarantaTre (num1, num2, num3){
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;

    return  lastDigit1 === lastDigit2 || lastDigit2 === lastDigit3 || lastDigit1 === lastDigit3
}

console.log(quarantaTre(2, 42, 565))
//    const lastDigit1 = num1.toString().slice(-1); 

//45. Check if Integer is 15, or Sum/Difference is 15

function quarantaCinque(a, b){
    if((a || b === 15) || (a +b === 15) || (a - b === 15)){
        return true
    }
    
}
console.log(quarantaCinque(12, 3))

//46. Check if Only One Integer is Multiple of 7 or 11

function quarantaSei(a){
    if( a % 7 ===0){
        return "the number is multiple by 7"
    } else if (a % 11 ===0){
        return "the number is multiple by 11"
    } else { "the number is not multiple by 7 or 11"}
}
console.log(quarantaSei(33))

//48. Reverse a Given String

function quarantaOtto(string){
 let splitString = string.split("")
 let reverseArray = splitString.reverse()
 let joinArray = reverseArray.join("")
 return joinArray
}
console.log(quarantaOtto("Maria"))
console.log(quarantaOtto("samiriam"))
//49. Replace Each Character with Next Alphabet Letter

function shiftLetters(str) {
    return str.split('').map(char => {
      if (char >= 'a' && char <= 'z') {
        return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (char >= 'A' && char <= 'Z') {
        return char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
      } else {
        return char; // păstrează spațiile, cifrele, semnele etc.
      }
    }).join('');
  }
//   char.charCodeAt(0) – obține codul ASCII al literei
// String.fromCharCode(...) – transformă codul înapoi în literă
// char === 'z' ? 'a' – dacă e ultimul caracter din alfabet, revine la început
  // Exemple:
  console.log(shiftLetters("hello"));     // "ifmmp"
  console.log(shiftLetters("Zoo!"));      // "App!"
  console.log(shiftLetters("Crazy 123")); // "Dsbaz 123"

//50. Capitalize First Letter of Each Word in String



  function capitalizeWords(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Exemple de utilizare:
  console.log(capitalizeWords("salut lume frumoasă")); // "Salut Lume Frumoasă"
  console.log(capitalizeWords("this is a test"));      // "This Is A Test"
  console.log(capitalizeWords("javascript e tare"));   // "Javascript E Tare"
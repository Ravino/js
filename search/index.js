"use strict";


const searchStr = (str, lowStr) => {

  if (typeof str !== "string"  &&  typeof lowStr !== "string") {

    return "typeof lowStr not in str";

  }


  if (lowStr. length > str. length) {

    return "equ lowStr not in str";

  }


  let j = 0;
  let i = 0;


  for (; i < str. length; i++) {

    if (str [i] == lowStr [j]) {

      break;

    }


  }


  for (; j < lowStr. length; j++) {

    if (str [i] !== lowStr [j]) {

      return "lowStr not in str";

    }


    i++;

  }


  return "lowStr yes in str";

};



console. log (searchStr ("abcdefgh", "bcdefghk"));
console. log (searchStr ("abcdefgh", "bcdefgh"));

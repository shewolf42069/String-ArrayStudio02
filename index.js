let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

let arr = protoArray4;
//const input = require('readline-sync');

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.



    if (arr.includes(",")) {
      console.log("commas are the delimiter");

      let newP1 = protoArray1.split(",");
      console.log(newP1);
      let rev1P1 = newP1.reverse();
      console.log(rev1P1);
      let rev2P1 = rev1P1.toString();
      console.log(rev2P1);


    } else if (arr.includes(";")) {
      console.log("semicolons are the delimiter");

      let newP2 = arr.split(";");
      console.log(newP2);
      let rev1P2 = newP2.sort();
      console.log(rev1P2);
      let rev2P2 = rev1P2.toString();
      console.log(rev2P2);

    } else if (arr.includes(" ")) {
      console.log("spaces are the delimiter");

      let newP3 = arr.split(";");
      console.log(newP3);
      let rev1P3 = newP3.sort();
      let rev2P3 = rev1P3.reverse();
      console.log(rev2P3);
      let rev3P3 = rev2P3.toString();
      console.log(rev3P3); 

    } else {
      console.log("this must not be an array");
    }


//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

//for now it is hardcoded above

//let newP1 = protoArray1.split(",");
//console.log(newP1);
//let rev1P1 = newP1.reverse();
//console.log(rev1P1);
//let rev2P1 = rev1P1.toString();
//console.log(rev2P1);


//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

//for now it is hardcoded above

//let newP2 = protoArray2.split(";");
//console.log(newP2);
//let rev1P2 = newP2.sort();
//console.log(rev1P2);
//let rev2P2 = rev1P2.toString();
//console.log(rev2P2);


//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

//for now it is hardcoded above

  // let newP3 = protoArray2.split(";");
  // console.log(newP3);
  // let rev1P3 = newP3.sort();
  // let rev2P3 = rev1P3.reverse();
  // console.log(rev2P3);
  // let rev3P3 = rev2P3.toString();
  // console.log(rev3P3); 


//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

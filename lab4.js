let data = prompt("Enter your Data: ");
name = data.toLowerCase();

const string = name;

const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
console.log(usingArrayFrom.length);

// var i = usingArrayFrom.length;
// for (i==0; i<usingArrayFrom.length; i++){
//     if(usingArrayFrom[i] != 'a'){
//         if(usingArrayFrom[i] != 'b'){
//             console.log('Wrong Input');
//         }
//     }
// }
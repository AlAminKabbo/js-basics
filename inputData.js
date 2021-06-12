let num1 = prompt('Enter first number: ');
let num2 = prompt('Enter second number: ');
let number= max(num1,num2)
console.log('Max= '+number);

function max(a,b){
    if (a>b) return a;
    else return b;
}
let data = prompt("Enter your Data: ");
name = data.toLowerCase();

const string = name;

const usingSplit = string.split('');
const usingSpread = [...string];
const input = Array.from(string);

var i;
for( i=0; i<input; i++){
    if(input[i] =! 'a'){
        if(input[i] ){
        console.log('Wrong Input');
        return 0
        }
    }
}

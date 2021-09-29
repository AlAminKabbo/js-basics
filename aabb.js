let data = prompt("Enter your Data: ");
name = data.toLowerCase();

const string = name;

const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
if(usingArrayFrom[0] == 'a' && usingArrayFrom[1] == 'a' && usingArrayFrom[2] == 'b' && usingArrayFrom.length <= 3){
    console.log("Accepted...");
}else if(usingArrayFrom.length > 3){
    for(var i = 3; i < usingArrayFrom.length;i++){
        if(usingArrayFrom[i] = 'b' && usingArrayFrom[i] != 'a' ){
            console.log("Accepted...");
            break; 
        }
    }
}

else if (usingArrayFrom.length > 3 && usingArrayFrom[0] == 'a' && usingArrayFrom[1] == 'a' && usingArrayFrom[2] == 'b' ){
    for(var i = 3; i < usingArrayFrom.length;i++){
        for(var j = 3; j < usingArrayFrom.length;j++){
            if(usingArrayFrom[j] = 'b' && usingArrayFrom[j] != 'a'){
                console.log("Not Accepted!!");
                break;
            }
        }
        if(usingArrayFrom[i] == 'b' && usingArrayFrom[i] != 'a'){
            if(j < usingArrayFrom.length){
                break;
            }else{
                console.log("Accepted...");
                break;
            }
        }
        break;
    }
}
else{
    console.log("Not Accepted!!");
}
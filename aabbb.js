let data = prompt("Enter your Data: ");
name = data.toLowerCase();

const string = name;

const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
if(usingArrayFrom[0] == 'a' && usingArrayFrom[1] == 'a' && usingArrayFrom[2] == 'b' && usingArrayFrom.length <= 3){
    console.log("Accepted...");
}else if (usingArrayFrom.length > 3){
    for(i = 3; i < usingArrayFrom.length;i++){
        // if(usingArrayFrom[0]== 'a' && usingArrayFrom[1]== 'a' && usingArrayFrom[2]== 'b'{
        //     console.log("Accepted...");
        // }
        var j = usingArrayFrom.length - 1;
        if(usingArrayFrom[j] != 'b'){
            console.log("Not Accepted!!");
            break;
        }else if (usingArrayFrom[0]== 'a' && usingArrayFrom[1]== 'a' && usingArrayFrom[2]== 'b'&& usingArrayFrom[j] != 'a'){
            console.log("Accepted...");
            break;
        }
    }
}else{
    console.log("Not Accepted!!");
}
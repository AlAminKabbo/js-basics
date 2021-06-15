const array =[0,null,2,3,1]
console.log(countTruthy(array));

function countTruthy(array) {
    let count=0;
    for (let value of array)
        if(value)
        count++;
    return count;
    
}
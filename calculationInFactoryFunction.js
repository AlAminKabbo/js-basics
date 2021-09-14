function calculation(number){
    return{
        number,
        sqr(){
            console.log(number * number);
        },
        increaser(){
            console.log(number + 1);
        },
        decreaser(){
            console.log(number - 1);
        }
    
    };
}

var result = calculation(2);
result.decreaser();
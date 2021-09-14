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
        },
        quabe(){
            console.log(number * number * number)
        }
    
    };
}

var result = calculation(3);
result.quabe();
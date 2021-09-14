function calculation(number){
    this.number = number;
    this.sqr = function(){
        console.log(number * number);
    },
    this.increaser(){
        console.log(number+1);
    }
}

const calculation = new calculation(2)
result.increaser();
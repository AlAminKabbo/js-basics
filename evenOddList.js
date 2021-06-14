showNumbers(10)
function showNumbers(limit) {
    let n=0
    while(n<=limit){
        if(n%2==0)
        console.log(n,'Even');
        else
        console.log(n,'Odd');
        n++;
    }
}
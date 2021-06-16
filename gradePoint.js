const marks=[80,80,50]


console.log(calculateGrade(marks));

function grade(marks) {
    
    let sum=0;
    for (let key in marks){
        // console.log(key);
        // console.log(marks[key]);
        sum+=marks[key];
    }
    let avarageMark=sum/marks.length;

    if (avarageMark<=59)
        console.log('F');
    else if(avarageMark>=60 && avarageMark<=69)
        console.log('D');
    else if(avarageMark>=70 && avarageMark<=79)
        console.log('C');
    else if(avarageMark>=80 && avarageMark<=89)
        console.log('B');
    else if(avarageMark>=90 && avarageMark<=100)
        console.log('A');
}

function calculateAvarage(array) {
    let sum =0;
    for(let value of array)
        sum+=value;
    return sum/array.length;
}

function calculateGrade(marks) {
    const avarege=calculateAvarage(marks)
    if (avarege<=59) return 'F';
    if (avarege<=69) return 'D';
    if (avarege<=79) return 'C';
    if (avarege<=89) return 'B';
    return 'A';
}
// console.log(showStars(6));
showStars(5)

function showStars(n) {
    for(let i=1;i<=n;i++){
        let star = '';
        for(let j=1;j<=i;j++){
            star+='*';
        }
        console.log(star);
    }
    // return '';
}
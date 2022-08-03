// Declear a function name with parameter name money
function bringSingara(money) {
    console.log(money, 'Taka paici.');
    console.log('Mama, Ei nen singara');
}
// bringSingara(10); // parameter value is 10.

//we can use variable as a parameter value 
let taka = 210;
bringSingara(taka);

function sum(a, b, c, d, e) {
    console.log('Summation of :', a, b, c, d, e);
    let sum = a + b + c + d + e;
    console.log(sum);
}
sum(51, 14, 12, 25, 14);
function factorial(n){
        var i =1 ;
    var fact = 1;
    while(i <= n ){
        factorial = fact * i;

        i++;
    }
    return factorial;
}
var result = factorial(5);
console.log(result);
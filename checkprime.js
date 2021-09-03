var n =77;


function isprime(n){
    
for(i = 2;i < n; i++) {
     console.log(i, n%i);
    if(n%i == 0){
        return'not a prime number';
    }

}
return'you number in prime';
}
var result = isprime(128);
console.log(result);
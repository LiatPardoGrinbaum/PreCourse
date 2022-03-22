const numFactorial = (num)=>{ 
    factorial = 1;
    for (let x = num; x > 0; x-=1) {
        factorial*=x;
    }
    return factorial;
}

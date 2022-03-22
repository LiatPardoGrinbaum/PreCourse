const primeNumberFromOneToN = (n)=>{
    let amount = 0;
    for (x = 2; x < n; x+=1) {
        let bool = true;
        for (y = 2; y < x; y+=1) {
            if (x % y === 0) {
            bool = false;
            break;
            }  
        }
        if (bool) {
            amount+=1;
        }
    }
    return amount;
}
    
    
       
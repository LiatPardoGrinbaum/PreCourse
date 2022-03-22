const countOddFromZeroToNum = (num)=>{ 
    let amount = 0;
    for (let x = 0; x < num; x+=1) {
        if ((x % 2) === 0) {
            amount+=1;     
        }
    }
    return amount;
}

const divideOrHasSeven = (start,end)=>{
    let amount = 0;
    for (let x = start; x < end; x+=1) {
        if ((x % 7 === 0) || x.toString().includes("7"))  {
            amount+=1;
        }
    }
    return amount;
 }
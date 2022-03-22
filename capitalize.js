const capitalize = (word)=>{
    let arrVowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < 6; i+=1){
        let lower = arrVowel[i];
        if (word.includes(lower)) {
            let upper = lower.toUpperCase();
            word = word.replaceAll(lower, upper);  
        } 
    }
    return word;
}
    
    
const longestWord = (sentence)=>{
    let wordsArr = sentence.split(" ");
    let longest = "";
    //console.log(wordsArr);
    for (i = 0; i < (wordsArr.length); i+=1) {
        let word = wordsArr[i].replace(/[^a-zA-Z]/g, '');  //the length of only the letters in the word
        if (word.length >= longest.length) {
            longest = word;
            //console.log(longest);
            }
    }
    return longest;
}
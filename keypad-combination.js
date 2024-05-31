// codes = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

let digits = "234";
let codes = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

let ans = getCombination(digits);
console.log(ans);

function getCombination(digits) {
    if(digits.length == 0) return [];

    return getLetterCombination(digits, 0);
}

function getLetterCombination(digits, idx) {

    if(idx == digits.length) {
        return [""];
    }

    let myRes = [];
    let recRes = getLetterCombination(digits, idx + 1);

    let currentDigit = digits[idx] - '0'; // 2
    let code = codes[currentDigit]; // abc

    for(let letter of code) {
        for(let comb of recRes) {
            myRes.push(letter + comb);
        }
    }

    return myRes;

}

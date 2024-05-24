// abcbccb
// travel in gap in 2D matrix DP
// for g = 0, len = 1 char, true for palindrom
// for g = 1, len = 2 char, if both char same, true else false
// for g = 2 -> len - 1, len = 3 char, if extreme are same and betweens are palindrome, dp[i + 1][j - 1], true, else false

let str = "abcacbccb";
let res = "";
let longestLength = 0;

let dp = Array(str.length).fill(false).map(() => Array(str.length).fill(false));

for(let g = 0; g < str.length; g++) {
    // string for check is from i -> j
    for(let i = 0, j = g; j < str.length; i++, j++) {
        if(g == 0) {
            dp[i][j] = true;
        } else if(g == 1) {
            dp[i][j] = str[i] == str[j];
        } else {
            dp[i][j] = (str[i] == str[j]) && (dp[i + 1][j - 1]);
        }

        if(dp[i][j]) {
            // as gap is growing so we can directly assign length, and not care of greater then curr length
            longestLength = g + 1; 
            res = str.substring(i, j + 1);
        }
    } 
}

console.log(longestLength);
console.log(res);
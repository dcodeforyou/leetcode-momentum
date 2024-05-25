// p -> c*a*b
// s -> aab

/**
 *   x* -> -
 *      -> x x* -> x
 *              -> xx x* ....
 */

// as there is _ pattern, we use dp with _ and patterns and _ and string characters

let str = "aab";
let pattern = "c*a*b";

let dp = Array(str.length + 1).fill(false).map(() => Array(pattern.length + 1).fill(false));

let mr = dp.length - 1;
let mc = dp[0].length - 1;

for(let i = 0; i <= mr; i++) {
    for(let j = 0; j <= mc; j++) {
        // breakdown DP into different sections
        if(i == 0 && j == 0) {
            // first cell
            dp[i][j] = true; // as _ pattern matches _ string
        } else if(i == 0) {
            // first row
            let chp = pattern[j - 1];
            if(chp == '*') {
                // as chp is * and char at frst row is _
                // match it with second last chp as ch* can lead to _
                dp[i][j] = dp[i][j - 2];
            }
        } else if(j == 0) {
            // first column
            dp[i][j] = false; // as _ pattern cannot match any character
        } else {
            // rest dp
            let chp = pattern[j - 1];
            let chs = str[i - 1];

            if(chp == '*') {
                dp[i][j] = dp[i][j - 2]; // considering ch* leads _ for initial
                let chpm1 = pattern[j - 2];
                if(chpm1 == chs) {
                    // as last character is matched, not need to check
                    // prev string is matched with same pattern or not
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }else if (chp == chs) {
                // as last character is matched we need to check if till prev pattern
                // prev str char is matched or not
                // diagonally above
                dp[i][j] = dp[i - 1][j - 1];
            } else if (chp == '.') {
                // as last character is matched we need to check if till prev pattern
                // prev str char is matched or not
                // diagonally above
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }
}

console.log(dp[mr][mc]);
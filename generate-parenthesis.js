// 0 -> .
// 1 -> ()

// 2 -> (inside)outside
//      (1)0
//      (0)1

// 3 -> (inside)outside
//      (2)0
//      (1)1
//      (0)2

// ....

// take one parenthesis and update inside and outside parenthesis 

let n = 5;
let dp = Array(n + 1);

dp[0] = [""];
dp[1] = ["()"];

for(let i = 2; i < dp.length; i++) {
    dp[i] = [];

    let inside = i-1;
    let outside = 0;

    while(inside >= 0 && outside <= i-1) {
        // Taking all combinations of inside and outside
        for(let ins of dp[inside]) { // for every possible way of inside of same n
            for(let out of dp[outside]) { // try every possible way of outside of same n
                let str = "";
                str += "(";
                str += ins;
                str += ")";
                str += out;
                dp[i].push(str);
            }
        }
        inside--;
        outside++;
    }
    
}

console.log(dp[dp.length - 1]);
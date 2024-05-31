let nums = [1,0,-1,0,-2,2]; 
let tar = 0;

let res = [];

nums.sort((a, b) => a - b);

let pairSet = new Set();

for(let i = 0; i < nums.length - 3; i++) {
    for(let j = i + 1; j < nums.length - 2; j++) {
        let li = j + 1;
        let ri = nums.length - 1;

        while(li < ri) {
            let sum = nums[i] + nums[j] + nums[li] + nums[ri];

            if(sum < tar) {
                li++;
            } else if(sum > tar) {
                ri--;
            } else {
                let pair = "" + nums[i] + nums[j] + nums[li] + nums[ri];
                if(!pairSet.has(pair)) {
                    pairSet.add(pair);
                    res.push([nums[i], nums[j], nums[li], nums[ri]]);
                }
                li++;
                ri--;
            }
        }
    }
}

console.log(res);
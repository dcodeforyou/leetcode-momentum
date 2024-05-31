// return the closest sum to target
let nums = [-1, 2, 1, -4];
let target = 1;

let ans = get3sumClosest(nums, target);
console.log(ans);

function get3sumClosest(ar, tar) {
    let res = 0;
    let gap = Number.MAX_VALUE;

    ar.sort((a, b) => a - b);

    for (let i = 0; i < ar.length - 2; i++) {
        let li = i + 1;
        let ri = ar.length - 1;

        while (li < ri) {
            let sum = ar[i] + ar[li] + ar[ri];
            if (sum < tar) {
                if (tar - sum < gap) {
                    gap = tar - sum;
                    res = sum;
                }
                li++;
            } else if (sum > tar) {
                if (sum - tar < gap) {
                    gap = sum - tar;
                    res = sum;
                }
                ri--;
            } else {
                return tar;
            }
        }
    }

    return res;
}


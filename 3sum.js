let ar = [-1, 0, 1, 2, -1, -4];
let tar = 0;

let res = [];

let set = new Set();

ar.sort((a, b) => a - b);

for(let i = 0; i < ar.length - 2; i++) {
    let ntar = tar - ar[i];
    let li = i + 1;
    let ri = ar.length - 1;
    while(li < ri) {
        if(ar[i] + ar[li] + ar[ri] < tar) {
            li++;
        } else if(ar[i] + ar[li] + ar[ri] > tar) {
            ri--;
        } else {
            let currTriplet = "" + ar[i] + ar[li] + ar[ri];
            if(!set.has(currTriplet)) {
                set.add(currTriplet);
                res.push([ar[i], ar[li], ar[ri]]);
            }
            li++;
            ri--;

        }
    }
}

console.log(res);
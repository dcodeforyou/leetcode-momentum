// height of cont = [3, 1, 5, 7, 4, 6];
//                   a  b  c  d  e  f
// now if we want to consider all the containers, n^2
// ab, ac, ad, ae, af
// bc, bd, be, bf
// cd, ce, cf
// de, df
// ef

// but for cont a, max area would be dependent on width only, as height is 3 for a
// so max, width will be a -> f, 5
// SO, taking two pointers to calc only the max possible area for a container with lesser height 
// and shifting pointers from least height ones, and eliminating other possibilites, GREEDY

let arr = [3, 1, 5, 7, 4, 6];

let left = 0;
let right = arr.length - 1;

let maxArea = 0;

while(left < right) {
    let currArea = (right - left) * (Math.min(arr[left], arr[right]));
    if(currArea > maxArea) {
        maxArea = currArea;
    }
    if(arr[left] < arr[right]) {
        left++;
    } else {
        right--;
    }
}

console.log(maxArea);


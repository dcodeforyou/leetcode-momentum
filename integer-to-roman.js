// Range 0 - 3999
// I - 1, V - 5, X - 10, L - 50, C - 100, D - 500, M - 1000

/**
 * ONE'S PLACE
 * minor - I, mid - V, major - X
 * 
 * 1, 2, 3 -> I, II, III, (minor n times)
 * 4 -> IV (minor + mid)
 * 5 -> V (mid)
 * 6, 7, 8 -> VI, VII, VIII (mid + min n-5 times)
 * 9 -> IX (min + maj)
 * 10 -> X (maj)
 */


/**
 * TEN'S PLACE
 * minor - X, mid - L, major - C
 * 
 * 10, 20, 30 -> X, XX, XXX, (minor n times)
 * 40 -> XL (minor + mid)
 * 50 -> L (mid)
 * 60, 70, 80 -> LX, LXX, LXXX (mid + min n-5 times)
 * 90 -> XC (min + maj)
 * 100 -> C (maj)
 */

/**
 * HUNDRED'S PLACE
 * minor - C, mid - D, major - M
 * 
 * 100, 200, 300 -> C, CC, CCC, (minor n times)
 * 400 -> CD (minor + mid)
 * 500 -> D (mid)
 * 600, 700, 800 -> DC, DCC, DCCC (mid + min n-5 times)
 * 900 -> CM (min + maj)
 * 1000 -> M (maj)
 */

let num = 3949;

intToRoman(3949, "");

function intToRoman(num, res) {
    // 1000's place
    res = process(res, '*', '*', 'M', Math.floor(num / 1000));
    num %= 1000;

    // 100's place
    res = process(res, 'M', 'D', 'C', Math.floor(num / 100));
    num %= 100;

    // 10's place
    res = process(res, 'C', 'L', 'X', Math.floor(num / 10));
    num %= 10;

    // 1's place
    res = process(res, 'X', 'V', 'I', num);

    console.log(res);
}

function process(res, maj, mid, min, val) {
    if(val <= 3) {
        
        for(let i = 1; i <= val; i++) {
            res += min;
        }
    } else if (val == 4) {
        res += (min + mid);
    } else if(val == 5) {
        res += mid;
    } else if(val <= 8) {
        res += mid;
        for(let i = 6; i <= val; i++) {
            res += min;
        }
    } else if(val == 9) {
        res += (min + maj);
    }

    return res;
}


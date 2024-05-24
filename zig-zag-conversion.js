// "abccbcdefghijkl"
// rows = 4

/**
 * 0  a0        d6          j12
 * 1  b1    c5  e7     i11  k13 
 * 2  c2  b4    f8  h10     l14
 * 3  c3        g9
 */

// adjbceikcbfhlcg

//  traverse bottom then top find indexes and concat to res str,
// for row 1, 
// bottom - 2 * (MR - 1 - crow(i))
// top = 2 * i

// for top row, only bottom traverse, 2 * (MR - 1 - i), bottom row, 2 * i
// find indexes and append till indexes < str.len

let str = "abccbcdefghijkl";
let maxRows = 4;

let result = getZigZagConversion(str, maxRows);
console.log(result);


function getZigZagConversion(str, mR) {
    let res = "";

    if(mR == 1) {
        // As if mR is 1, according to below code, only 0 char will append itself for infinite loop
        return str;
    }
    
    for(let i = 0; i < mR; i++) {
        let idx = i;
        let bottomDelta = 2 * (mR - 1 - i);
        let topDelta = 2 * i;
    
        let bottomDir = true;
    
        while(idx < str.length) {
            res += str[idx];
            if(i == 0) { // top row
                idx += bottomDelta;
            } else if( i == mR - 1) { // bottom row
                idx += topDelta;
            } else { // mid rows
                if(bottomDir)
                    idx += bottomDelta;
                else
                    idx += topDelta;
    
                bottomDir = !bottomDir;
            }
        }
    }

    return res;
}





// abccbc
// ODD LEN PALIDROME - keep axis on char 
// EVEN LEN PALINDROME - keep axis bw char

let str = "abccbc";
let res = "";

// For Odd
for(let ax = 0; ax < str.length; ax++) {
    let or = 1;
    let len = 1; // as ax on char, min length is 1
    while(ax - or > 0 && ax + str.length) {
        if(str[ax - or] === str[ax + or]) {
            or++;
            len += 2;
        } else {
            break;
        }
    }
    // here we get the max length of palindromic subs for an axis
    if(len > res.length) {
        // let si = ax - or;
        let si = ax - len/2;
        res = str.substring(si, si + len);
    }
}

// For Even
for(let ax = 0; ax < str.length - 1; ax++) {
    let or = 1;
    let len = 0; //as ax bw char len 0;

    while(ax - or + 1 > 0 && ax + or < str.length) { // + 1 as for or 1 ax char is inc as ax is after that char
        if(str[ax - or + 1] === str[ax + or]) {
            or++;
            len += 2;
        } else {
            break;
        }
    }

    if(len > res.length) {
        let si = ax - (len/2) + 1;
        res = str.substring(si, si + len);
    }
}

console.log(res);


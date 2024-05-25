// MMMCMXLIX -> 3949
// For M, D, C, L, X, V, I -> add 1000, 500, 100, 50, 10, 5, 1
// But If, C followed by M, or D -> -100
// or XC or XL -> -10
// or IV or IX -> -1

let roman = "MMMCMXLIX"

let res = 0;

for(let i = 0; i < roman.length; i++) {
    let ch = roman[i];

    if(ch == 'M') {
        res += 1000;
    } else if (ch == 'D') {
        res += 500;
    } else if (ch == 'C' && i + 1 < roman.length) {
        if(roman[i + 1] == 'M' || roman[i + 1] == 'D') res -= 100;
    } else if( ch == 'C') {
        res += 100;
    } else if(ch == 'L') {
        res += 50;
    } else if (ch == 'X' && i + 1 < roman.length) {
        if(roman[i + 1] == 'L' || roman[i + 1] == 'C') res -= 10;
    } else if(ch == 'X') {
        res += 10;
    } else if(ch == 'V') {
        res += 5;
    } else if (ch == 'I' && i + 1 < roman.length) {
        if(roman[i + 1] == 'V' || roman[i + 1] == 'X') res -= 1;
    } else if(ch == 'I') {
        res += 1;
    }
}

console.log(res);
let strings = ['flower', 'floral', 'flowless'];

let res = "";

if(strings.length == 0) return "";

for(let i = 0; i < strings[0].length; ) {
    let ch = strings[0][i];
    let allWell = true;
    for(let j = 1; j < strings.length; j++) {
        if(strings[j][i] == ch) {
            continue;
        } else {
            allWell = false;
            break;
        }
    }
    if(allWell) {
        res += ch;
        i++;
    } else {
        break;
    }
}

console.log(res);
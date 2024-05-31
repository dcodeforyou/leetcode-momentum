let ar = ["adfd", "tyj", "fdgf"];

// let ans = ar.map((str) => {
//     let x = str.split("");
//     x.sort();
//     let y = x.join("");
//     return y;
// } );
// console.log(ans);

let ans1 = ar.map((str) => str.split("").sort().join(""));
console.log(ans1);
let n = 3433;
let count = 0;

while (n > 0) {
    n = Math.floor(n / 10);// javaScript Method
    count++;
}

console.log(count);
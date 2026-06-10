let n = 85;
let even = 0;
let odd = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        even += i;
    } else {
        odd += i;
    }
}

console.log("Sum of even numbers:", even);
console.log("Sum of odd numbers:", odd);

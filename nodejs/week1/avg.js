const args = process.argv.slice(2);

if (args.length == 0) {
  console.log("Please provide some numbers.");
  process.exit(1);
}

const numbers = args.map(Number);

if (numbers.some(isNaN)) {
  console.log("All arguments must be valid numbers.");
  process.exit(1);
}

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
const avg = sum / numbers.length;

console.log(avg);
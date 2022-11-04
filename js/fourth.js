alert("Fourth task");

let a = Number(prompt("Type in first number: "));
let b = Number(prompt("Type in second number: "));

Task4(a, b);

function Task4(num1, num2) {
  if (100 - num1 < 100 - num2) {
    alert(`${num1} is closer to 100, than ${num2}`);
  } else {
    alert(`${num2} is closer to 100, than ${num1}`);
  }
}

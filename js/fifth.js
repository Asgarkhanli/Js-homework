alert("Fifth task");
let numberCount = Number(prompt("How many numbers you want to enter?"));
const newArr = new Array(); //arr1
const evenArr = new Array(); //arr2

ConvertingToEven(newArr, evenArr, numberCount);

alert(
  `Your array was ${newArr}, with the length of ${newArr.length}, the new array ${evenArr}, its length is ${evenArr.length}`
);

function ConvertingToEven(arr1, arr2, count) {
  for (let index = 0; index < count; index++) {
    let newElement = Number(prompt("Add new number"));
    arr1.push(newElement);
  }
  arr1.forEach((element) => {
    if (element % 2 == 0 && element != 0) {
      arr2.push(element);
    }
  });
}

const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const numerals = [
{
  id: "M",
  value: 1000
},{
  id: "CM",
  value: 900
}, {
  id: "D",
  value: 500
},{
  id: "CD",
  value: 400
}, {
  id: "C",
  value: 100
},{
  id: "XC",
  value: 90
}, {
  id: "L",
  value: 50
},{
  id: "XL",
  value: 40
},{
  id: "X",
  value: 10
},{
  id: "IX",
  value: 9
},{
  id: "V",
  value: 5
},{
  id: "IV",
  value: 4
},{
  id: "I",
  value: 1
}];

const convert = (num) => {
  const indexMax = numbers.findIndex((number) => number <= num);
  console.log(indexMax);
  if(num <= 0){return "";} else{
    return numerals[indexMax].id + convert(num - numbers[indexMax]);
  }
}

const convertToRoman = () => {
  const inputText = input.value;
  const inputNum = parseInt(inputText);
  if (inputText === ""){
    output.innerHTML = "Please enter a valid number";
    return;
  } else if (inputNum <= 0){
    output.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputNum >= 4000){
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    output.innerHTML = convert(inputNum);
  }
}

btn.addEventListener("click", convertToRoman);
input.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    convertToRoman();
  }
});

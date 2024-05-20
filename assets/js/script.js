const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");


const check = () => {
  const inputText = input.value.trim();
  if(inputText === ""){
    alert("Please input a value");
    return;
  }
  const regex = /[^a-zA-Z0-9]/g;
  const filteredInputText = (inputText.replace(regex, "")).toLowerCase();
  
  const isPalindrome = (filteredInputText.split("").reverse().join("") === filteredInputText) ? true : false;
  
  if(isPalindrome){
    result.innerText = inputText + " is a palindrome";
  }else{
    result.innerText = inputText + " is not a palindrome";
  }
};

button.addEventListener("click", check);
input.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    check();
  }
})
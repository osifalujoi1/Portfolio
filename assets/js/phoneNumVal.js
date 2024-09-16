const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");


const input = document.getElementById("user-input");
const output = document.getElementById("results-div");

const check = () => {

  const inputText = input.value;
  const phoneRegexes = [
    /^1\s\d{3}-\d{3}-\d{4}$/,
    /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
    /^[2-9]\d{2}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\s\d{3}-\d{4}$/,
    /^[2-9]\d{2}\s\d{3}\s\d{4}$/,
    /^[2-9]\d{2}\.\d{3}\.\d{4}$/,
    /^[2-9]\d{2}\d{3}\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1\s\d{3}\s\d{3}\s\d{4}$/
  ];

  if (inputText === ""){
    alert("Please provide a phone number");
    return;
  } 

  const isValid = phoneRegexes.some((regex) => regex.test(inputText));

  if (isValid){
    output.innerText = "Valid US number: " + inputText;
    return
  } 
  else{
    output.innerText = "Invalid US number: " + inputText;
  }
}

const clear = () => {
  input.value = "";
  output.innerText = "";
}

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);




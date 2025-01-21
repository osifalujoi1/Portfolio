let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const priceDiv = document.getElementById("price");
const drawerDiv = document.getElementById("drawer");
const purchaseBtn = document.getElementById("purchase-btn")
const changeDue = document.getElementById("change-due")



function roundUpToDecimals(value) {
  const factor = Math.pow(10, 2);
  return Math.ceil(value * factor) / factor;
}


const checkChange = (cash) => {
  changeDue.innerHTML = ""
  let minus = 0
  let change = cash - price
  let totalAmountInDrawer = cid.reduce((total, currency) => total + currency[1], 0)
  if (cash === ""){
    alert("Please enter a cash amount.");
    return;
  }
  if (cash == price){
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }
  if (cash < price){
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (change > totalAmountInDrawer){
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }
  changeDue.textContent = totalAmountInDrawer > change ? "Status: OPEN" : "Status: CLOSED";
  

  if (cash > price)  {
    
   
    if (change >= 100){
      console.log("in 100s")
      let tempChange = change
      while (tempChange >= 100){
        minus += 100
        tempChange -= 100
      }
      if (cid[8][1] >= minus){
        if (cid[8][1] === minus){
          changeDue.textContent = "Status: CLOSED"
         }
        changeDue.textContent += " ONE HUNDRED: \$" + minus;
        change = change - cid[8][1]
        cid[8][1] = cid[8][1] - minus
      } else if (cid[8][1] != 0) {
        changeDue.textContent += " ONE HUNDRED: \$" + cid[8][1]
        change = change - cid[8][1]
        cid[8][1] = 0
        }
        updateRegister()
    } 
    
     if (change >= 20) {
      let tempChange = change
      minus = 0
      while (tempChange >= 20){
        minus += 20
        tempChange -= 20
      }
      console.log("minus is " + minus)
      console.log("Amount in drawer " + cid[7][1])
      console.log(cid[7][1] >= minus)
      
      if (cid[7][1] >= minus){
        if (cid[7][1] === minus){
          changeDue.textContent = "Status: CLOSED"
         }
        changeDue.textContent += " TWENTY: \$" + minus;
        change = change - minus
        cid[7][1] = cid[7][1] - minus
        console.log("change is now " + change)
      }
      else if (cid[7][1] != 0) {
        changeDue.textContent += " TWENTY: \$" + cid[7][1];
        change = change - cid[7][1]
        cid[7][1] = 0
        
      }
      updateRegister()
    } 
    
      if (change >= 10){
        console.log("in tens")
        minus = 0
        let tempChange = change
        while (tempChange >= 10){
          minus += 10
          tempChange -= 10
        }
      console.log("minus is " + minus)
      console.log("Amount in drawer " + cid[6][1])
      console.log("Is funding sufficient:")
      console.log(cid[6][1] >= minus)
      
      if(cid[6][1] >= minus) {
        if (cid[6][1] === minus){
          changeDue.textContent = "Status: CLOSED";
         }
        changeDue.textContent += " TEN: \$" + minus;
        change = change - minus
        cid[6][1] = cid[6][1] - minus
        console.log("change is now " + change)
      } else if (cid[6][1] != 0) {
        changeDue.textContent += " TEN: \$"+ cid[6][1];
        change = change - cid[6][1]
        cid[6][1] = 0
        console.log(change)
      }
      updateRegister()
    }

    if (change >= 5){
      console.log("in fives")
      minus = 0
      let tempChange = change
      while (tempChange >= 5){
        minus += 5
        tempChange -= 5
      }
      if (cid[5][1] >= minus){
        if (cid[5][1] === minus){
          changeDue.textContent = "Status: CLOSED"
         }
        changeDue.textContent += " FIVE: \$" +
       minus;
        change = change - minus
        cid[5][1] = cid[5][1] - minus
        console.log("change is now " + change)
      }
      else if (cid[5][1] != 0){
        changeDue.textContent += " FIVE: \$" + cid[5][1];
        change = change - cid[5][1]
        cid[5][1] = 0
        console.log(change)
      }
       updateRegister()
    }

    if (change >= 1){
      console.log("in ones")
      minus = 0
      let tempChange = change
      while (tempChange >= 1){
        minus += 1
        tempChange -= 1
      }
      if (cid[4][1] >= minus) {
        if (cid[4][1] === minus){
          changeDue.textContent = "Status: CLOSED";
         }
        changeDue.textContent += " ONE: \$" + minus;
        change = change - minus
        cid[4][1] = cid[4][1] - minus
        console.log("change is now: " + change)
      }
      else if (cid[4][1] != 0) {
        changeDue.textContent += " ONE: \$" + cid[4][1];
        change = change - cid[4][1]
        cid[4][1] = 0
        console.log(change)
      }
       updateRegister()
    }

    if (change >= 0.25){
      console.log("in 0.25s")
      minus = 0
      let tempChange = change
      while (tempChange >= 0.25){
        minus += 0.25
        tempChange -= 0.25
      }
      console.log(cid[3][1] >= minus)
      if (cid[3][1] >= minus) {
        if (cid[3][1] === minus){
          changeDue.textContent = "Status: CLOSED";
        }
        changeDue.textContent += " QUARTER: \$" + minus;
        change = change - minus
        cid[3][1] = cid[3][1] - minus
        console.log("change is now " + change)
      } 
      else if (cid[3][1] != 0){
        changeDue.textContent += " QUARTER: \$" + cid[3][1];
        change = change - cid[3][1]
        cid[3][1] = 0
        console.log(change)
      }
       updateRegister()
    }

    if (change >= 0.1){
      console.log("in 0.1s")
      minus = 0
      let tempChange = change
      while (tempChange >= 0.1){
        minus += 0.1
        tempChange -= 0.1
      }
      if (cid[2][1] >= minus){
        if (cid[2][1] === minus){
          changeDue.textContent = "Status: CLOSED"
         }
        changeDue.textContent += " DIME: \$" + minus;
        change = change - minus
        cid[2][1] = cid[2][1] - minus
        console.log("change is now " + change)
      } else if (cid[2][1] != 0) {
        changeDue.textContent += " DIME: \$" + cid[2][1];
        change = change - cid[2][1]
        cid[2][1] = 0
        console.log(change)
      }
       updateRegister()
    }
    

    if (change >= 0.05){
      console.log("in 0.05s")
      //Find out how much nickel is needed to cover the change and set it to variable minus (number of nickel needed to be taken/subtracted from drawer). use a temp change variable to avoid changing the actual value of change.
      minus = 0
      let tempChange = change
      while (tempChange >= 0.05){
        minus += 0.05
        tempChange -= 0.05
      }
      //is nickels available in drawer sufficient to cover portion of the change below a dime? if it is take as needed and move on to calculate lower currency
    if (cid[1][1] >= minus) {
      if (cid[1][1] === change){
          changeDue.textContent = "Status: CLOSED";
         }
      changeDue.textContent += " NICKEL: \$" + minus;
      change = change - minus
      cid[1][1] = cid[1][1] - minus
      console.log("change is now " + change)
    } else if (cid[1][1] != 0){
      //nickels in drawer not sufficient to cover portion of the change below a dime and equal to a nickel
      //so give customer entire nickel in the drawer and continue to find a lower currency to replace change left
        changeDue.textContent = " NICKEL: \$" + cid[1][1];
        change = change - cid[1][1]
        cid[1][1] = 0
        console.log(change)
      }
       updateRegister()
    }

     if (change >= 0.01){
       console.log("in 0.01s")
      // minus = 0
      // let tempChange = change
      // while (tempChange >= 0.01){
      //   minus += 0.01
      //   tempChange -= 0.01
      // }
      
      
       if (cid[0][1] >= change){
         if (cid[0][1] === change){
          changeDue.textContent = "Status: CLOSED";
         }
        changeDue.textContent += " PENNY: \$" + roundUpToDecimals(change);
        cid[0][1] = cid[0][1] - change
        change = 0
        console.log("change is now " + change)
      } else {
        //Since there are no lower currencies to divide up and make up for insufficient pennies, inform the customer that there's no sufficient funds.
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
      }
      updateRegister()
    }

  }
}

const updateRegister = () => {
  drawerDiv.innerHTML = ""
  priceDiv.innerHTML = ""
  cid.forEach(([name, amount]) => {
    drawerDiv.innerHTML += `<p>${name}: \$${roundUpToDecimals(amount)}</p>`
})
priceDiv.innerHTML += `<p>Total: \$${price}</p>`

}

window.onload = updateRegister()


purchaseBtn.addEventListener("click", () => {
  const cash = document.getElementById("cash")
  console.log(cash.value)
  checkChange(cash.value)
})
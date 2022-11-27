function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputText  = inputField.value;
    const inputAmount = parseFloat(inputText);

    inputField.value = '';
    return inputAmount;
}

function updateTotal (updateId, newDepositAmount) {
    const depositTotal = document.getElementById(updateId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // Previous Amount + New Input Amount Add
    depositTotal.innerText = previousDepositAmount + newDepositAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)
    return balanceTotalAmount
   
}

function updateBalance(Amount,isAdd){
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalAmount = getCurrentBalance()
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + Amount;
    }else{
        balanceTotal.innerText = balanceTotalAmount - Amount;
    }
}


 /**/

document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInput('deposit-input')
    if(newDepositAmount > 0){
        updateTotal('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount,true)
    }
})


document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInputAmount = getInput('withdraw-input')
    const currentBalance      = getCurrentBalance()
    if(withdrawInputAmount > 0 && withdrawInputAmount < currentBalance){
        updateTotal('withdraw-total',withdrawInputAmount);
        updateBalance(withdrawInputAmount,false)
    }

    if(withdrawInputAmount > currentBalance){
        const error = document.getElementById('error')
        error.innerText = 'Very Funny be Realistic'
    }
})
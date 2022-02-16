function calculate(exp){
    const expenses = document.getElementById(exp + '-cost');
    const expensesAmount = expenses.value;
    expenses.value = '';
    return expensesAmount;
}
document.getElementById('calculate-button').addEventListener('click', function(){
    const calculateFoodAmount = calculate('food');
    const calculateRentAmount = calculate('rent');
    const calculateClothAmount = calculate('cloth');

    if(calculateFoodAmount == '' && calculateRentAmount == '' && calculateClothAmount == ''){
        document.getElementById('requires-sms1').style.display = 'block';
        document.getElementById('requires-sms2').style.display = 'block';
        document.getElementById('requires-sms3').style.display = 'block';
    }
    else if(calculateFoodAmount != '' && calculateRentAmount == '' && calculateClothAmount == ''){
        document.getElementById('requires-sms1').style.display = 'none';
        document.getElementById('requires-sms2').style.display = 'block';
        document.getElementById('requires-sms3').style.display = 'block';
    }
    else if(calculateFoodAmount == '' && calculateRentAmount == ''){
        document.getElementById('requires-sms1').style.display = 'block';
        document.getElementById('requires-sms2').style.display = 'block';
        document.getElementById('requires-sms3').style.display = 'none';
    }
    else if(calculateFoodAmount == '' && calculateClothAmount == ''){
        document.getElementById('requires-sms1').style.display = 'block';
        document.getElementById('requires-sms2').style.display = 'none';
        document.getElementById('requires-sms3').style.display = 'block';
    }
    else{
        const totalExpenses = document.getElementById('total-expenses');
        const calculateExpenses = parseFloat(calculateFoodAmount) + parseFloat(calculateRentAmount) + parseFloat(calculateClothAmount);
        totalExpenses.innerText = calculateExpenses;
        const incomeInput = document.getElementById('income');
        const incomeAmount = incomeInput.value;
        incomeInput.value = '';
        if(incomeAmount == ''){
            document.getElementById('requires-sms').style.display = 'block';
        }
        else{
            const balance = document.getElementById('balance');
            const balanceAmount = parseFloat(incomeAmount) - calculateExpenses;
            if(incomeAmount < calculateExpenses){
                alert('Balance in not enough');
            }
            else{
                balance.innerText = balanceAmount;
            }
            
        }

    }

})
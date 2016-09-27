
							//__________________ DATA _________________ \\

var paymentType = 
[ 
	{ period: "Monthly", months: 12 }, 
	{ period: "Bi-Monthly", months: 6 }, 
];

							//_______________ FUNCTIONS ________________\\

// here we select the ID of the option list we want to populate
var paymentSelector = document.getElementById('paymentPeriod');

// set a loop so it goes through the list of the array
for (var i = 0; i < paymentType.length; i++)
{
	var option = document.createElement('option');
	option.innerHTML = paymentType[i].period;
    option.value = paymentType[i].months;
    paymentSelector.appendChild(option);  
}



function mortgageCalc() 
{
  var interestRate = document.getElementById('interestRateInput').value;
  var loanBalance = document.getElementById('loanBalanceInput').value;
  var loanTerm = document.getElementById('termInYearsInput').value;
  var periodIndex = document.getElementById('paymentPeriod').selectedIndex;
  var periodType = paymentType[periodIndex].period
  var period = paymentType[periodIndex].months
    // monthly interest rate       
  var monthlyInterestRate = (interestRate / 100) / period;          
    // number of payments
  var numberOfPayments = loanTerm * period;
    // compounded interest rate
  var compoundedInterestRate = Math.pow( (1 + monthlyInterestRate), numberOfPayments );  
    // interest quotient
  var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
    // final calculation
  var monthlyPayment = loanBalance * interestQuotient;

  document.getElementById('results').innerHTML = "Your monthly payment is $" + monthlyPayment.toFixed(2);
}




var paymentType = 
[ 
	[ "monthly", 12 ], 
	[ "bi-monthly", 6 ], 
];

paymentType.forEach( function(valueIndex)
{
        $('#paymentPeriod').append($("<option/>").text(valueIndex[0]).val(valueIndex[1]));
});


$(document).ready(function()
{
	$('#onclick').click( function()
    	{
		var interestRate = $("#interestRateInput").val();
		var loanBalance = $('#loanBalanceInput').val();
		var loanTerm = $('#termInYearsInput').val();
		var periodIndex = $('#paymentPeriod option:selected').text();        
		var period = $('#paymentPeriod option:selected').val();

		var monthlyInterestRate = (interestRate / 100) / period;          
			var numberOfPayments = loanTerm * period;
			var compoundedInterestRate = Math.pow( (1 + monthlyInterestRate), numberOfPayments );  
			var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
			var monthlyPayment = loanBalance * interestQuotient;

		$('#results').text("Your " + periodIndex + " payment is $" + monthlyPayment.toFixed(2) + ". Thank you!");
    	});

});

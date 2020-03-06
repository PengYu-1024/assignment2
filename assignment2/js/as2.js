var formErrors = '';
var postRegex = /^[A-Za-z][0-9][A-Za-z]\s?[0-9][A-Za-z][0-9]$/;
var emptyRegex = /^$/; // would match empty strings
var anythingRegex = /^.+$/; // would match one or more characters
var phoneRegex = /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
var itemRegex = /^[0-9]*$/;


function formSubmit(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var postcode = document.getElementById('postcode').value;
	var phone = document.getElementById('phone').value;
	var address = document.getElementById('address').value;
	var city = document.getElementById('city').value;
	var province = document.getElementById('province').value;
	var apple = document.getElementById('apple').value;
	var banana = document.getElementById('banana').value;
	var orange = document .getElementById('orange').value;
	var days = document.getElementById('days').value;
	

	
	name = name.trim();
    email = email.trim();
    postcode = postcode.trim();
	phone = phone.trim();
	address = address.trim();
	city = city.trim();
	province = province.trim();
	days = days.trim();
	
	formErrors = ''; 
	
	validateInputRegex(name, anythingRegex, 'Name is required');
    validateInputRegex(email, anythingRegex, 'Email is required');
    validateInputRegex(postcode, postRegex, 'Postcode should be in correct format');
	validateInputRegex(phone, phoneRegex, 'Phone should be in correct format');
	validateInputRegex(address, anythingRegex, 'Address is required');
	validateInputRegex(city, anythingRegex, 'City is required');
	validateInputRegex(province, anythingRegex, 'Province is required');
	validateInputRegex(apple, itemRegex, 'apple should be a number');
	validateInputRegex(banana, itemRegex, 'banana should be a number');
	validateInputRegex(orange, itemRegex, 'orange should be a number');
	validateInputRegex(days, anythingRegex, 'Please select delivery days')
	
	apple = parseInt(apple);
	banana = parseInt(banana);
	orange = parseInt(orange);
	
	var total = apple + banana + orange;
	if(total < 1) {
		formErrors += 'Please buy something'
	}
	
	
	 if(formErrors){                 
        document.getElementById('errors').innerHTML = formErrors;
    }
    else{
        apple = document.getElementById('apple').value;
		banana = document.getElementById('banana').value;
	    orange = document .getElementById('orange').value;
	
	
	
	
	
	var aPriceTotal = apple * 1;
	var bPriceTotal = banana * 1;
	var oPriceTotal = orange * 2;
	var shippingFee;

	// shipping fee only (40, 30, ...)
	// shippingFee
	if(days == "1 DAY"){
		shippingFee = 40;		
	}
	
	else if(days == "2 DAYS"){
		shippingFee = 30;
	}
	
	else if(days == "3 DAYS"){
		shippingFee = 20;
	}
	
	else if(days == "4 DAYS"){
		shippingFee = 10;
	}
	
	// use if else to calculate tax
	var priceBeforeTax = aPriceTotal + bPriceTotal + oPriceTotal + shippingFee;
	var tax;
	var taxrate;
	if (province == "ONTARIO") {
		taxrate = 13;
	}
	
	if (province == "QC") {
		taxrate = 15;
	}
	
	if (province == "NS") {
		taxrate = 15;
	}
	
	if (province == "NB") {
		taxrate = 15;
	}
	
	if (province == "MB") {
		taxrate = 13;
	}
	
	if (province == "BC") {
		taxrate = 12;
	}
	
	if (province == "PE") {
		taxrate = 15;
	}
	
	if (province == "SK") {
		taxrate = 11;
	}
	
	if (province == "AL") {
		taxrate = 5;
	}
	
	if (province == "NL") {
		taxrate = 15;
	}
	
	if (province == "NT") {
		taxrate = 5;
	}
	
	if (province == "YT") {
		taxrate = 5;
	}
	
	if (province == "NU") {
		taxrate = 5;
	}
	
	tax = taxrate / 100 * priceBeforeTax;
	var total = tax + priceBeforeTax;
		
	
	document.getElementById('errors').innerHTML = '';
        var message = `
            Name: ${name} <br>
            Email: ${email} <br>
            Postcode: ${postcode} <br>
			Phone: ${phone} <br>
			Address: ${address} <br>
			City: ${city} <br>
			Province: ${province} <br>
			${apple} Apple@1$: ${aPriceTotal} <br>
			${banana} Banana@1$: ${bPriceTotal} <br>
			${orange} Orange@2$: ${oPriceTotal} <br>
			Shipping Charges: ${shippingFee}<br>
			Sub total: ${priceBeforeTax} <br>
			Taxes@${taxrate}%:${tax}<br>
			Total:${total} <br>
        `;
		
		document.getElementById('formResult').innerHTML = message;
    }
	return false;
}

function validateInputRegex(userInput, simpleRegex, errorMessage){
	
    if(!simpleRegex.test(userInput)){
        formErrors += `${errorMessage} <br>`;
    }
}
//**********USE LINTER WHILE WRITING JS ON THIS PRJECT************//

//NEED TO USE/ DOWNLOAD "ES LINT"******************

//SETTING UP CLICK EVENT
let button = document.getElementById('convert-button');

button.addEventListener('click', function(){

//***********NEED TO ADD ENTER KEYPRESS EVENT*******************



  //DISPLAYING CURRENCIES

  async function getData() {

    const response = await fetch('http://data.fixer.io/api/latest?access_key=6dbe6e42afe0aed845647ba509edc054&symbols=AUD,CAD,CNY,GBP,JPY,USD&format=1');

    const data = await response.json();

    let currency = document.getElementById('base-currency').value;
    let rates = Object.values(data.rates);
    let currencyType = Object.keys(data.rates);
    let amount = document.getElementById('amount-converted').value;


  if (currency === 'Euro (EUR)') {
    for (let i = 0; i <= 5; i++) {
      document.getElementById(`currency${i}`).style.display = 'block';
      document.getElementById(`display-amount${i}`).innerText = '$' + Math.round(rates[i] * amount * 100) / 100;
      document.getElementById(`display-currency-type${i}`).innerText = currencyType[i];
    }
  }else if (currency !== 'Euro (EUR)') {

    //CREATING NEW currencyType ARRAY, WITH BASE CURRENCY REMOVED AND EURO INSERTED
    let firstIndex = currency.indexOf('(');
    let abbreviation = currency.slice(firstIndex + 1, firstIndex + 4);

    //SHOULD BE ABLE TO USE THIS INDEX TO RREPLACE RATE IN ARRAY ALSO***********
    let arrayIndex = currencyType.indexOf(abbreviation);
    currencyType.splice(arrayIndex, 1, 'EUR');
    //currencyType.sort();


    //CREATING NEW rates ARRAY
    let newBaseAmount = rates[arrayIndex];
    let newRates = [];
    rates.splice(arrayIndex, 1, 1);

    rates.forEach(cur => newRates.push(cur / newBaseAmount));
    console.log(newRates);
    for (let i = 0; i <= 5; i++) {
      document.getElementById(`currency${i}`).style.display = 'block';
      document.getElementById(`display-amount${i}`).innerText = '$' + Math.round(newRates[i] * amount * 100) / 100;
      document.getElementById(`display-currency-type${i}`).innerText = currencyType[i];
    }
    //NEED TO DO MATH TO THE RATES ARRAY AND TO SELECTED CURRENCY
  }
}

  getData();


});






//RESET BUTTON

let buttonReset = document.getElementById('reset-button');

buttonReset.addEventListener('click', function(){

  for (let i = 0; i <= 5; i++) {
    document.getElementById('currency' + [i]).style.display = 'none';
    document.getElementById('amount-converted').value = '';

  }

});

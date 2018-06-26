//**********USE LINTER WHILE WRITING JS ON THIS PRJECT************//

//NEED TO USE/ DOWNLOAD "ES LINT"******************

//SETTING UP CLICK EVENT
let button = document.getElementById('convert-button');

button.addEventListener('click', function(){





  //DISPLAYING CURRENCIES
  
  async function getData() {

    const response = await fetch('http://data.fixer.io/api/latest?access_key=6dbe6e42afe0aed845647ba509edc054&symbols=AUD,CAD,CNY,GBP,JPY,USD&format=1');

    const data = await response.json();

    let currency = document.getElementById('base-currency').value;
    let rates = Object.values(data.rates);
    let currencyType = Object.keys(data.rates);
    let amount = document.getElementById('amount-converted').value;
    console.log(amount);
    console.log(currency);
    console.log(rates);

    for (let i = 0; i <= 5; i++) {
      if (currency === 'Euro') {
        document.getElementById(`currency${i}`).style.display = 'block';
        document.getElementById(`display-amount${i}`).innerText = Math.round(rates[i] * amount * 100) / 100;
        document.getElementById(`display-currency-type${i}`).innerText = currencyType[i];
      }
    }

  }

  getData();


});






//RESET BUTTON

let buttonReset = document.getElementById('reset-button');

buttonReset.addEventListener('click', function(){

  for (let i = 1; i <= 6; i++) {
    document.getElementById('currency' + [i]).style.display = 'none';
  }

});

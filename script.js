//**********USE LINTER WHILE WRITING JS ON THIS PRJECT************//

//NEED TO USE/ DOWNLOAD "ES LINT"******************

//SETTING UP CLICK EVENT
let button = document.getElementById('convert-button');

button.addEventListener('click', function(){

  for (let i = 1; i <= 6; i++) {
    document.getElementById('currency' + [i]).style.display = 'block';
  }

  //DISPLAYING CURRENCIES

  //const CURRENCIES = ['U. S. Dollar', 'Euro', 'British Pound', 'Japanese Yen', 'Swiss Franc', 'Canadian Dollar', 'Australian Dollar'];
  //let url = 'data.fixer.io/api/latest?access_key=6dbe6e42afe0aed845647ba509edc054&symbols=AUD,CAD,CNY,GBP,JPY,USD&format=1';
});


//RESET BUTTON

let buttonReset = document.getElementById('reset-button');

buttonReset.addEventListener('click', function(){

  for (let i = 1; i <= 6; i++) {
    document.getElementById('currency' + [i]).style.display = 'none';
  }

});

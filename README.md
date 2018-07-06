# Currency Converter

## What is a Currency Converter?
A currency converter takes in a base currency and will then show you how it converts to other world currencies. For instance, if you are using U.S. Dollars as your base currency, and are interested in how that may convert to Euros for an upcoming vacation, you would type in the amount of USD that you have and the converter will display the amount of Euros your USD are equal to.


## Goals for the Currency Converter
1. Design a responsive currency conversion application.
2. User should be able to choose a base currency from one of the seven most used currencies in the world and convert to the remaining six currencies.

### Problems I Encountered and How I Solved Them.
1. Problem: Since the Euro is the default base currency, if another currency was selected I needed to display the Euro, and
it's current rate, but display in alphabetical order. This means I need to put the Euro abbreviation and it's rate in
order in their respective arrays.

   Solution for abbreviation: The abbreviations are stored in an array called "currencyType". I first
   found the index of the new base currency, then used splice to remove the selected currency and add in the Euro
   abbreviation (EUR). Next, I sorted the array to put them in alphabetical order.

   Solution for rates: The rates are stored in an array called "rates". I used the same index that was found to remove
   the selected base currency, to remove from the rates array and replace with 1 (because the Euro was the original base currency).
   Next, I divided all the rates by the amount removed to complete the conversion. Then I found the index of 'EUR' in the sorted
   "currencyType" array and spliced the rate into the same position.

2. Problem: Need to stack the displayed currencies at 768px, in order to make responsive on smaller screens.

    Solution: I used flexbox to display all currencies as one single column.

💱 Currency Converter Web App

A simple and user-friendly currency converter built with **HTML**, **CSS**, and **JavaScript**, powered by the [CurrencyAPI](https://currencyapi.com/). This tool allows users to convert between currencies in real time with live exchange rates and dynamic country flags.

Link of API used in this project: https://api.currencyapi.com/v3/latest?apikey=cur_live_R7PtG0Q4LtosFdF670JzAskQA2gy9zYg9tQkBVCJ

Website rom where i pick this API: https://app.currencyapi.com/dashboard

📁 Project Structure

**File 1 - `codes.js`
This file contains a **JavaScript object** that maps **currency codes (like USD, PKR, EUR)** to their respective **country codes** (like US, PK, FR).  
It is used to:
- Dynamically generate the `<select>` dropdown options for currency selection.
- Display the correct country flag using [FlagsAPI](https://flagsapi.com/).

> Example: `"USD": "US"` → used to show the 🇺🇸 flag when USD is selected.


**File 2 - `newcode.js`
This is the **main logic file** responsible for:
- Populating the currency dropdowns using data from `codes.js`.
- Handling user input and button click events.
- Fetching real-time exchange rates using the **CurrencyAPI**.
- Dynamically updating the UI to display the converted amount and flags.

Key Functionalities:
- Validates input amount (defaults to 1 if empty or less than 1).
- Constructs the correct API URL based on selected currencies.
- Fetches and parses JSON data to extract the exchange rate.
- Calculates the converted value and displays it on the page.

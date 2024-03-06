async function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error);
      }
  
      const conversionRate = data.rates[toCurrency];
      if (!conversionRate) {
        throw new Error(`Conversion rate not available for ${toCurrency}`);
      }
  
      const result = amount * conversionRate;
      document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
      document.getElementById('result').innerText = `Error: ${error.message}`;
    }
  }
  
  
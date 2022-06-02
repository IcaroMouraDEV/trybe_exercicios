const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCoins = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      const data = response.data;
      const container = document.getElementById('coins');
      console.log(data)
      data
        .filter(coin => parseInt(coin.rank) <= 10)
        .forEach(coin => {
          const result = `${coin.name} (${coin.symbol}): ${Math.round(coin.marketCapUsd)}$`;
          const li = document.createElement('li');
          li.innerHTML = result;
          container.append(li);
        })
      
    })
    .catch(error => console.log(error));
};

window.onload = () => fetchCoins();

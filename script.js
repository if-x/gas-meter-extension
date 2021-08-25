function loadGas() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const data = JSON.parse(this.response).result;
    document.getElementById("safeGasPrice").innerHTML = data.SafeGasPrice;
    document.getElementById("proposeGasPrice").innerHTML = data.ProposeGasPrice;
    document.getElementById("fastGasPrice").innerHTML = data.FastGasPrice;
  };
  // Get you Etherscan API Key
  // https://docs.etherscan.io/getting-started/viewing-api-usage-statistics
  xhttp.open(
    "GET",
    "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YOUR_ETHERSCAN_API_KEY"
  );
  xhttp.send();
}

document.addEventListener("DOMContentLoaded", () => {
  loadGas();
});

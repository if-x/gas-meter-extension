# Ethereum Gas Meter Chrome Extension

A simple Chrome Extension to view Ethereum gas price using Etherscan API.


## Step 1: Obtain a Etherscan API key

Register your account on Etherscan and generate an API key.

**Official document**

https://docs.etherscan.io/getting-started/viewing-api-usage-statistics


## Step 2: Put your API key in the script.js

- Open `script.js` in this folder
- Find this line: ``"https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YOUR_ETHERSCAN_API_KEY"``.
- Replace "YOUR_ETHERSCAN_API_KEY" to your key. Simple like that.


## Step 3: Install it in your Chrome

- Open [chrome://extensions/](chrome://extensions/)
- Check **"Developer mode"** on the top right corner is toggled on
- Click **"Load unpacked"** below "Extensions` on the top left
- Select this folder


## Step 4: Share with people who needs it too

The reason I created this is because, at the moment, CoinGecko gas meter is very unreliable. Etherscan has a very good meter but I'm not good at keeping tabs open.

Therefore, this plugin! 

If you have the same trouble, feel free to checkout and use it. Or extend it or change the style.

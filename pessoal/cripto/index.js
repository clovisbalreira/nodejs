const axios = require("axios");
const crypto = require("crypto");
const BUY_PRICE = 65000;
const SELL_PRICE = 70000;
const API_URL = "https://testnet.binance.vision";//https://api.binance.com
const SYMBOL = "BTCUSDT";
const QUANTITY = "0.001";
//const API_KEY = "XXX";//aprenda a criar as chaves: https://www.youtube.com/watch?v=-6bF6a6ecIs
const API_KEY = "AuK6TCLYj042vPR2o4zUSBsn0kladlTGtOqRuMYvtaNW3xXt7lsjOVmWWLlp0VTF";//aprenda a criar as chaves: https://www.youtube.com/watch?v=-6bF6a6ecIs
//const SECRET_KEY = "XXX";
const SECRET_KEY = "CCAcMFFubf9KaDzzbcpKSsOSP0hBQ8Wmm9vmlItj0l4LxzWhPEIwSLn91GO2elkW";
let valorAplicado = 100000
let cardeira = { valorInicial : valorAplicado, valor : valorAplicado, bitcoinComprado : 0, bitcoinVendido : 0}

function calcSMA(data) {
    const closes = data.map(candle => parseFloat(candle[4]));
    const sum = closes.reduce((a, b) => a + b);
    return sum / data.length;
}

async function start() {
    const { data } = await axios.get(API_URL + "/api/v3/klines?limit=21&interval=15m&symbol=" + SYMBOL);
    const candle = data[data.length - 1];
    const price = parseFloat(candle[4]);

    console.clear();
    console.log("Price: " + price);

    const sma = calcSMA(data);
    /* console.log("SMA: " + sma);
    console.log("Is Opened? " + isOpened);
    console.log("compra " + BUY_PRICE)
    console.log("venda " + SELL_PRICE)
    console.log("Valor " + cardeira.valor
    ); */
    console.log(`${price} > ${SELL_PRICE} && ${price} < ${cardeira.bitcoinComprado}`)

    if (price > BUY_PRICE && cardeira.valor > price) {
        cardeira.valor -= price
        cardeira.bitcoinComprado += price
        isOpened = true;
        console.log('comprar')
        newOrder(SYMBOL, QUANTITY, "BUY");
    }else if (price > SELL_PRICE && cardeira.bitcoinComprado > price) {
        console.log('vender')
        cardeira.bitcoinComprado -= price
        cardeira.bitcoinVendido = price
        cardeira.valor += price
        newOrder(SYMBOL, QUANTITY, "SELL");
        isOpened = false;
    }
    console.log(`Cardeira:`)
    console.log(`Valor Inicial: ${cardeira.valorInicial}`)
    console.log(`Valor: ${cardeira.valor}`)
    console.log(`Porcentagem: ${cardeira.valor / cardeira.valorInicial}%`)
    console.log(`Comprado: ${cardeira.bitcoinComprado}`)
    console.log(`Vendido: ${cardeira.bitcoinVendido}`)
    
}

async function newOrder(symbol, quantity, side) {
    const order = { symbol, quantity, side };
    order.type = "MARKET";
    order.timestamp = Date.now();

    const signature = crypto
        .createHmac("sha256", SECRET_KEY)
        .update(new URLSearchParams(order).toString())
        .digest("hex");

    order.signature = signature;

    try {
        const { data } = await axios.post(
            API_URL + "/api/v3/order",
            new URLSearchParams(order).toString(),
            {
                headers: { "X-MBX-APIKEY": API_KEY }
            });

        //console.log(data);
    } catch (err) {
        //para erros e soluções com essa API, consulte https://www.luiztools.com.br/post/erros-comuns-com-as-apis-da-binance/
        console.error(err.response.data);
    }
}

setInterval(start, 3000);

start();

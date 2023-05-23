import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyRow } from "./CurrencyRow";
import axios from "axios";
import Diamond from "./map2.jpg";
function App() {
  const [currencyOption, setCurrencyOption] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [calculatedAmount, setCalculatedAmount] = useState();
  useEffect(() => {
    getRates();
    getCurrencyName();
  }, [amount]);
  const getRates = async () => {
    await axios
      .get(
        `https://v6.exchangerate-api.com/v6/a40eb8cbdd36d7834594b125/pair/${fromCurrency}/${toCurrency}/${amount}`
      )
      .then((res) => {
        setCalculatedAmount(res.data.conversion_result);
      });
  };
  const getCurrencyName = async () => {
    await axios
      .get(
        `https://v6.exchangerate-api.com/v6/a40eb8cbdd36d7834594b125/latest/USD`
      )
      .then((res) => {
        setCurrencyOption(Object.keys(res.data.conversion_rates));
      });
  };
  return (
    <div className="App">
      <img src={Diamond} alt="" />
      <div className="newApp">
        <h1>Convert</h1>
        <CurrencyRow
          selectedCurrency={fromCurrency}
          currencyOption={currencyOption}
          inputEvent={(e) => setAmount(e.target.value)}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
        <div className="equals">=</div>
        <CurrencyRow
          selectedCurrency={toCurrency}
          currencyOption={currencyOption}
          value={calculatedAmount}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
export const CurrencyRow = (props) => {
  const { currencyOption, selectedCurrency,onChangeCurrency,inputEvent,value } = props;
  return (
    <div>
      <input type="number" className="input"  onChange={inputEvent} value={value}/>
      <select  value={selectedCurrency}  onChange={onChangeCurrency}>
        {currencyOption.map((option,i) => ( 
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};



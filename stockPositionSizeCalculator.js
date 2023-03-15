function positionSize(tradeType, entryPrice, stoploss, capital, riskPercentage) {

  function validPosition(entryPrice, stoploss, capital, riskPercentage){
    maxCapitalLost = capital * riskPercentage/100;
    priceDifference = entryPrice - stoploss;
    result = Math.abs(Math.round(maxCapitalLost / priceDifference));
    return result;
  }

//   validLongPosition(10.12, 10.05, 10000, 1.6)

  if (tradeType === 'LONG') {
    if (stoploss > entryPrice) {
      return false;
    } else {
      return validPosition(entryPrice, stoploss, capital, riskPercentage);
    }
  } else if (tradeType === 'SHORT') {
    if (stoploss < entryPrice) {
      return false;
    } else {
      return validPosition(entryPrice, stoploss, capital, riskPercentage);
    }
  } else {
    return false;
  }
}

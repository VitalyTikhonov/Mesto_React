export function getAsNumberAndLastDigit(numberArg) {
  let number;
  let string;
  if (typeof numberArg === 'number') {
    number = numberArg;
    string = numberArg.toString();
  } else {
    number = Number(numberArg);
    string = numberArg;
  }
  const { length } = string;
  const lastDigitStr = string.charAt(length - 1);
  const lastDigitNum = Number(lastDigitStr);
  const lastTwoDigitsStr = string.slice(length - 2);
  const lastTwoDigitsNum = Number(lastTwoDigitsStr);
  const lastButOneDigitStr = string.slice(length - 2, length - 1);
  const lastButOneDigitNum = Number(lastButOneDigitStr);
  const result = {
    number,
    string,
    lastDigitNum,
    lastTwoDigitsNum,
    lastButOneDigitNum,
  };
  return result;
}

export const numberWithCommas = x => x
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const withDollarSign = number => {
  return `$${number}`;
};

const fixed = x => x.toFixed(2);

export const numberWithDollarSign = x => withDollarSign(numberWithCommas(fixed(Number(x))));

numberWithDollarSign(300.10);
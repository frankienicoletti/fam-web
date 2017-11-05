export const numberWithCommas = x => x
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const withDollarSign = number => {
  return `$${number}`;
};

const fixed = x => x.toFixed(2);

export const numberWithDollarSign = x => {
  console.log('x :\n', x);
  return withDollarSign(numberWithCommas(fixed(Number(x))));
};

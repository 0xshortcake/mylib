export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('sum boop');
  }
  return a + b;
};

export const subtract = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('subtract boop');
  }
  return a - b;
};

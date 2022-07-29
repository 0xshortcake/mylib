import { Erc20__factory } from './contracts';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('sum boop');
  }
  console.log(Erc20__factory);
  return a + b;
};

export const subtract = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('subtract boop');
  }
  return a - b;
};

export const divide = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('subtract boop');
  }
  return a - b;
};

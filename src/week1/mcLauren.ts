export type HigherOrderDerivative = (order: number) => number;

const factorial = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// sin関数の原点x = 0での高階導関数
export const sinHigherOrderDerivative: HigherOrderDerivative = (order) => {
  switch (order % 4) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 0;
    case 3:
      return -1;
  }
  return 0;
};

// cos関数の原点x = 0での高階導関数
export const cosHigherOrderDerivative: HigherOrderDerivative = (order) => {
  switch (order % 4) {
    case 0:
      return 1;
    case 1:
      return 0;
    case 2:
      return -1;
    case 3:
      return 0;
  }
  return 0;
};

// log関数のx = 1での高階導関数
export const log1pHigherOrderDerivative: HigherOrderDerivative = (order) => {
  if (order === 0) {
    return 0;
  }
  return (-1) ** (order - 1) * factorial(order - 1);
};

export const calcMcLaurenSeries = (
  higherOrderDerivative: HigherOrderDerivative,
  maxOrder: number,
  x: number
) => {
  let sum = 0;
  for (let i = 0; i < maxOrder; i++) {
    sum += (higherOrderDerivative(i) * x ** i) / factorial(i);
  }
  return sum;
};

// log(1+x)関数
// 打ち消しあう階乗があるため、分離するとオーバーフローで死ぬ
export const calcLog1pMcLaurenSeries = (maxOrder: number, x: number) => {
  let sum = 0;
  for (let i = 0; i < maxOrder; i++) {
    if (i == 0) continue;
    sum += ((-1) ** (i - 1) / i) * x ** i;
  }
  return sum;
};

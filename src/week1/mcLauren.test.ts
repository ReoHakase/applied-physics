import { expect, test, describe } from "bun:test";
import {
  sinHigherOrderDerivative,
  cosHigherOrderDerivative,
  expHigherOrderDerivative,
  calcMcLaurenSeries,
  calcLog1pMcLaurenSeries,
} from "./mcLauren";

describe("sin関数のマクローリン展開", () => {
  const MAX_ORDER = 50;
  // -2πから2πまでの範囲でテスト, 1/12π刻み
  const values = Array.from({ length: 17 }, (_, i) => ((i - 8) * Math.PI) / 12);
  values.forEach((x) => {
    test(`x = ${x}`, () => {
      const solution = calcMcLaurenSeries(
        sinHigherOrderDerivative,
        MAX_ORDER,
        x
      );
      const actual = Math.sin(x);
      expect(solution).toBeCloseTo(actual);
    });
  });
});

describe("cos関数のマクローリン展開", () => {
  const MAX_ORDER = 50;
  // -2πから2πまでの範囲でテスト, 1/12π刻み
  const values = Array.from({ length: 17 }, (_, i) => ((i - 8) * Math.PI) / 12);
  values.forEach((x) => {
    test(`x = ${x}`, () => {
      const solution = calcMcLaurenSeries(
        cosHigherOrderDerivative,
        MAX_ORDER,
        x
      );
      const actual = Math.cos(x);
      expect(solution).toBeCloseTo(actual);
    });
  });
});

describe("exp関数のマクローリン展開", () => {
  const MAX_ORDER = 50;
  const values = Array.from({ length: 17 }, (_, i) => (i - 8) / 2);
  values.forEach((x) => {
    test(`x = ${x}`, () => {
      const solution = calcMcLaurenSeries(
        expHigherOrderDerivative,
        MAX_ORDER,
        x
      );
      const actual = Math.exp(x);
      expect(solution).toBeCloseTo(actual);
    });
  });
});

describe("log(1+x)関数のマクローリン展開", () => {
  const MAX_ORDER = 100;
  // -1 < x < 1までの範囲でテスト, 大体1/12刻み
  const values = Array.from({ length: 25 }, (_, i) => ((i - 12) / 12) * 0.95);
  values.forEach((x) => {
    test(`x = ${x}`, () => {
      const solution = calcLog1pMcLaurenSeries(MAX_ORDER, x);
      const actual = Math.log1p(x);
      expect(solution).toBeCloseTo(actual);
    });
  });
});

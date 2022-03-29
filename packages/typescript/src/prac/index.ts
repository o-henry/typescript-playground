/**
 * @desc tuple
 */

const tuple = <T extends unknown[]>( // ( meaning T is an array of any kind of type ).
  ...tuple: T
): T => tuple;

let a = tuple(1, true); // a: [number, boolean]

/**
 * @desc identity
 */

const identity = <T>(n: T): T => n;

/**
 * @desc range
 * from, ..to 까지 수로 구성된 배열 생성
 */

const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

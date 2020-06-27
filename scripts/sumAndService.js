import { seperateNumbers } from './seprateNumbers.js';

export function summary(number = 0) {
  $('#sum').html(`${seperateNumbers(number)} تومان`);
  const service = number * 0.05;
  $('#service').html(`${seperateNumbers(service)} تومان`);
}

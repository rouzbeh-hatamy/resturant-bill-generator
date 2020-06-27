import { summary } from './sumAndService.js';
import { discount } from './discount.js';
import { render } from './render.js';

export function plus() {
  let counter;
  let sum = 0;
  let foodBill = 0;
  $('.fa-plus').on('click', function() {
    counter = sessionStorage.getItem('counter');
    sum = Number(sessionStorage.getItem('sum'));
    foodBill = sessionStorage.getItem('foodbill');
    counter = Number($(this).attr('data-counter'));
    counter += 1;
    sum += Number($(this).attr('value'));
    summary(sum);
    foodBill = counter * Number($(this).attr('value'));
    sessionStorage.setItem('counter', `${counter}`);
    sessionStorage.setItem('sum', `${sum}`);
    sessionStorage.setItem('foodBill', `${foodBill}`);
    discount();
    render(this);
  });
}

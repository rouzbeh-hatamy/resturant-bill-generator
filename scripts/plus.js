import { seperateNumbers } from './seprateNumbers.js';
import { summary } from './sumAndService.js';
import { discount } from './discount.js';

export function plus() {
  let counter;
  let sum = 0;
  let foodBill = 0;
  let code;
  $('.fa-plus').on('click', function() {
    counter = Number($(this).attr('data-counter'));
    counter += 1;
    $(this).attr('data-counter', `${counter}`);
    sum += Number($(this).attr('value'));
    summary(sum);
    $(this)
      .siblings('.fa-minus')
      .css({ opacity: '1', 'pointer-events': 'visible' });
    $(this)
      .siblings('#number')
      .html(`${counter}`);
    foodBill = counter * Number($(this).attr('value'));
    $(this)
      .parent()
      .parent()
      .siblings('#foodBill')
      .html(`${seperateNumbers(foodBill)} تومان`);
    $('.bill').css({
      height: 'auto',
      opacity: '1',
      transform: 'translateY(0px)',
    });

    discount(code);
    sessionStorage.setItem('counter', `${counter}`);
    sessionStorage.setItem('sum', `${sum}`);
    sessionStorage.setItem('foodBill', `${foodBill}`);
    sessionStorage.setItem('code', `${code}`);
    console.log(sessionStorage);
  });
}

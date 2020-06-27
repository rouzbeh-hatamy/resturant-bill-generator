import { summary } from './sumAndService.js';
import { discount } from './discount.js';

export function minus() {
  $('.fa-minus').on('click', function() {
    console.log(sessionStorage);

    let counter = sessionStorage.getItem('counter');
    let sum = sessionStorage.getItem('sum');
    let foodBill = sessionStorage.getItem('foodbill');
    const code = sessionStorage.getItem('code');
    counter -= 1;
    sum -= Number(
      $(this)
        .siblings('.fa-plus')
        .attr('value')
    );
    summary(sum);
    foodBill =
      counter *
      Number(
        $(this)
          .siblings('.fa-plus')
          .attr('value')
      );
    $(this)
      .parent()
      .parent()
      .siblings('#foodBill')
      .html(`${foodBill} تومان`);
    $(this)
      .siblings('#number')
      .html(`${counter}`);
    if (counter <= 0) {
      $(this).css({ opacity: '0', 'pointer-events': 'none' });
      $(this)
        .siblings('#number')
        .html('');
      counter = 0;
      $(this)
        .parent()
        .parent()
        .siblings('#foodBill')
        .html('');
    }
    $(this)
      .siblings('.fa-plus')
      .attr('data-counter', `${counter}`);
    discount(code);
    sessionStorage.setItem('counter', `${counter}`);
    sessionStorage.setItem('sum', `${sum}`);
    sessionStorage.setItem('foodBill', `${foodBill}`);
    sessionStorage.setItem('code', `${code}`);
  });
}

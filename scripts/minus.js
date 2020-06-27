import { summary } from './sumAndService.js';
import { discount } from './discount.js';
import { render } from './render.js';

export function minus() {
  $('.fa-minus').on('click', function() {
    let counter = sessionStorage.getItem('counter');
    let sum = Number(sessionStorage.getItem('sum'));
    let foodBill = sessionStorage.getItem('foodbill');
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
      .siblings('.fa-plus')
      .attr('data-counter', `${counter}`);
    sessionStorage.setItem('counter', `${counter}`);
    sessionStorage.setItem('sum', `${sum}`);
    sessionStorage.setItem('foodBill', `${foodBill}`);
    discount();
    render(this);
  });
}

import { seperateNumbers } from './seprateNumbers.js';

export function render(item) {
  // plus
  let counter = sessionStorage.getItem('counter');
  const foodBill = sessionStorage.getItem('foodBill');
  $(item).attr('data-counter', `${counter}`);
  $(item)
    .siblings('.fa-minus')
    .css({ opacity: '1', 'pointer-events': 'visible' });
  $(item)
    .siblings('#number')
    .html(`${counter}`);
  $(item)
    .parent()
    .parent()
    .siblings('#foodBill')
    .html(`${seperateNumbers(foodBill)} تومان`);
  $('.bill').css({
    height: 'auto',
    opacity: '1',
    transform: 'translateY(0px)',
  });
  // minus
  if (counter <= 0) {
    $(item).css({ opacity: '0', 'pointer-events': 'none' });
    $(item)
      .siblings('#number')
      .html('');
    counter = 0;
    $(item)
      .parent()
      .parent()
      .siblings('#foodBill')
      .html('');
  }
}

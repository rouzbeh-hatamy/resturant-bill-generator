import { seperateNumbers } from './seprateNumbers.js';

export function discount() {
  const codes = { abcd: 10000, efgh: 25000 };
  const sum = Number(sessionStorage.getItem('sum'));
  const code = sessionStorage.getItem('code');
  if (codes[code]) {
    $('.sum-discount').css('visibility', 'visible');
    $('.discount-input').css('background-color', 'rgba(46, 204, 113, 0.18)');
    $('.fa-plus-circle').addClass('fa-trash');
    const all = sum + sum * 0.05;
    const final = all - codes[code];
    $('#sumDiscount').html(codes[code]);
    if (final > 0) {
      $('#finalSum').html(`${seperateNumbers(final)} تومان`);
    } else {
      $('#finalSum').html('0');
    }
  } else if (code === null || code === 'null') {
    $('#sumDiscount').html('0');
    const final = sum + sum * 0.05;

    if (final > 0) {
      $('#finalSum').html(`${seperateNumbers(final)} تومان`);
    } else {
      $('#finalSum').html('0');
    }
  } else {
    $('.discount-input').css('background-color', 'rgba(231, 76, 60, 0.18)');
    $('#discountCode').val('كد اشتباه است');
  }
}

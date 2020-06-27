import { summary } from './sumAndService.js';
import { seperateNumbers } from './seprateNumbers.js';

// preloader
$(window).on('load', function() {
  setTimeout(function() {
    $('.loader').fadeOut();
    $('.preloader').addClass('complete');
  }, 4800);
});
$(document).ready(function() {
  // globals
  let sum = 0;
  let counter;
  let foodBill = 0;
  let code;
  // plus icon click

  // minus btn
  $('.fa-minus').on('click', function() {
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
  });
  // discount

  // discount input
  $('.fa-plus-circle').on('click', function() {
    if ($('.fa-plus-circle').hasClass('fa-trash')) {
      code = undefined;
      $('.fa-plus-circle').removeClass('fa-trash');
      $('.discount-input').css('background-color', 'white');
      $('#discountCode').val('');
      discount(code);
    } else {
      code = $('#discountCode').val();
      discount(code);
    }
  });
});

import { summary } from './sumAndService.js';
import { seperateNumbers } from './seprateNumbers.js';
import { plus } from './plus.js';
import { minus } from './minus.js';

plus();
minus();
// preloader
$(window).on('load', function() {
  setTimeout(function() {
    $('.loader').fadeOut();
    $('.preloader').addClass('complete');
  }, 4800);
});
$(document).ready(function() {
  // globals
  const sum = 0;
  let counter;
  const foodBill = 0;
  let code;
  // plus icon click

  // minus btn

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

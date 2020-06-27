import { plus } from './plus.js';
import { minus } from './minus.js';
import { discount } from './discount.js';
// preloader
$(window).on('load', function() {
  setTimeout(function() {
    $('.loader').fadeOut();
    $('.preloader').addClass('complete');
  }, 4800);
});
$(document).ready(function() {
  sessionStorage.clear();
  let code = sessionStorage.getItem('code');
  plus();
  minus();
  discount();

  $('.fa-plus-circle').on('click', function() {
    if ($('.fa-plus-circle').hasClass('fa-trash')) {
      sessionStorage.setItem('code', 'null');
      $('.fa-plus-circle').removeClass('fa-trash');
      $('.discount-input').css('background-color', 'white');
      $('#discountCode').val('');
      discount();
    } else {
      code = $('#discountCode').val();
      sessionStorage.setItem('code', `${code}`);
      discount();
    }
  });
});

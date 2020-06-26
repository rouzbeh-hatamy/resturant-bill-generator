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
  let code = null;
  let isCode = false;
  // sum func
  function summary(number = 0) {
    $('#sum').html(`${number} تومان`);
    const service = number * 0.05;
    $('#service').html(`${service} تومان`);
    $('#finalSum').html(`${service + number}`);
    return service + number;
  }
  // scroll
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.header').css('border-radius', '0px');
    } else {
      $('.header').css('border-top-left-radius', '30px');
      $('.header').css('border-top-right-radius', '30px');
    }
  });
  // plus icon click
  $('.fa-plus').on('click', function() {
    counter = Number($(this).attr('data-counter'));
    counter += 1;
    $(this).attr('data-counter', `${counter}`);
    sum += Number($(this).attr('value'));
    summary(sum);
    $(this)
      .siblings('.fa-minus')
      .css('opacity', '1');
    $(this)
      .siblings('#number')
      .html(`${counter}`);
    foodBill = counter * Number($(this).attr('value'));
    $(this)
      .parent()
      .parent()
      .siblings('#foodBill')
      .html(`${foodBill} تومان`);
    $('.bill').css({
      height: 'auto',
      opacity: '1',
      transform: 'translateY(0px)',
    });

    discount(code);
  });
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
      $(this).css('opacity', '0');
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
  function discount(inputcode) {
    const codes = [
      { code: 'abcd', value: 10000 },
      { code: 'efgh', value: 25000 },
    ];

    for (let index = 0; index < codes.length; index++) {
      if (inputcode === Object.values(codes[index])[0]) {
        isCode = !isCode;
        $('.sum-discount').css('visibility', 'visible');
        $('.discount-input').css(
          'background-color',
          'rgba(46, 204, 113, 0.18)'
        );
        $('.fa-plus-circle').addClass('fa-trash');
        $('.fa-plus-circle').attr('aria-hidden', 'false');
        const all = sum + sum * 0.05;
        const final = all - Object.values(codes[index])[1];
        $('#sumDiscount').html(Object.values(codes[index])[1]);
        if (final > 0) {
          $('#finalSum').html(final);
        } else {
          $('#finalSum').html('0');
        }
      } else if (inputcode !== null && isCode === false) {
        $('.discount-input').css('background-color', 'rgba(231, 76, 60, 0.18)');
        $('#discountCode').val('كد اشتباه است');
      } else if (inputcode === null) {
        $('#sumDiscount').html('0');
        const all = sum + sum * 0.05;
        if (all > 0) {
          $('#finalSum').html(all);
        } else {
          $('#finalSum').html('0');
        }
      }
    }
  }
  // discount input
  $('.fa-plus-circle').on('click', function() {
    if ($('.fa-plus-circle').hasClass('fa-trash')) {
      code = null;
      isCode = !isCode;
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

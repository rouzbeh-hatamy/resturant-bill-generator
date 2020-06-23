$(document).ready(function() {
  // globals
  let sum = 0;
  let counter;
  let foodBill = 0;
  let code;
  // sum func
  function summary(number = 0) {
    $('#sum').html(`${number} تومان`);
    const service = number * 0.05;
    $('#service').html(`${service}تومان`);
    $('#finalSum').html(`${service + number}`);
    return service + number;
  }
  // scroll
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.header').css('border-radius', '0px');
    } else {
      $('.header').css('border-top-left-radius', '36px');
      $('.header').css('border-top-right-radius', '36px');
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
    $('.bill').css('height', '20vh');
    $('.bill').css('visibility', 'visible');
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
        $('.sum-discount').css('visibility', 'visible');
        const all = sum + sum * 0.05;
        const final = all - Object.values(codes[index])[1];
        $('#sumDiscount').html(Object.values(codes[index])[1]);
        if (final > 0) {
          $('#finalSum').html(final);
        } else {
          $('#finalSum').html('0');
        }
      }
    }
  }
  $('.fa-plus-circle').on('click', function() {
    code = $('#discountCode').val();
    discount(code);
  });
});

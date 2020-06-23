$(document).ready(function() {
  // globals
  let sum = 0;
  let counter;
  let foodBill = 0;
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
  });
  // minus btn
  $('.fa-minus').on('click', function() {
    counter -= 1;
    sum -= Number(
      $(this)
        .siblings('.fa-plus')
        .attr('value')
    );
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
    console.log($(this).attr('value'));
  });
});

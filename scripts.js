function billGenarator() {
  let sum = 0;
  $.each($('input:not(#all):checked'), function() {
    sum += parseInt($(this).val());
  });
  $('#sum').text(`your bill is :${sum}`);
}
$('input:not(#all)').on('click', function() {
  billGenarator();
});
$('#all').on('click', function() {
  $('input:not(#all)').prop('checked', $(this).is(':checked'));
  billGenarator();
});

$(document).ready(function() {
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.header').css('border-radius', '0px');
    } else {
      $('.header').css('border-top-left-radius', '36px');
      $('.header').css('border-top-right-radius', '36px');
    }
  });
  //
  $('.fa-plus').on('click', function() {
    console.log($(this).attr('value'));
    console.log($(this).attr('data-counter'));
  });
});

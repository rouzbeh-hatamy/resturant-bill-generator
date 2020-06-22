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

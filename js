// FIX: YOU CAN CLICK TWO OPERATORS AT ONCE.
// FIX: DIVISION IS BUGGY.
$(document).ready(function() {
  var hold = '';
  var equation = [];
  $('button').click(function() {
    var num = $(this).val();
    equation.push(num);
    for (var member in equation) {
      hold += equation[member];
    }
    equation = [];
    $('#show').text(hold1);
  })
  $('#equal').click(function() {
    var answer = eval($('#show').text());
    $('#here').text(answer);
  });
});

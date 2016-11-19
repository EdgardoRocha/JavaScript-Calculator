$(document).ready(function() {

  var hold1 = '';
  var hold3 = '';
  var equation = [];
  var num = $(this).val();
  $('button').click(function() {
    var num = $(this).val();
    equation.push(num);
    for (var member in equation) {
      hold1 += equation[member];
    }
    equation = [];
    $('#show').text(hold1);
  })

  $('.operator').click(function() {
    var oper = $(this).val();
    console.log(oper);
    if (oper == '/') {
      console.log('divide');
    } else if (oper == '*') {
      console.log('multiply');
    } else if (oper == '-') {
      console.log('subtract');
    } else if (oper == '+') {
      console.log('addition');
    }
  });

  $('.finish').click(function() {
    console.log('finish');

  });

  function dataToInt(data) {
    return parseInt(data);
  }

});

/* work this one later
$(document).ready(function(){
// holds ;1 = first equation; 2 = second equation; 3 = summary;
  var hold1 = '';
  var hold2 = '';
  var hold3 = '';
  // sets array to hold values.
  var equation = [];

  $('button').click(function(){
//  var equation = [];
    // sets num to the value of the button that was clicked.
    var num = $(this).val();
    // push the value of num to the array equation.
    equation.push(num);
   console.log(equation);
    hold1 = num;
    console.log(num);
    // loops through equation to make hold1 have the vaule.     
    
    for(var member in equation) {
      hold1 += equation[member];
    }
    
    console.log(hold1)
  });

$('#divide').click(function(){
  hold2 += hold1;
  hold1 = '';

});
  $('#multiply').click(function(){
  console.log('stop');
});
  $('#subtract').click(function(){
  console.log('stop');
});
  $('#addition').click(function(){
  console.log('stop');
});
  
  $('#equal').click(function(){
    equalsSum(hold1,hold2);
  });
  
function dataToInt(data) {
  return parseInt(data);
}

  function equalsSum(data1,data2) {
    var one = dataToInt(data1);
    var two = dataToInt(data2);

    $('#show').text(one+two);

  }

  $('.here').click(function(){
    equation[0] = ''; 
    $('#show').text(hold1);
    console.log(equation);    
  });
  
  
  
});

*/

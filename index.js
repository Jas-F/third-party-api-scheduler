
$('#currentDay').text(moment().format('dddd') +","+(moment().format('MMMM Do YYYY, h:mm a')));

$(document).ready(function(){

let saveBtn= $('.saveBtn');
let output= $('#currentDay');
let dateBtn= $('.dateBtn');



saveBtn.on('click', function (){
let inputValue=$(this).siblings('.description').val()
let id=$(this).parent().attr('id')
localStorage.setItem(id,inputValue)
});

$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#1 .description').val(localStorage.getItem('1'))
$('#2 .description').val(localStorage.getItem('2'))
$('#3 .description').val(localStorage.getItem('3'))
$('#4 .description').val(localStorage.getItem('4'))
$('#5 .description').val(localStorage.getItem('5'))

})
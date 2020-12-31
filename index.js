
$('#currentDay').text(moment().format('dddd') +","+(moment().format('MMMM Do YYYY, h:mm a')));

$(document).ready(function(){

let saveBtn= $('.saveBtn');
let output= $('#currentDay');
let dateBtn= $('.dateBtn');
let currentTime=moment().hours();



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

// change text area background to distinguish between past present or future
// compare current time to time block
// if time block is less than current time then add class of past
// repeat for present and future

// for(var i in textarea) {
//     if 
// }
function updateHour () {
$('.time-block').each(function(){
let timeBlock= $(this).attr('id')
console.log(timeBlock)
if (currentTime > timeBlock) {
    $(this).addClass('past')
}
else if(currentTime < timeBlock) {
    $(this).addClass('future')
}
else{
    $(this).addClass('present')
}
})
}
updateHour()
})
$('#currentDay').text(moment().format('dddd') +","+(moment().format('MMMM Do YYYY, h:mm a')));

// $(document).ready(function(){

// let saveBtn= $('.saveBtn');
// let time=$('.row');

// saveBtn.on('click', function (){
// let inputValue=$(this).siblings('.description').val()
// let id=$(this).parent().attr('id')
// localStorage.setItem(id,inputValue)
// });

// $('#9 .description').val(localStorage.getItem('9'))
// $('#10 .description').val(localStorage.getItem('10'))
// $('#11 .description').val(localStorage.getItem('11'))
// $('#12 .description').val(localStorage.getItem('12'))
// $('#1 .description').val(localStorage.getItem('1'))
// $('#2 .description').val(localStorage.getItem('2'))
// $('#3 .description').val(localStorage.getItem('3'))
// $('#4 .description').val(localStorage.getItem('4'))
// $('#5 .description').val(localStorage.getItem('5'))


// time (function () {if id > currentTime
// this.add(.past)
// })

// distinguish past present and future
// compare present time with each other
// compare x time to present time to determine if past or future
// name out present time to variable to compare
// let current time = moment.hour
let currentTime=moment().hour();
console.log(currentTime)
// this will show the current time in your time zone (21)
// compare time block hours with 21
// if time block is less than 21 then past
// if time block is greater than 21 then future

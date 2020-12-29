$(document).ready(function(){



let saveBtn= $('.saveBtn');
let table= $('.table');
let output= document.querySelector('#currentDay');
let eventInput= document.querySelector('#description');
let dateBtn= document.querySelector('button');
let timeBtn= 

$('.saveBtn').on('click', function (){
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
$('#5add .description').val(localStorage.getItem('5'))


dateBtn.addEventListener('click', ()=> {
    let today= new Date();

    let month= today.getMonth() + 1;
    let year= today.getFullYear();
    let date= today.getDate();
    
    let current_Date= `${month}/${date}/${year}`;
    output.innerText= current_Date;

    
    moment(currentTime).format('hh:')

});

})
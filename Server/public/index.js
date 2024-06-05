// console.log($);
// let ul = document.querySelector('ul')
function restart() {
  $('#list').empty()
    $.get('/todo',(data)=>{
   
      // let ul = document.querySelector('ul')
        console.log(data);
      for(let i of data){
     
      $('#list').append(`<li>${i}</li>`)
      // ul.append(`<li>${i}</li>`)
      }
    })

}

restart()

$('#btn').on('click',()=>{
let data = $('#inp').val()
console.log(data);
$.post('/todo',{data},(res)=>{
  console.log(res);
  $('#inp').val('')
  restart()   
})
})
$(document).ready(()=>{


let div = $('div')
let list = $('.list')
let title = $('.title')

list.hide()

div.click(()=>{
  $(this).addClass('active')
  // title.removeClass('active')
  // $(this).addClass('active')
  // if(title.hasClass('active')){
  //   $(this).children().show()
  // }
})


})

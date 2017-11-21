$(document).ready(function(){

  let a = $('a')
  let orange = $('.orange')
  let htmlBody = $('html, body')

  a.click(function(){
    // let checkClass = $(this).attr('class')
    // console.log(checkClass);
    htmlBody.animate({
      scrollTop: $('.orange').offset().top
    }, 2000)
  })


})

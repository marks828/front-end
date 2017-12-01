$(document).ready(function(){

  let a = $('a')
  let orange = $('.orange')
  let htmlBody = $('html, body')

  // SCROLL TO ORANGE FROM CLICK
  // a.click(function(){
    // let checkClass = $(this).attr('class')
    // console.log(checkClass);

  //   htmlBody.animate({
  //     scrollTop: $('.orange').offset().top
  //   }, 1000)
  // })

  $('li').click(function(){
    let val = $(this).text()
    let div = $('.div')
    if(div.getClass(val)===true){

    }
  })

})

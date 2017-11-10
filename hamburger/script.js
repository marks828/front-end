let hamburger = $('.hamburger')
let nav = $('.nav')



$(document).ready(()=>{


if($(window).width()>= 751){
  hamburger.show()
}
  else{
    hamburger.click(()=>{
      hamburger.css('display: inherit')
      nav.toggle()
    })
  }
  // if (hamburger.hasClass() === false){
  //   hamburger.addClass('active')
  //   nav.show()
  // }
  // else{
  //   hamburger.removeClass('active')
  //   nav.hide()
  // }

})

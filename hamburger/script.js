let hamburger = $('.hamburger')
let nav = $('.nav')

nav.hide()

hamburger.click(()=>{
  hamburger.toggleClass('active')
  nav.toggle()
  // if (hamburger.hasClass() === false){
  //   hamburger.addClass('active')
  //   nav.show()
  // }
  // else{
  //   hamburger.removeClass('active')
  //   nav.hide()
  // }
})

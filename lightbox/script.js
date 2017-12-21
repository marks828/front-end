$(document).ready(function(){
  img = $('img')

  img.click(function(){
    $('body').css("background", "rgba(0, 0, 0, 0.5)")
    $(this).addClass("light-box")

  })

})

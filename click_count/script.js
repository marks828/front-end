$(document).ready(()=>{
  let p = $('p')
  let btn = $('button')
  let i = 0


  p.html(i)
  $('.one').click( ()=>{
    i++
    p.html(i)
  })
  $('.ten').click(()=>{
    i+=10
    p.html(i)
  })
  $('.hundred').click(()=>{
    i+=100
    p.html(i)
  })


})

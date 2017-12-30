$(document).ready(function(){
  const select = $('select')
  const option = $('option')
  const button = $('button')
  const body = $('body')
  const input = $('input')

  const colors = ['select a color', 'orange', 'lightblue']
  
  for(i=0; i<colors.length; i++){
    select.append(`<option>${colors[i]}</option>`)
  }

  button.click(function(){
    const selectValue = select.val();
    console.log(selectValue);
    body.css('background-color', selectValue)
  })

  // input with press enter
  input.keydown(function(e){
    if(e.which === 13){
      // console.log('you presed enter');
      const newColor = input.val()
      // console.log(newColor);
      colors.push(newColor)
      // console.log(colors);
      select.append(`<option>${newColor}</option>`)
      input.val(' ')
    }
  })

})

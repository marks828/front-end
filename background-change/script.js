$(document).ready(function(){

  // variables
  let body = $('body')
  let change = $('.change')
  let colors = ['#1a1a1a', "blue", "green", "lightblue"]
  let shuffleArray = shuffle(colors)
  let addNewColor = $('.addNewColor')
  let input = $('input')

  backgroundColor()

  // shuffle function
  function shuffle(array){
    for(let i=array.length - 1; i>0; i--){
      var j = Math.floor(Math.random()*(i+1))
      var temp = array[i]
      array[i]=array[j]
      array[j]=temp
    }
    return array
  }

  function backgroundColor(){
    body.css("background-color", shuffleArray[0])
  }
  // button click to change background
  change.click(function(){
    let newBackground = shuffle(colors)
    backgroundColor()
  })

  // ADD NEW COLOR
  // take input value and push into colors array
  addNewColor.click(function(){
    let newColor = input.val()
    colors.push(newColor)
    input.val('')
  })

})

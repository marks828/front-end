$(document).ready(()=>{
  // STEPS!
  // target button that is clicked
  // take value of x and y
  // apply correct math object
  // put answer on page


  // VARIABLE OBJECT
  let calculator = {
    add: (x,y)=> sum = x + y, // implicit return (one line)
    sub: (x, y) => diff = x - y,
    multiply: (x ,y) => product = x * y,
    divide: (x, y) => quotient = x/y,
    exponent: (x, y)=> expo = Math.pow(x, y),
  }

  // VARIABLES
  let x = $('.x')
  let y = $('.y')
  let answer = $('.answer')

  // TESTING OBJECT INTEGRATION INTO FUNCTION
  // $('.add').click(function(){
  //   let xVal = parseInt(x.val())
  //   let yVal = parseInt(y.val())
  //   let final = calculator.add(xVal, yVal)
  //   console.log(final);
  //   answer.html(final)
  // })


  // FINAL CODE WITH "THIS" IN USE
  $('button').click(function(){
    let xVal = parseInt(x.val())
    let yVal = parseInt(y.val())
    if($(this).hasClass('add')===true){
      let final = calculator.add(xVal, yVal)
      answer.html(final)
      console.log(final);
    }
    else if($(this).hasClass('sub')===true){
      let final = calculator.sub(xVal, yVal)
      answer.html(final)
    }
    else if($(this).hasClass('mult')===true){
      let final = calculator.multiply(xVal, yVal)
      answer.html(final)
    }
    else if($(this).hasClass('div')===true){
      let final = calculator.divide(xVal, yVal)
      answer.html(final)
    }
    else if($(this).hasClass('exp')===true){
      let final = calculator.exponent(xVal, yVal)
      answer.html(final)
    }
  })


})

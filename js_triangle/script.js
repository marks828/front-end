console.log('hello');

for(let i ='#'; i.length<=7; i+='#'){
  console.log(i);
  $('.main').append(`<div>${i}</div>`)
}


for(let i=0;i<101;i++){
  if(i%3 === 0 && i%5 === 0){
    console.log("fizbuzz");
    $('.main').append('<div>fizzbuzz</div>')
  }
  else if(i%3 === 0 ){
    console.log('fizz');
      $('.main').append('<div>fizz</div>')
  }
  else if (i%5 === 0 ) {
    console.log('buzz');
      $('.main').append('<div>buzz</div>')
  }
  else{
    console.log(i);
      $('.main').append(`<div>${i}</div>`)
  }
}

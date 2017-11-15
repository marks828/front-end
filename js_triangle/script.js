// for(let i ='#'; i.length<=7; i+='#'){
//   console.log(i);
//   $('.main').append(`<div>${i}</div>`)
// }
//
//
// for(let i=1;i<101;i++){
//   if(i%3 === 0 && i%5 === 0){
//     console.log("fizbuzz");
//     $('.main').append('<div>fizzbuzz</div>')
//   }
//   else if(i%3 === 0 ){
//     console.log('fizz');
//       $('.main').append('<div>fizz</div>')
//   }
//   else if (i%5 === 0 ) {
//     console.log('buzz');
//       $('.main').append('<div>buzz</div>')
//   }
//   else{
//     console.log(i);
//       $('.main').append(`<div>${i}</div>`)
//   }
// }


let board = " "

let boardSize = (x, y)=>{
  for(x = x; x<=2; x++){
      if(board.length === y){
        board = board+="/n"
        if((x*y).length === x*y){
          console.log(board);
          return board
        }
      }
      else{
        return board
      }
    for(y = y; y<=4; y++){
      if(y%2===0){
        board = board+="#"
      }
      else{
        board = board+=" "
      }
    }
  }
}
boardSize(2, 5)

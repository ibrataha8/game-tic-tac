let title = document.querySelector('.title')
let turn = 'x'
var i = 0
let squares = [];
addEventListener("click", winner)


function end(num1,num2,num3){

    document.getElementById('item'+num1).style.background = 'black'
    document.getElementById('item'+num2).style.background = 'black'
    document.getElementById('item'+num3).style.background = 'black'
    swal({
        title: `${document.getElementById('item'+num1).textContent} ==> You Win!`,
        text: `${document.getElementById('item'+num1).textContent} ==> مبروك لقد فزت `,
        icon: "success",
        button: "OK" ,
  }).then(() => {
    refresh();
  });
}


function winner() {
    for (let j = 1; j < 10; j++) {
      squares[j] = (document.getElementById('item' + j).innerHTML);
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        
        end(1,2,3)
    }
    if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        
        end(4,5,6)
    }
    if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        
        end(7,8,9)
    }
 
    if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        
        end(1,5,9)
    }
    if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        
        end(3,5,7)
    }
    if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        
        end(3,6,9)
    }
    if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        
        end(2,5,8)
    }
    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        
        end(1,4,7)
    }
  }

    
function game(id){
    let element = document.getElementById(id)
    if (element.textContent == '' && turn === 'x'){
        element.innerHTML='<span style="color:white;">X</span>'
        title.textContent = "O"
        turn = 'o'
        i++
    }
    else if (element.textContent == '' && turn === 'o'){
        element.innerHTML='<span style="color:brown;">O</span>'
        title.textContent = "X"
        turn = 'x'
        i++
    }
    if(i==9){
        title.textContent = "Jeu Terminé"
    }
    
}
function refresh(){
    window.location.reload() 
}
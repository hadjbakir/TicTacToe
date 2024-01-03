
var turn="X";
var playedCell=[];
var playedTime=0;
let scor1 = 0;
let scor2 = 0;
var turn2="O";
var bool;

var sound = new Audio("win.mp3"); 




const score = document.querySelector("#score");


// create elements <table> and a <tbody>
  var tbl = document.createElement("table");


  var tblBody = document.createElement("tbody");

  // cells creation
  var identifier=0;
  for (var j = 0; j <= 2; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i <= 2; i++) {
      
      var cell = document.createElement("td");
      
      row.appendChild(cell);
    
      cell.setAttribute("width",120);
      cell.setAttribute("height",120);
      cell.setAttribute("align","center");
      cell.setAttribute("valign","center");
      cell.addEventListener("click",playTurn);
      cell.identifier=identifier;
      cell.classList.add("cell");
      identifier=identifier+1;

      
      cell.style.fontSize="xxx-large";
      cell.style.backgroundColor="#D3D3D3";
      cell.style.borderRadius="12px";


    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  
  document.getElementById("tictactoe").appendChild(tbl);



  function playTurn(){

  	//1 check if the cell has been played before
  	if(this.innerHTML==="X" || this.innerHTML==="O"){
  		return;
  	}

  	playedTime=playedTime+1;
  	//2 add the new played tuen to the table playedCell
  	playedCell[this.identifier]=turn;
  	this.textContent=turn;
    
    // check if the player win
     winner();

    if(bool==true){
      init();
      
      return;
    }

    if (playedTime===9){
  		alert("Draw game");
  		init();
      return;

  	}

    
    
    console.log(playedTime);
    
    // the move of pc in 0.5 second

    computerTurn();

    console.log(playedTime);
  
    // check if the pc win

    winner();
    if(bool==true){
      init();
      
      return;
    }

      	

  	if (playedTime===9){
  		alert("Draw game");
  		init();

  	}

  }


  

  function hasWon(play){

    if(playedCell[0]===play && playedCell[1]===play && playedCell[2]===play )
    return true;
    


  if(playedCell[3]===play && playedCell[4]===play && playedCell[5]===play )
    return true;

  if(playedCell[6]===play && playedCell[7]===play && playedCell[8]===play )
    return true;  
 
   if(playedCell[0]===play && playedCell[3]===play && playedCell[6]===play )
    return true;  
 
  if(playedCell[1]===play && playedCell[4]===play && playedCell[7]===play )
    return true;  
 
  if(playedCell[2]===play && playedCell[5]===play && playedCell[8]===play )
    return true;
    
  if(playedCell[0]===play && playedCell[4]===play && playedCell[8]===play )
    return true;
    
  if(playedCell[6]===play && playedCell[4]===play && playedCell[2]===play )
      return true;

return false;
  }



  function init(){
  bool=false;
  playedTime=0;
   turn="X";
   playedCell=[];
  var allCells=document.getElementsByClassName("cell");
  for(let item of allCells){
  	item.innerHTML="";

  }

  }

 

    function  computerTurn(){

     
    var random;
    
    var list =document.getElementsByTagName('td');
    


    random = Math.ceil(Math.random() * 9) - 1;
      
         if (list[random].innerHTML == '') {
               playedCell[random]=turn2;
              playedTime=playedTime+1;

              list[random].textContent = turn2;
        }
          else{
             computerTurn();
              }
    }


    function winner(){



      if (hasWon(turn)){
        sound.play();
        alert("Player: "+turn+" has won the game");
        
      
        bool=true;
        
          if (turn =="X"){
             scor1++;
             Rescore();}}
      
         
      if (hasWon(turn2)){
        sound.play(); 
        alert("Player: "+turn2+" has won the game");
         
        bool=true;
                 
          if 
            (turn2 =="O"){
             scor2++;
             Rescore();}}}

    
    
    function Rescore(){
    
      score.textContent = `you : ${scor1} -- ${scor2} : cmp`;
  }
  
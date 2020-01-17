function createBoard(){
    var board = document.getElementById('board');
    var table = document.createElement('table');
    table.setAttribute('id', 'boardtable');
    for(var i = 0; i < 7; i++){
        var tr = document.createElement('tr');
        tr.setAttribute('id', i);
        for(var j = 0; j < 6; j++){
            if(i == 6 && j == 6){
                break;
            }
            else {
                var td = document.createElement('td');
                td.setAttribute('class', 'boardbutton')
                td.setAttribute('id', 'button' + i + j);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    board.appendChild(table);
}

createBoard();

function calctime()
{	var t = setTimeout("calctime()",1000);
    document.getElementById('time').innerHTML="Time passed: " + t + " sec";
    
}

calctime();


var click = function() {
    var rows = document.getElementsByTagName('tr');
    // var table = document.getElementById('boardtable');
    for(let i = 0; i < rows.length; i++){
        // row = document.getElementById(i);
        // console.log(row);
        // console.log(rownum);
        rows[i].addEventListener('click', function(){
            buttonClick(i);
        });
    }
    // rows[0].addEventListener('click', function(){buttonClick(0)});
    // rows[1].addEventListener('click', function(){buttonClick(1)});
}

click();

var buttonClick = function(x){
    for(var j = 5; j > -1; j--){
        var button = document.getElementById('button' + x + j);
        //console.log('button' + x + j);
        
        if(!button.classList.contains('red') && !button.classList.contains('yellow')){
            button.classList.add(currentplayer);
            
            break;
        }
        if(j == 0){
            alert('Row is full');
            changePlayer();
            break;
        }
        
    }
    if (checkWinHorizontal(x,j) || checkWinVertical(x,j) || checkWinDiagonal(x,j)){
        alert(currentplayer + ' wins!');
        stopGame();
    }
    changePlayer();
    
}

var currentplayer = 'red';
var changePlayer = function(){
    if (currentplayer == 'red'){
        currentplayer = 'yellow';
    }
    else if(currentplayer == 'yellow'){
        currentplayer = 'red';
    }
    //console.log(currentplayer);
}

var checkWinHorizontal = function(x,y){
    let counter = 0;
    let placed = document.getElementById('button' + x + y);
    // console.log(placed);
    // console.log(numx);
    for(let i = x; i >= 0; i--){
        let button = document.getElementById('button' + i + y);
        // console.log('button' + i + y);
        // console.log(button.classList);
        // console.log(placed.classList);
        if(button.className != placed.className){
            break;
        }
        else {
            counter++;
        }
        
    }
    
    for(let j = x+1; j < 7; j++){
        let button = document.getElementById('button' + j + y);
        // console.log('button' + j + y);
        // console.log(button.classList);
        // console.log(placed.classList);
        if(button.className != placed.className){
            break;
        }
        else {
            counter++;
        }
        // console.log(counter); 
    }
    // console.log('horizontal ' + counter);
    if(counter >= 4){
        return true;
    }
    else {
        return false;
    }
}

var checkWinVertical = function(x,y){
    let counter = 0;
    let placed = document.getElementById('button' + x + y);
    // console.log(placed);
    // console.log(numx);
    for(let i = y; i >= 0; i--){
        let button = document.getElementById('button' + x + i);
        // console.log('button' + i + y);
        // console.log(button.classList);
        // console.log(placed.classList);
        if(button.className != placed.className){
            break;
        }
        else {
            counter++;
        }
        
    }
    
    for(let j = y+1; j < 6; j++){
        let button = document.getElementById('button' + x + j);
        // console.log('button' + j + y);
        // console.log(button.classList);
        // console.log(placed.classList);
        if(button.className != placed.className){
            break;
        }
        else {
            counter++;
        }
        // console.log(counter); 
    }
    // console.log('vertical ' + counter);
    if(counter >= 4){
        return true;
    }
    else {
        return false;
    }
}

var checkWinDiagonal = function(x,y){
    let counterright = 1;
    let counterleft = 1;
    let placed = document.getElementById('button' + x + y);
    for(let i = x - 1; i >= 0; i--){
        let j = x - i;
        if(y - j >= 0){ 
            let button = document.getElementById('button' + i + (y-j));
            console.log(button);
            if(button.className != placed.className){
                break;
            }
            else {
                counterleft++;
            } 
        }    
    }
    for(let i = x - 1; i >= 0; i--){
        let j = x - i;
        if(y + j <= 5){ 
            let button = document.getElementById('button' + i + (y+j));
            console.log(button);
            if(button.className != placed.className){
                break;
            }
            else {
                counterright++;
            } 
        }    
    }
    for(let i = x + 1; i < 7; i++){
        let j = i - x;
        if(y + j <= 5){ 
            let button = document.getElementById('button' + i + (y+j));
            console.log(button);
            if(button.className != placed.className){
                break;
            }
            else {
                counterleft++;
            } 
        }    
    }
    for(let i = x + 1; i < 7; i++){
        let j = i - x;
        if(y - j >= 0){ 
            let button = document.getElementById('button' + i + (y-j));
            console.log(button);
            if(button.className != placed.className){
                break;
            }
            else {
                counterright++;
            } 
        }    
    }
    console.log(counterleft + " " + counterright);
    if(counter >= 4){
        return true;
    }
    else {
        return false;
    }
}

var stopGame = function(){
    
}

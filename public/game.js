function createBoard(){
    var board = document.getElementById('board');
    var table = document.createElement('table');
    table.setAttribute('id', 'boardtable');
    for(var i = 0; i < 7; i++){
        var tr = document.createElement('tr');
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
    var m = 0;
    if(t > 59){
        m++;
        t = t - 60;
    }
    if(t < 10){
        document.getElementById('time').innerHTML="Time passed " + m + ":0" + t;
    }
    else{
        document.getElementById('time').innerHTML="Time passed " + m + ":" + t;
    }
    
}

calctime();
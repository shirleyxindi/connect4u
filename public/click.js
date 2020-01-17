var click = function() {
    var row;
    var rownum;
    var table = document.getElementById('boardtable');
    for(var i = 0; i < 7; i++){
        row = document.getElementById(i);
        console.log(row);
        rownum = i;
        console.log(rownum);
        row.addEventListener('click', function(){
            buttonClick(rownum)
        });

    }
}

click();

function buttonClick(x){
    for(var j = 5; j > -1; j--){
        var button = document.getElementById('button' + x + j);
        console.log('button' + x + j);
        if(button.className !== 'boardbutton red'){
            button.setAttribute('class', 'boardbutton red');
            break;
        }
    }
}
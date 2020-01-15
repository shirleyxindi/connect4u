function calctime()
{	var t=setTimeout("calctime()",1000);
    var m = 0;
    if(t == 59){
        m++;
        t = t - 59;
    }
    document.getElementById('time').innerHTML="Time passed " + m + ":" + t + " sec";
    
}
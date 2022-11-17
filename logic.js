$(function(){
    function parse () {a = $('#exampleFormControlTextarea1').val();
    res = JSON.parse(a);
    $('#exampleFormControlTextarea2').val(res);}
});
// Test JS
window.onload = jsTest1;

function jsTest1() {
    javascript:document.getElementById("js-test2").style.color="blue";
}


// Drag and Drop jquery
/*
$(function() {
    $('#dragContent, #dropContent1').sortable({
        placeholder: "ui-state-highlight",
        connectWith: ".connectedSortable",
    }).disableSelection();
});
*/


$(function() {
    $('#dragContent, .ballot-title-text, .ballot-instructions').sortable({
        connectWith:['.ballot-title-text','.ballot-instructions','#dragContent'],
        placeholder: "ui-state-highlight",
        cursor:'move',
        stop: function(){
            $('.ballot-title-text').css('color','white');
            $('.ballot-instructions').css('color','black');
        }
    }).disableSelection();
});


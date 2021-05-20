for(let i = 0; i < 16; i++){
$('#container').append('<div id="box" class="toggle"></div>')}

$("#container").on("click", "#box", function(){

    $(this).toggleClass("toggle")
})


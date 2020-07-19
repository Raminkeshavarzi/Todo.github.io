// I want to check the response of li to clicking
$("ol").on("click", "li",function(){
	$(this).toggleClass("Done")
});

// I want to delete the task by clicking the "X"

$("ol").on("click", "span", function(event){
// the reason that I used event inside the function is to prevent event bubbling

// .parent is one of the best tools of jQuery that allows us to remove the li from the ul
$(this).parent().fadeOut(500, function(){
$(this).remove();
});

event.stopPropagation();
// event.stopPropagation is jQuery method which stops eventlistener from the event bubbling
});


// I want to add task to the list by pressing the enter key 
$("input[type='text']").keypress(function(event){
	if (event.which === 13){

// the reason that I created a var is to get input from user
	var newTask = $(this).val();
	$(this).val("");	
// Then I need to create a new li and add that user input into that new li which is inside the ol.
// The .append is jQuery method which add li to the ul or ol inside the HTML.
	$("ol").append("<li><span><i class='fa fa-trash'></i></span> " + newTask + "</li>")
}
	
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});



$(".fa-tasks").click(function(){
$("li").fadeToggle();
});
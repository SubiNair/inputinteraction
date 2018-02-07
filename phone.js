$(document).ready(function(){
	$("#content_dial").show();
	$("#content_contacts").hide();
	$("#content_add").hide();
	$("#gesture_tester").hide();

});

$("#dial").click(function(){
	$("#content_dial").show();
	$("#content_contacts").hide();
	$("#content_add").hide();
	$("#gesture_tester").hide();
});

$("#contacts").click(function(){
	$("#content_contacts").show();
	$("#content_dial").hide();
	$("#content_add").hide();
	$("#gesture_tester").hide();
});

$("#add").click(function(){
	$("#content_add").show();
	$("#content_dial").hide();
	$("#content_contacts").hide();
	$("#gesture_tester").hide();
});

$("#gestures").click(function(){
	$("#content_add").hide();
	$("#content_dial").hide();
	$("#content_contacts").hide();
	$("#gesture_tester").show();
});

$("#1").click(function() { 
	$("#dialer").val($("#dialer").val() + "1");
});

$("#2").click(function() { 
	$("#dialer").val($("#dialer").val() + "2");
});

$("#3").click(function() { 
	$("#dialer").val($("#dialer").val() + "3");
});

$("#4").click(function() { 
	$("#dialer").val($("#dialer").val() + "4");	
});

$("#5").click(function() { 
	$("#dialer").val($("#dialer").val() + "5");	
});

$("#6").click(function() { 
	$("#dialer").val($("#dialer").val() + "6");	
});

$("#7").click(function() { 
	$("#dialer").val($("#dialer").val() + "7");	
});

$("#8").click(function() { 
	$("#dialer").val($("#dialer").val() + "8");	
});

$("#9").click(function() { 
	$("#dialer").val($("#dialer").val() + "9");	
});

$("#0").click(function() { 
	$("#dialer").val($("#dialer").val() + "0");	
});

$("#hash").click(function() { 
	$("#dialer").val($("#dialer").val() + "#");	
});

$("#star").click(function() { 
	$("#dialer").val($("#dialer").val() + "*");	
});


$("#clear").click(function() { 
	$("#dialer").val("");	
});

var downX = 0;
var downY = 0;
var upX = 0;
var upY = 0;

$("#gesture_area").mousedown(function(mouse_event) { 
	$("#gesture_output").val("mouse down");
	downX = mouse_event.pageX;
	downY = mouse_event.pageY;
});

$("#gesture_area").mouseup(function(mouse_event) { 
	$("#gesture_output").val("mouse up");
	upX = mouse_event.pageX;
	upY = mouse_event.pageY;

	if (upX < downX) {
		$("#gesture_output").val("swipe left");
	}
	else if (upX > downX) {
		$("#gesture_output").val("swipe right");
	}
	else if (upX == downX) {
		$("#gesture_output").val("mouse up");
	}
	else {
		$("#gesture_output").val("mouse down");
	}


});















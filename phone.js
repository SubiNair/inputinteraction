(document).ready(function(){
	("#content_dial").show();
	("#content_contacts").hide();
	("#content_add").hide();
});

("#dial").click(function(){
	("#content_dial").show();
	("#content_contacts").hide();
	("#content_add").hide();
});

("#contacts").click(function(){
	("#content_contacts").show();
	("#content_dial").hide();
	("#content_add").hide();
});

("#add").click(function(){
	("#content_add").show();
	("#content_dial").hide();
	("#content_contacts").hide();
});

function getData(string) {
	$.ajax({
		url: "custom_web_template.html?object_id=6244775775705199018",
		type: "POST",
		cache: false,
		data: 'search=' + string,
		dataType: "html",
		async: false,
		success: function (response) {
			//allBooks = makePages(JSON.parse(response), 10);
			console.log(response);
		},
		error: function( oXttpRequest, sTextStatus, sErrorThrown ) {
			alert(': ' + sTextStatus );
		}
	});
}
getData('course');
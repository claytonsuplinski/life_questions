QUE.start = function( callback ){
	QUE.data = [];
	
	$.ajax({
		url      : './assets/data/questions.json',
		dataType : 'json',
		success  : function( data ){
			QUE.data = data;
			
			if( callback ) callback();
		},
		error    : function( e ){
			console.log( 'Error loading questions', e );
		}
	});
};
QUE.start = function( callback ){
	QUE.data = [];
	
	$.ajax({
		url      : './assets/data/questions.json',
		dataType : 'json',
		success  : function( data ){
			QUE.data = data.sort(function(a,b){ return ( a.answer ? -1 : 1 ); });
			
			if( callback ) callback();
		},
		error    : function( e ){
			console.log( 'Error loading questions', e );
		}
	});
};
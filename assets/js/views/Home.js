QUE.views.home = {};

QUE.views.home.draw = function(){
	$( "#content" ).html(
		QUE.view.get_header() +
		'<div class="home-questions">' +
			QUE.data.map(function( question ){
				return '<a class="question" href="' + QUE.hashlinks.get_url({ include : { question : question.question } }) + '">' +
					'<div class="question-name">' + question.question + '</div>' +
					( question.answer ? 
						'<div class="question-answer">' + question.answer[ 0 ][ 1 ] + '</div>'
					: '' ) +
				'</a>';
			}).join('') +
		'</div>'
	);
};
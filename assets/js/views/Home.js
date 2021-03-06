QUE.views.home = {};

QUE.views.home.draw = function(){
	$( "#content" ).html(
		QUE.view.get_header() +
		'<div class="home-questions">' +
			QUE.data.map(function( question ){
				return '<a class="question" href="' + QUE.hashlinks.get_url({ include : { question : question.question } }) + '">' +
					'<div class="question-name">' + question.question + '</div>' +
				'</a>';
			}).join('') +
		'</div>'
	);
};
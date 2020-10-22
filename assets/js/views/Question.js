QUE.views.question = {};

QUE.views.question.draw = function(){
	var question = QUE.data.find( x => x.question == QUE.hashlinks.params.question.value );
	console.log( question );
	
	$( "#content" ).html(
		QUE.view.get_header() +
		'<div class="question-full">' +
			'<div class="question-name">' + question.question + '</div>' +
			( question.answer ?
				'<div class="section answer">' +
					'<div class="title">Answer</div>' +
					'<div class="content">' +
						QUE.view.get_answer( question.answer ) +
					'</div>' +
				'</div>' : ''
			) +
			( question.possibilities ?
				'<div class="section possibilities">' +
					'<div class="title">Possibilities</div>' +
					'<div class="content">' +
						QUE.view.get_possibilities( question.possibilities ) +
					'</div>' +
				'</div>' : ''
			) +
		'</div>'
	);
};
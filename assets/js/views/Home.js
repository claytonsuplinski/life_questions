QUE.views.home = {};

QUE.views.home.load = function(){
	var self = this;
	
	this.questions = [];

	$.ajax({
		url : './assets/data/questions.json',
		dataType : 'json',
		success  : function( data ){
			self.questions = data;
			
			self.draw();
		},
		error    : function( e ){
			console.log( 'Error loading home view', e );
		}
	});
};

QUE.views.home.draw = function(){
	$( "#content" ).html(
		'<div class="header">Life Questions</div>' +
		'<div class="home-questions">' +
			this.questions.map(function( question ){
				return '<div class="question">' +
					'<div class="question-name">' + question.question + '</div>' +
				'</div>';
			}).join('') +
		'</div>'
	);
};
QUE.hashlinks = new Hashlinks({
	question : {},
});

QUE.hashlinks.on_start = function(){
	if( this.params.question.value ) QUE.start(function(){ QUE.views.question.draw(); });
	else                             QUE.start(function(){ QUE.views.home.draw();     });
	
	QUE.start();
};

window.onhashchange = function(){ QUE.hashlinks.start(); };
window.onload       = function(){ QUE.hashlinks.start(); };
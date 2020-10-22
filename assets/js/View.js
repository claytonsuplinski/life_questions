QUE.view = {};

QUE.view.get_header = function(){
	return '<div class="header">' + 
		'<a href="index.html">Life Questions</a>' + 
	'</div>';
};

QUE.view.get_bullet = function( id ){
	switch( id ){
		case   0 : return '&#10148;';
		case   1 : return '&bull;';
		case   2 : return '&rArr;';
		case   3 : return '&RBarr;';
		case   4 : return '&#10497;';
		case   5 : return '&dzigrarr;';
		case '+' : return '&oplus;';
		case '-' : return '&odash;';
	};
	return '&bull;';
};

QUE.view.get_line = function( content, p ){
	return '<div class="line ' + ( p.classes || '' ) + '" style="' + 
				[
					'margin-left:' + ( p.indent * 20 ) + 'px;',
					( p.font_weight ? 'font-weight:' + p.font_weight + ';' : '' ),
					'font-size:' + ( p.font_size || 12 ) + 'px;',
				].join('') +
			'">' +
		( p.bullet !== undefined ? '<span class="bullet">' + this.get_bullet( p.bullet ) + '</span>' : '' ) +
		content +
	'</div>';
};

QUE.view.get_answer = function( lines ){
	var self = this;
	return lines.map(function( line ){
		return self.get_line( line[ 1 ], {
			bullet      : ( line[ 0 ] ? line[ 0 ] : undefined ),
			indent      : line[ 0 ],
			font_weight : ( line[ 0 ] ? 400 : 700 ),
			font_size   : ( line[ 0 ] ?  12 :  18 ),
		} );
	}).join('');
};

QUE.view.get_possibilities = function( possibilities ){	
	var self = this;
	return possibilities.map(function( possibility ){
		return '<div class="possibility">' + 
			'<div class="label">' + possibility.label + '</div>' +
			'<div class="content">' + 
				[ 'pros', 'cons' ].map(function( group ){
					return ( possibility[ group ] && possibility[ group ].length ?
						possibility[ group ].map(function( line ){
							return self.get_line( line[ 1 ], {
								bullet  : ( line[ 0 ] ? line[ 0 ] : ( group == 'pros' ? '+' : '-' ) ),
								indent  : line[ 0 ],
								classes : ( !line[ 0 ] ? group.slice( 0, -1 ) : '' ),
							} );
						}).join('') : ''
					);
				}).join('') +
				( possibility.notes ? 
					'<div class="notes">' +
						possibility.notes.map(function( line ){
							return self.get_line( line[ 1 ], {
								bullet : line[ 0 ],
								indent : line[ 0 ],
							} );
						}).join('') +
					'</div>' : ''
				) +
			'</div>' +
		'</div>';
	}).join('');
};
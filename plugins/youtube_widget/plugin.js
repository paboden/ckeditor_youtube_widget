CKEDITOR.plugins.add( 'youtube_widget', {

  lang: [ 'en', 'pt', 'ja', 'hu', 'it', 'fr', 'tr', 'ru', 'de', 'ar', 'nl', 'pl', 'vi'],

	requires: 'widget',

	icons: 'youtube_widget',

	init: function( editor ) {
		CKEDITOR.dialog.add( 'youtube_widget', this.path + 'dialogs/youtube_widget.js' );

		editor.widgets.add( 'youtube_widget', {
			allowedContent:
				'div(!ytw,align-left,align-right,align-center){width};' +
				'div(!ytw-video); div(!ytw-caption);',

			requiredContent: 'div(ytw)',

			editables: {
				title: {
					selector: '.ytw-video',
					allowedContent: 'br strong em'
				},
				content: {
					selector: '.ytw-caption',
					allowedContent: 'p br ul ol li strong em'
				}
			},

			button: 'Create a youtube_widget box',

			dialog: 'youtube_widget',

			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'ytw' );
			},


			// When a widget is being initialized, we need to read the data ("align" and "width")
			// from DOM and set it by using the widget.setData() method.
			// More code which needs to be executed when DOM is available may go here.
			init: function() {
				var width = this.element.getStyle( 'width' );
				if ( width )
					this.setData( 'width', width );

				var height = this.element.getStyle( 'height' );
				if ( height )
					this.setData( 'height', height );

				if ( this.element.hasClass( 'align-left' ) )
					this.setData( 'align', 'left' );
				if ( this.element.hasClass( 'align-right' ) )
					this.setData( 'align', 'right' );
				if ( this.element.hasClass( 'align-center' ) )
					this.setData( 'align', 'center' );
			},


			data: function() {
				if ( this.data.width == '' )
					this.element.removeStyle( 'width' );
				else
					this.element.setStyle( 'width', this.data.width );

				if ( this.data.height == '' )
					this.element.removeStyle( 'height' );
				else
					this.element.setStyle( 'height', this.data.height );

				// Brutally remove all align classes and set a new one if "align" widget data is set.
				this.element.removeClass( 'align-left' );
				this.element.removeClass( 'align-right' );
				this.element.removeClass( 'align-center' );
				if ( this.data.align )
					this.element.addClass( 'align-' + this.data.align );
			}, //end data

      // Build out the widget
			template:
				'<div class="ytw">' +
					'<div class="ytw-video">Height: ' + this.height + '</div>' +
					'<div class="ytw-caption"><p>Width: ' + this.width + '</p></div>' +
				'</div>',

		}); // end editors widget function
	}, // end init function


  onLoad: function(editor) {
    CKEDITOR.addCss(
      '.ytw {' +
        'padding: 9px;' +
        'margin: 5px 0px 15px;' +
        'background: #eee;' +
        'border-radius: 4px;' +
        'border: 1px solid #ddd;' +
        'box-shadow: 0 1px 1px #fff inset, 0 -1px 0px #ccc inset;' +
      '}' +
      '.ytw:after {' +
        'content: "Edit";' +
        'display: table;' +
        'margin: 0px auto;' +
        'width: 40px;' +
        'padding: 3px 7px;' +
        'text-align: center;' +
        'float: none;' +
      '}' +
      '.ytw-video, .ytw-caption {' +
        'box-shadow: 0 1px 1px #ddd inset;' +
        'border: 1px solid #cccccc;' +
        'border-radius: 4px;' +
        'background: #fff;' +
      '}' +
      '.ytw-video {' +
        'margin: 0 0 10px;' +
        'padding: 5px 8px;' +
      '}' +
      '.ytw-caption {' +
        'padding: 5px 8px;' +
      '}' +
      '.ytw.align-right {' +
        'float: right;' +
        'margin-left: 15px;' +
      '}' +
      '.ytw.align-left {' +
        'float: left;' +
        'margin-right: 15px;' +
      '}' +
      '.ytw.align-center {' +
        'margin-left: auto;' +
        'margin-right: auto;' +
      '}'
   );
  }

});

/**
 * JavaScript function to match (and return) the video Id
 * of any valid Youtube Url, given as input string.
 * @author: Stephan Schmitz <eyecatchup@gmail.com>
 * @url: http://stackoverflow.com/a/10315969/624466
 */
function ytVidId( url ) {
	var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	return ( url.match( p ) ) ? RegExp.$1 : false;
}

/**
 * Converts time in hms format to seconds only
 */
function hmsToSeconds( time ) {
	var arr = time.split(':'), s = 0, m = 1;
	while (arr.length > 0) {
		s += m * parseInt(arr.pop(), 10);
		m *= 60;
	}
	return s;
}

// Note: This automatic widget to dialog window binding (the fact that every field is set up from the widget
// and is committed to the widget) is only possible when the dialog is opened by the Widgets System
// (i.e. the widgetDef.dialog property is set).
// When you are opening the dialog window by yourself, you need to take care of this by yourself too.

CKEDITOR.dialog.add( 'youtube_widget', function( editor ) {
	return {
		title: 'Edit Youtube Widget',
		minWidth: 300,
		minHeight: 200,

		contents: [
		  // Set tab one.
			{
				id: 'tab1',
        label: editor.lang.youtube_widget.videoTab,
				elements: [
				  // Create the embed code text area.
          {
						id : 'txtEmbed',
						type : 'textarea',
						label : editor.lang.youtube_widget.txtEmbed,
						autofocus : 'autofocus',
						setup: function( widget ) {
							this.setValue( widget.data.txtEmbed );
						},
						commit: function( widget ) {
							widget.setData( 'txtEmbed', this.getValue() );
						},
					},
					// Add a hr line between the embed and url field
					{
						type : 'html',
						html : editor.lang.youtube_widget.or + '<hr>'
					},
					// Create the URL text field.
					{
						id : 'txtUrl',
						type : 'text',
						label : editor.lang.youtube_widget.txtUrl,
						setup: function( widget ) {
							this.setValue( widget.data.txtUrl );
						},
						commit: function( widget ) {
							widget.setData( 'txtUrl', this.getValue() );
						},
					},
        ]
      },
      // End tab one

		  // Set tab two.
      {
        id: 'tab2',
        label: editor.lang.youtube_widget.settingsTab,
        elements: [
					// Create the alignment selector
					{
						id: 'align',
						type: 'select',
						label: 'Align',
						items: [
							[ editor.lang.common.notSet, '' ],
							[ editor.lang.common.alignLeft, 'left' ],
							[ editor.lang.common.alignRight, 'right' ],
							[ editor.lang.common.alignCenter, 'center' ]
						],
						setup: function( widget ) {
							this.setValue( widget.data.align );
						},
						commit: function( widget ) {
							widget.setData( 'align', this.getValue() );
						},
					},
					// Create the width text field
					{
						id: 'width',
						type: 'text',
						label : editor.lang.youtube_widget.txtWidth,
						width: '80px',
						setup: function( widget ) {
							this.setValue( widget.data.width );
						},
						commit: function( widget ) {
							widget.setData( 'width', this.getValue() );
						},
					},
					// Create the height text field
					{
						id: 'height',
						type: 'text',
						label : editor.lang.youtube_widget.txtHeight,
						width: '80px',
						setup: function( widget ) {
							this.setValue( widget.data.height );
						},
						commit: function( widget ) {
							widget.setData( 'height', this.getValue() );
						},
					},
					// Create the width text field
					{
						id: 'videoWidth',
						type: 'text',
						label : editor.lang.youtube_widget.txtVideoWidth,
						width: '80px',
						setup: function( widget ) {
							this.setValue( widget.data.videoWidth );
						},
						commit: function( widget ) {
							widget.setData( 'videoWidth', this.getValue() );
						},
					},
					// Create the height text field
					{
						id: 'videoHeight',
						type: 'text',
						label : editor.lang.youtube_widget.txtVideoHeight,
						width: '80px',
						setup: function( widget ) {
							this.setValue( widget.data.videoHeight );
						},
						commit: function( widget ) {
							widget.setData( 'videoHeight', this.getValue() );
						},
					},
          // Create start at field
					{
						id : 'txtStartAt',
						type : 'text',
						label : editor.lang.youtube_widget.txtStartAt,
						width: '200px',
						setup: function( widget ) {
							this.setValue( widget.data.txtStartAt );
						},
						commit: function( widget ) {
							widget.setData( 'txtStartAt', this.getValue() );
						},
					},
          // Create Check privacy checkbox
					{
						id : 'chkPrivacy',
						type : 'checkbox',
						label : editor.lang.youtube_widget.chkPrivacy,
						setup: function( widget ) { this.setValue( widget.data.chkPrivacy ); },
						commit: function( widget ) { widget.setData( 'chkPrivacy', this.getValue() ); },
					},
          // Create Auto play checkbox
					{
						id : 'chkAutoplay',
						type : 'checkbox',
						label : editor.lang.youtube_widget.chkAutoplay,
						setup: function( widget ) { this.setValue( widget.data.chkAutoplay ); },
						commit: function( widget ) { widget.setData( 'chkAutoplay', this.getValue() ); },
					},
          // Create Related checkbox
					{
						id : 'chkRelated',
						type : 'checkbox',
						label : editor.lang.youtube_widget.chkRelated,
						setup: function( widget ) { this.setValue( widget.data.chkRelated ); },
						commit: function( widget ) { widget.setData( 'chkRelated', this.getValue() ); },
					},
          // Create Older code checkbox
					{
						id : 'chkOlderCode',
						type : 'checkbox',
						label : editor.lang.youtube_widget.chkOlderCode,
						setup: function( widget ) { this.setValue( widget.data.chkOlderCode ); },
						commit: function( widget ) { widget.setData( 'chkOlderCode', this.getValue() ); },
					},
				]
			},
      // End tab two

      {
				id: 'tab3',
        label: editor.lang.youtube_widget.captionTab,
				elements: [
					// Create the URL text field.
					{
						id : 'txtCaptionTitle',
						type : 'text',
						label : editor.lang.youtube_widget.txtCaptionTitle,
						autofocus : 'autofocus',
						setup: function( widget ) {
							this.setValue( widget.data.txtCaptionTitle );
						},
						commit: function( widget ) {
							widget.setData( 'txtUrl', this.getValue() );
						},
					},
					// Add a hr line between the embed and url field
					{
						type : 'html',
						html : '<hr>'
					},
				  // Create the embed code text area.
          {
						id : 'txtCaption',
						type : 'textarea',
						label : editor.lang.youtube_widget.txtCaption,
						setup: function( widget ) {
							this.setValue( widget.data.txtCaption );
						},
						commit: function( widget ) {
							widget.setData( 'txtCaption', this.getValue() );
						},
					},
        ]
      },

		]
	};
});
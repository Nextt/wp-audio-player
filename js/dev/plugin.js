(function($) {
	"use strict";
	
	// Wait until after everything is loaded
	$(window).load(function() {

		// After that, if the user is using Firefox, we need to force the player to display
		if( $.browser.mozilla ) {
			$( 'audio.wp-audio-player' ).css( 'display', 'block' );
		} // end if
		
	});
}(jQuery));
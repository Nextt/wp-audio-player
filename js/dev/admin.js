(function($) {
	"use strict";
	$(function() {
	
		$('#wp-audio-player-media')
			.children('option')
			.click(function(evt) {
				$('input#wp_audio_url').val( $(this).val() );
			});
		
	});
}(jQuery));
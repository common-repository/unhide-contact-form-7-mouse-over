jQuery( document ).ready(function() {	
	
	if( jQuery('.wpcf7-mail-sent-ok').length ) {
		var successMsg = jQuery('.wpcf7-mail-sent-ok');
		alert( successMsg.text() );
		successMsg.remove();	
	}

	console.log('rodando fancy');
	jQuery('input[name=your-name]').watermark("Nome:");
	jQuery('input[name=your-email]').watermark("E-mail:");
	jQuery('input[type=tel]').watermark("Telefone:");
	jQuery('input[type=url]').watermark("Site:");
	jQuery('textarea[name=your-message]').watermark("Mensagem:");
	

	console.log( jQuery('.wpcf7').find('p') );

	jQuery('.wpcf7').find('p').eq(0).css('margin-bottom',0);
	jQuery('.wpcf7').find('p').eq(3).css('margin-bottom',"8px");

	var contactFormWrapper = jQuery('.inner-footer-wrapper');
	var contactForm = jQuery('.wpcf7');
	contactFormWrapper.remove();

		jQuery('#rpwXK1NVYXE1FI5WJRTCX8ADTXNN93WMJMM').mouseover(function() {
			console.log('mouse hover');
			jQuery( this ).children().remove();
			jQuery( this ).append( contactForm );
		});

	if( jQuery('.wpcf7-mail-sent-ok').length ) {
		var successMsg = jQuery('.wpcf7-mail-sent-ok');
		alert( successMsg.text() );
		successMsg.remove();	
	}		
	
 
});

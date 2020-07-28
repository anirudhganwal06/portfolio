$(document).ready(() => {
	$('.welcomeMessage')
		.css('font-size', '70px')
		.text('Hey!')
		.fadeIn(15)
		.fadeOut(15, () => {
			$('.welcomeMessage')
				.css('font-size', '50px')
				.text('Welcome!')
				.fadeIn(15)
				.fadeOut(15, () => {
					$('.welcomeMessage')
						.text('I am Anirudh!')
						.fadeIn(15)
						.fadeOut(15, () => {
							$('.welcomeMessage')
								.text('Anirudh\'s Portfolio')
								.fadeIn();
							if ($(window).width() <= 1300) {
								$('.leftBox').css('height', '50%');
							} else {
								$('.leftBox').css('width', '50%');
							}
							$('.rightBox').fadeIn(15);
							$('#nav').fadeIn(15);
							$('.option').click(e => {
								$('#nav .option').removeClass('selected');
								$('#' + e.currentTarget.id).addClass('selected');
								$('.content').css('display', 'none');
								const id = e.currentTarget.dataset['target'];
								$(id).fadeIn(2000);
							});

						});
				});
		});
});

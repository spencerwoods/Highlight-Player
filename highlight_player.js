/**
* Highlight Player JS
* Author: Spencer Woods
* Site: http://fifthlinkdesigns.com
*/

$(function(){

	$('#highlight_player_area').html('<div class="highlight_player_item highlight_movie"> <iframe width="620" height="349" src="http://www.youtube.com/embed/CdDRiGg2lTs" frameborder="0" allowfullscreen></iframe> </div>');

	$('.highlight_strip_item a:first').addClass("focus");

	$('a').click(fncClick);

		function fncClick(e){

			var hrefVar = $(this).attr("href");
			var movieCheck = $(this).hasClass('movie');

			$('.highlight_strip_item a').removeClass('focus');
			$(this).addClass('focus');

			if(movieCheck == true){

				hrefVar = $(this).attr("href");

				var movieIndex = hrefVar.split('/'); http://img.youtube.com/vi/_7ssn3bUxHE/default.jpg

				var movieID = movieIndex[4]; // _7ssn3bUxHE

				var movieVar = 'http://www.youtube.com/embed/'+movieID;

				var movieWidth = 620;

				var movieHeight = 349;

				var movieFrame = 0;

				$('#highlight_player_area').fadeIn("slow", function(){
					$(this).html("<iframe width='"+movieWidth+"' height='"+movieHeight+"' src='"+movieVar+"' frameborder='"+movieFrame+"' allowfullscreen></iframe>");
				});

			}else{
				
				$('#highlight_player_area').fadeIn("slow", function(){
					$(this).html("<img src='"+hrefVar+"'/>");
				});
			
			}
			
			e.preventDefault();
		
		}

});

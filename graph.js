//! WORK IN PROGRESS !//

// TO DO //
// percentage on .bar to change based on percentage width.

$(document).ready(function() {

  var barOne = $('#bar-one');
  var barTwo = $('#bar-two');
  var barThree = $('#bar-three');
  var barFour = $('#bar-four');
  var barFive = $('#bar-five');
  var barSix = $('#bar-six');


  var barOneWidth = 70;
  var barTwoWidth = 75;
  var barThreeWidth = 80;
  var barFourWidth = 75;
  var barFiveWidth = 50;
  var barSixwidth = 60;


  // var getPercentWidth = function(element) {
  //   var parentWidth = element.offsetParent().width();
  //   var percent = 100 * width / parentWidth;
  //   return percent;
  // };

  $('.head-box').click(function() {
    $(this).toggleClass('max');
    barOne.toggleClass('one');
    barTwo.toggleClass('two');
    barThree.toggleClass('three');
    barFour.toggleClass('four');
    barFive.toggleClass('five');
    barSix.toggleClass('six');
		
  });
	
			$('.head-boxtwo').click(function() {
    $(this).toggleClass('max');
    barSeven.toggleClass('Seven');
    barEight.toggleClass('Eight');
    barNine.toggleClass('Nine');
    barTen.toggleClass('Ten');
    barEleven.toggleClass('Eleven');
    
		}); 
	
});
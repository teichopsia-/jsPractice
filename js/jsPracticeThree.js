// If the slideshow is paused or not
var paused = false;

// Sets the src of the bigImage to be the same as the thumbnail when clicked
$(".crop-img").click(function(){
  $("#bigImage").attr('src',
    $(this).attr('src'));
});


// Adding a scroll tab to change the images
// Counter to keep track of the image that is being shown.
var counter = 1;
// Virtually click on the current image to load into bigImage
$('#image' + counter).click();

// Clicking on the backward button selects previous image
$('#backward').click(function () {
  counter--;
  // If below 1, loop round to 4 (last image)
  if (counter < 1) {
    counter = 4;
  }
  // Virtually click on the current image to load it into the bigImage
  $('#image' + counter).click();
})

$('#forward').click(function () {
  counter++;
  if (counter > 4) {
    counter = 1;
  }
  $('#image' + counter).click();
})

// When click on bigImage toggle pausing. Setpaused to not paused, i.e.
// if it is paused set it to not paused, if it is not paused set it to
// paused
$('#bigImage').click(function() {
  paused = !paused;
})

// set interval makes it move forward every 3 seconds
setInterval(function () {
  // first check if it is paused
  if (!paused) {
    $("#forward").click();
  };
}, 3000);

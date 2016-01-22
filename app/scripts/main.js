jQuery(document).ready(function ($) {
  var images = $('img').filter(function () {
    return ($(this).width() > 600) || ($(this).height() > 300);
  });
  var strVar = "<a href='https://egor.pe' target='_blank' rel='nofollow'><img src='http://placehold.it/728x90&text=Some Banner' /></a>";
  images.each(function (i) {
    if (i == 0 || i == images.length - 1) {
      $(this).after('<div class="eneset_ad_image" id="eneset_ad_image_' + i + '"><div class="eneset_ad_image_content">' + strVar + '</div>' +
        '<span class="eneset_ad_image_close_x" id="eneset_ad_image_close_x_' + i + '">&#x2716;</span>' +
        '</div>');
      $('#eneset_ad_image_close_x_' + i + '').click(function (event) {
        $('#eneset_ad_image_' + i + '').hide();
        $('#eneset_ad_image_' + i + '').css('visibility', 'hidden');
      });
    }
  });
});

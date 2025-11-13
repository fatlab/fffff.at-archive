function setOdysseyThumbnail() {

  $('.article-type-common:not(.checked-item)').each(function () {

    $(this).addClass('checked-item');
    var thumb = $(this).find('.thumbnail');
    var bgImg = thumb.css('background-image');
    var thumbUrl = bgImg ? bgImg.replace(/(url\(|\)|")/g, '') : bgImg;
    var img = $(this).find('.thumbnail .img-thumbnail')
    var hasThumb = true;
    var isResizeType = $(this).hasClass('article-type-resize');


    // resize no-img
    if (isResizeType && (!img.attr('src') || img.attr('src') == 'none'))
      img.attr('src', '//t1.daumcdn.net/tistory_admin/assets/skin/no-image.png');


    // smart crop thumbnail
    if (!isResizeType) {
      var thumbType = '';
      if (thumbUrl) {
        if ($(this).hasClass('article-type-crop')) {
          thumbType = 'S640x460.fwebp.q85'
        } else if ($(this).hasClass('article-type-thumbnail')) {
          thumbType = 'S160x108.fwebp.q85';
        } else if ($(this).hasClass('article-type-poster')) {
          thumbType = 'S200x265.fwebp.q85';
        }
      }

      if (thumbType != '') {
        var newThumbUrl = 'url(https://i1.daumcdn.net/thumb/' + thumbType + '/?scode=mtistory2&fname=' + encodeURIComponent(thumbUrl) + ')';
        thumb.css("background-image", newThumbUrl);
      }
    }
  });


  // resize for notice
  if ($('.area-view .article-type-resize').length > 0) {
    $('.notice-thumbnail:not(.checked-item)').each(function () {
      $(this).addClass('checked-item');
      var imgUrl = $(this).css('background-image').replace(/(url\(|\)|")/g, '');
      if (imgUrl != 'none') $(this).find('.img-thumbnail').attr('src', imgUrl);
    });
  }
}

// setThumbnail();
(function ($) {
  $(document).ready(function () {
    setOdysseyThumbnail();
  })
})(tjQuery);
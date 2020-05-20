// WHEN QR BUTTON IS CLICKED
$('.qrview').click(function () {
  var link = $(this).attr('qr');
  var lang = $(this).attr('fl');
  $('#qrview img').attr('src', 'https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=' + 'https://font-freak.github.io/1/' + lang + '.html%23' + link);
  $('#qrview').fadeIn();
});
$('#qrview').click(function () {
  $(this).fadeOut();
  $('#qrview img').attr('src', '');
});

// WHEN SHARE BUTTON IS CLICKED
$('.shareview').click(function () {
  var page = $(this).attr('sp');
  var item = $(this).attr('sl');
  var link = 'https://font-freak.github.io/1/' + page + '.html%23' + item;
  if (page == 'bn') var lang = 'Bengali';
  if (page == 'en') var lang = 'English';
  var title = $(this).attr('st');
  var text = title + ' ' + lang + ' Font for Android';
  $('#facebook-share').attr('href', 'https://www.facebook.com/sharer.php?t=' + text + '&u=' + link);
  $('#twitter-share').attr('href', 'https://twitter.com/intent/tweet?text=' + text + '&url=' + link);
  $('#reddit-share').attr('href', 'https://www.reddit.com/submit?title=' + text + '&url=' + link);
  $('#evernote-share').attr('href', 'https://www.evernote.com/clip.action?title=' + text + '&url=' + link);
  $('#mail-share').attr('href', 'mailto:?subject=' + text + '&body=' + link);
  $('#skype-share').attr('href', 'https://web.skype.com/share?url=' + link + '&text=' + text);
  $('#whatsapp-share').attr('href', 'https://web.whatsapp.com/send?text=' + link);
  $('#telegram-share').attr('href', 'https://t.me/share/url?url=' + link + '&text=' + text + '&to=');
  $('#shareview').fadeIn();
});
$('#shareview').click(function () {
  $(this).fadeOut();
});

// WHEN FONT PREVIEW IS CLICKED
$('.preview').click(function () {
  var img = $(this).attr('si');
  var txt = $(this).attr('st');
  $('#preview img').attr('src', 'img/preview/' + img + '.webp');
  $("#pretext").text(txt);
  $('#preview').fadeIn();
});
$('#preview').click(function () {
  $(this).fadeOut();
  $('#preview img').attr('src', '');
});

// CHECK FOR QUERY ON SEARCH PAGE
if (location.href.match(/search.html/)) {
  if (location.href.match(/q/) > -1) {
    document.getElementById("noquery").style.display = "block";
  }
}
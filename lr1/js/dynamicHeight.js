var cw = $('.dynamic-img-size').height();
window.alert(cw);
var cv = window.screen.height;
window.alert(cv);
$('.dynamic-img-size').css({
    'width': ((cv-cw)/cv) + 'px'
});


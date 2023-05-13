//event pada klik
$('.page-scroll').on('click',function(){
    var href= $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('body').animate({
        scrollTop: elemenTujuan.offset().top -
    });

});
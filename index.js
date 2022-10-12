const menuTombol = document.querySelector('.menu-tombol input');
const nav = document.querySelector('nav ul');

menuTombol.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

$(document).ready(function () {
    $("nav ul li a").click(function () {
        $(".konten").slideToggle("fast");

        $('nav ul li.off').each(function (index, el) {
            var kontenID = el.id.split('-')[1];
            $('.konten#' + kontenID).hide();
        });
    });

    $('nav').delegate('.off', 'click', function (event) {
        var pilihKonten = this.id.split('-')[1];
        console.log(pilihKonten);
        document.location.hash = pilihKonten;

        $('.konten:visible').fadeOut('slow', function () {
            $('.konten#' + pilihKonten).fadeIn('slow');
        });

        var $this = $(this);
        $this.removeClass('off').addClass("on");
        $this.siblings().addClass('off').removeClass('on');

    });
});

jQuery(document).ready(function () {

    jQuery('.progres-persentase').each(function () {
        jQuery(this).find('.progres-konten').animate({
            width: jQuery(this).attr('data-percentage')
        }, 2000);

        jQuery(this).find('.tanda-progres').animate(
            { left: jQuery(this).attr('data-percentage') },
            {
                duration: 2000,
                step: function (now, fx) {
                    var data = Math.round(now);
                    jQuery(this).find('.percent').html(data + '%');
                }
            });
    });
});
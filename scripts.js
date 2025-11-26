$(document).ready(function () {
    let imagenes = [
        "img/banner1.webp",
        "img/banner2.webp",
        "img/banner3.webp"
    ];

    let i = 0;

    setInterval(function(){
        i = (i + 1) % imagenes.length;
        $("#banner-img").fadeOut(500, function(){
            $(this).attr("src", imagenes[i]).fadeIn(500);
        });
    }, 3000);
});

$(document).ready(function() {

    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // header on mouse over

    $('.rubriques').on({
            mouseenter: function() {
                $(this).css("text-decoration", "line-through")
            },
            mouseleave: function() {
                $(this).css("text-decoration", "none")
            }
        })
        //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        //titre animation

    $('H1').animate({
        left: '15px'
    }, 5000)
    $('.description').fadeIn(3500)
    $('H3').fadeIn(3500)

    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // social media hover
    $('.mediahover').on({
        mouseenter: function() {
            $(this).css('color', 'white')
        },
        mouseleave: function() {
            $(this).css('color', 'black')
        }
    })

    $('.zoom').on({
        mouseenter: function() {
            $(this).css({
                "transform": "scale(1.1)",
                "transition": " all 0.5s ease-in-out"
            })
        },
        mouseleave: function() {
            $(this).css({
                "transform": "scale(1)",
                "transition": " all 0.5s ease-in-out"
            })
        }
    })



});
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// slide heros
var i = 0;
var images = ['1.png', '2.png', '3.png', '4.png', '5.png'];

function slideimg() {
    document.slider.src = './assets/img/heroslider' + images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideimg()", 2000);
}
window.load = slideimg();
$(document).ready(function() {

    $('.card-hero').on({
        mouseenter: function() {
            $(this).css({
                "transform": "scale(1.05)",
                "cursor": "pointer",
                "transition": " all 0.5s ease-in-out",
                "color": "var(--white-ad-color)",
                "background-color": "var(--black-ad-color)"

            })
        },
        mouseleave: function() {
            $(this).css({
                "transform": "scale(1)",
                "cursor": "pointer",
                "transition": " all 0.5s ease-in-out",
                "color": "var(--black-ad-color)",
                "background-color": "var(--primary-ad-color)"

            })
        }
    })

    // ****************************************************************************************************
    // social media hover
    $('.mediahover').on({
            mouseenter: function() {
                $(this).css('color', 'white')
            },
            mouseleave: function() {
                $(this).css('color', 'black')
            }
        })
        // ****************************************************************************************************

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



});
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


$('H1').animate({
    left: '10px'
}, 5000)
$('.description').fadeIn(3500)

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
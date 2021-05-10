 // input 'jquery' and button clicked, four images into screen, width 200px.
// click second image, border bold.

// Warren & Leighai worked on this
function callJquery()
{
    var imgNum = [1, 2, 3, 4]
    $.each(imgNum, function(i,v)
    {
        $('<img/>')
            .attr('id', i)
            .attr('src', './images/' + v + '.jpg')
            .attr('width', '200px')
            .appendTo('#stage')
    })

    $('img:nth-child(2)').on('click', function(){
        $(this).css('border','solid 5px red')
    })
}
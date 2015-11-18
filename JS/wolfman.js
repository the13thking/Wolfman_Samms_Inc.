$(document).ready(function()
{
    $("#imgAnimate").hover(
        function()
        {
            $(this).attr("src", "images/giphy.gif");
        },
        function()
        {
            $(this).attr("src", "images/gifPic.png");
        });
});
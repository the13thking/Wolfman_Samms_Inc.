$(document).ready(function()
{
    $("#imgAnimate1").hover(
        function()
        {
            $(this).attr("src", "images/giphy.gif");
        },
        function()
        {
            $(this).attr("src", "images/gifPic.png");
        });
    $("#imgAnimate2").hover(
        function()
        {
            $(this).attr("src", "images/giphy2.gif");
        },
        function()
        {
            $(this).attr("src", "images/gifPic2.png");
        });
});
// 格式化日期对象为字符串
function formatDateToString() {
    var oDate = new Date();
    var iYear   = oDate.getFullYear();
    var iMonth  = addPrefixZero(oDate.getMonth() + 1);
    var iDate   = addPrefixZero(oDate.getDate());
    var iHour   = addPrefixZero(oDate.getHours());
    var iMinute = addPrefixZero(oDate.getMinutes());
    var iSecond = addPrefixZero(oDate.getSeconds());

    return '现在时刻：' + '<span>' + iYear + '</span>/<span>' + iMonth + '</span>/<span>' + iDate + '</span><span class="hour">' + iHour + '</span>:<span>' + iMinute + '</span>:<span>' + iSecond + '</span>';
}
// 添加前缀0
function addPrefixZero(num) {
    if(num < 10) {
        return '0' + num;
    }
    return num;
}
$(function ($) {
    /*login*/
    $("#loginData").html(formatDateToString());
    setInterval(function () {
        $("#loginData").html(formatDateToString());
    }, 1000);

    /*my*/
    var iTimer = null;
    $(".loginUser").on('mouseenter', function () {
        clearTimeout(iTimer);
        $(".loginUls").css('display', 'block');
    });
    $(".loginUser").on('mouseleave', function () {
        clearTimeout(iTimer);
        iTimer = setTimeout(function () {
            $(".loginUls").css('display', 'none');
        }, 50);
    });
    $(".loginUls").hover(function () {
        clearTimeout(iTimer);
    }, function () {
        $(".loginUls").css('display', 'none');
    });

    /*section*/
    $('li').click(function (ev) {
        ev.stopPropagation();
    }).has('ul').click(function () {
        $(this).toggleClass('b').children('ul').stop(true).toggle('normal');
    });
});
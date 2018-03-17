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
//发布内容
function send() {
    var sWrite = $('#write').val();
    var sBoxInput = $('.boxInput').val();
    var sData = $('.data').val();
    if(sWrite === '' || sBoxInput === '' || sData === '') {
        alert('亲，标题、内容和发布时间都不可以为空哦！');
    } else {
        var oNewLi = document.createElement('li');
        oNewLi.innerHTML = '<h3 class="h3">'+ sBoxInput +'<a title="删除" href="javascript:;" class="no">&times;</a></h3><div class="contentP">'+ sWrite +'</div><p class="contentData">' + '发布时间：' + sData + '</p>';
        $('.contentUls').append(oNewLi);
        $('#empty').css({"display":"none"});
    }
}
$(function ($) {
    /*login-data*/
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

    /*section-left*/
    $('li').click(function (ev) {
        ev.stopPropagation();
    }).has('ul').click(function () {
        $(this).toggleClass('b').children('ul').stop(true).toggle('normal');
    });

    /*section-right*/
    /*$('.no').on("click",function () {
        $(this).parent().parent().css({"display":"none"});
    });*/
    $(".no").on("click",function(event){
        var target = $(event.target);
        console.log(target.parent().parent());
        target.parent().parent().css({"display":"none"});
    });
    $('#no1').on("click",function () {
        $('#empty').css({"display":"none"});
    });
    $('#right-btn').on("click",function () {
        $('#empty').css({"display":"none"});
    });
    $('.sectionButton').on("click",function () {
        $('#empty').css({"display":"block"});
        $('#box').animate({top:"0"}, 1000);
    });
    $('#left-btn').on("click", function () {
        send();
    });
    /*//通过事件委托，将A的删除委托给ul
    $('.contentUls').on("click",function (ev) {
        var e  = ev || window.event;
        var oT = e.target ||e.srcElement;
        if (oT.nodeName === 'A') {
            $('.contentUls').remove(oT.parentNode);
        }
    });*/
});
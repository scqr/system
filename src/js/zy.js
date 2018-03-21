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
    if (sWrite === '' || sBoxInput === '' || sData === '') {
        alert('亲，标题、内容和发布时间都不可以为空哦！');
    } else {
        $("#contentUls").append("<li>");
        $("#contentUls").children('li').last().addClass("li").html(
            `
            <h3 class="h3">${sBoxInput}<a title="删除" href="javascript:;" class="no">&times;</a></h3>
            <div class="contentP">${sWrite}</div>
            <p class="contentData">发布时间：${sData}</p>
            `
        );
        $('#empty').css({ "display": "none" });
        $('#write').val('');
        $('.boxInput').val('');
        $('.data').val('');
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



// 操作添加管理员
//划入添加视频让遮罩层出现
$(".add").on("mouseenter", function () {
    $(".add1").css("display", "block");
});
//划出时取消添加视频遮罩层出现
$(".add").on("mouseleave", function () {
    $(".add1").css("display", "none");
});
$("#acountMsg123").on("mouseleave", function () {
    $(".add1").css("display", "none");
});


//点击遮罩层，其本身消失 后出现添加管理员框
$(".add1").on("click", function () {
    $(this).css("display", "none");
    $("#acountMsg123").css("display", "block");
    $(".acountMsg").css("display", "block");
});

//点击消失
$(".closeTan").on("click", function () {
    $("#acountMsg123").css("display", "none");
    $(".acountMsg").css("display", "none");
})
//点击消失
$(".acountMsg").on("click", function () {
    $("#acountMsg123").css("display", "none");
    $(this).css("display", "none");
})



//操作添加视频
//进入出现
$(".addVideo").mouseenter(function () {
    $(".zdc").css("display", "block");
})
//划出消失
$(".addVideo").mouseleave(function () {
    $(".zdc").css("display", "none");
})


//选项卡切换
    //三大部分
    $(".sectionUls .a").bind("click",function(){
        let iIndex = $(this).index();
        $('.sectionUls .a').removeClass('hover').eq(iIndex).addClass('hover');
        $('.ttt').css('display', 'none').eq(iIndex).css('display', 'block');
    })

    //第一小部分
    
   //第二小部分  
    $('.List2').bind('click', function () {
    let iIndex = $(this).index();
    $('.panel2').css('display','none').eq(iIndex).css('display', 'block');
});


   //第三小部分
    $('.mianlist3').bind('click', function () {
    let iIndex = $(this).index();
        $('.qg').css('display', 'block');
        $('.panelOne').css('display', 'none');
        $('.panelTwo').css('display', 'none');
        $('.panelThree').css('display', 'none');
   });
    $('.List3One').bind('click', function () {
    let iIndex = $(this).index();
        $('.panelOne').css('display','block');
        $('.panelTwo').css('display','none');
        $('.panelThree').css('display', 'none');
        $('.qg').css('display', 'none');
   });
    $('.List3Two').bind('click', function () {
    let iIndex = $(this).index();
        $('.panelOne').css('display','none');
        $('.panelTwo').css('display','block');
        $('.panelThree').css('display', 'none');
        $('.qg').css('display', 'none');
   });
    $('.List3Three').bind('click', function () {
    let iIndex = $(this).index();
        $('.panelOne').css('display','none');
        $('.panelTwo').css('display','none');
        $('.panelThree').css('display', 'block');
        $('.qg').css('display', 'none');
   });


    /*section*/
    $('li').click(function (ev) {
        let iIndex = $(this).index();
        ev.stopPropagation();
    }).has('ul').click(function () {
        $(this).children('ul').stop(true).toggle("normal");
    });

    /*删除公告*/
    $("#contentUls").on("click", function (event) {
        var $target = $(event.target);
        if ($target.attr("class") == "no") {
            $target.parent().parent().remove();
        }
    });
    $('.no').on("click", function () {
        $('.li').css({ "display": "none" });
    });


    $('#no1').on("click", function () {
        $('#empty').css({ "display": "none" });
    });
    $('#right-btn').on("click", function () {
        $('#empty').css({ "display": "none" });
    });
    $('.sectionButton').on("click", function () {
        $('#empty').css({ "display": "block" });
        $('#box').animate({ top: "0" }, 1000);
    });
    $('#left-btn').on("click", function () {
        send();
    });
});

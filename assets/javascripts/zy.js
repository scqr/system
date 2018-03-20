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
    // var sWrite = $('#write').val();
    // var sBoxInput = $('.boxInput').val();
    // var sData = $('.data').val();
    // if(sWrite === '' || sBoxInput === '' || sData === '') {
    //     alert('亲，标题、内容和发布时间都不可以为空哦！');
    // } else {
    //     var oNewLi = document.createElement('li');
    //     oNewLi.innerHTML = '<h3 class="h3">'+ sBoxInput +'<a title="删除" href="javascript:;" class="no">&times;</a></h3><div class="contentP">'+ sWrite +'</div><p class="contentData">' + '发布时间：' + sData + '</p>';
    //     $('#contentUls').append(oNewLi);
    //     $('#empty').css({"display":"none"});
    // }
    var sWrite = $('#write').val();
    var sBoxInput = $('.boxInput').val();
    var sData = $('.data').val();
    if(sWrite === '' || sBoxInput === '' || sData === '') {
        alert('亲，标题、内容和发布时间都不可以为空哦！');
    } else {
        var contentUls = $("#contentUls");
        contentUls.append("<li>"); 
        contentUls.children('li').last().addClass("li").html(
            `
            <h3 class="h3">${sBoxInput}<a title="删除" href="javascript:;" class="no">&times;</a></h3>
            <div class="contentP">${sWrite}</div>
            <p class="contentData">发布时间：${sData}</p>
            `
             )
        $('#empty').css({"display":"none"});
        //var oNewLi = document.createElement('li');
        //oNewLi.innerHTML = '<h3 class="h3">'+ sBoxInput +'<a title="删除" href="javascript:;" class="no">&times;</a></h3><div class="contentP">'+ sWrite +'</div><p class="contentData">' + '发布时间：' + sData + '</p>';
        //$('#contentUls').append(oNewLi);
        $('#write').val('');
        $('.boxInput').val('');
        $('.data').val('');
    }
    

}


(function ($) {

    // $(".no").on("click",function(event){
    //     console.log($(".no"));
    //     var $target = $(event.target);
    //     console.log($target.parent().parent().parent());
    //     if($target.hasClass('no')){
    //         $target.parent().parent().parent().children().remove();
    //     }
    // });
    
    //模态窗口的差差
    $('#no1').on("click",function () {
        $('#empty').css({"display":"none"});
    });

    //模态窗口的取消
    $('#right-btn').on("click",function () {
        $('#empty').css({"display":"none"});
    });

    // 新建公告
    $('.sectionButton').on("click",function () {
        $('#empty').css({"display":"block"});
        $('#box').animate({top:"0"}, 1000);
    });
    // 模态窗口的发布
    $('#left-btn').on("click", function () {   
        send();
    });

    //点击删除每一个li
     $("#contentUls").click(function(event){
        var $target = $(event.target);
        var $targetCurent = $(event.Currenttarget);
        console.log($target + "我是事件源");
        console.log($targetCurent + "我是当前事件源");
        if($target.attr("class")== "no"){
            $target.parent().parent().remove();
        }
     })

})(jQuery);
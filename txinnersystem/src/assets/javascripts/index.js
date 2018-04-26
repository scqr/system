

// 操作添加管理员
//划入添加视频让遮罩层出现
$(".add").on("mouseenter",function(){
    $(".add1").css("display","block");
});
//划出时取消添加视频遮罩层出现
$(".add").on("mouseleave",function(){
    $(".add1").css("display","none");
});
$("#acountMsg123").on("mouseleave",function(){
    $(".add1").css("display","none");
});


//点击遮罩层，其本身消失 后出现添加管理员框
$(".add1").on("click",function(){
    $(this).css("display","none");
    $("#acountMsg123").css("display","block");
    $(".acountMsg").css("display","block");
});

//点击消失
$(".closeTan").on("click",function(){
    $("#acountMsg123").css("display", "none");
    $(".acountMsg").css("display", "none");
})
//点击消失
$(".acountMsg").on("click",function(){
    $("#acountMsg123").css("display", "none");
    $(this).css("display", "none");
})



//操作添加视频
//进入出现
$(".addVideo").mouseenter(function(){
    $(".zdc").css("display","block");
})
//划出消失
$(".addVideo").mouseleave(function(){
    $(".zdc").css("display","none");
})


//调用进度条插件

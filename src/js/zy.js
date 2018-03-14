/*login*/
// 格式化日期对象为字符串
function formatDateToString() {
    var oDate = new Date();
    var iYear   = oDate.getFullYear();
    var iMonth  = addPrefixZero(oDate.getMonth() + 1);
    var iDate   = addPrefixZero(oDate.getDate());
    var iHour   = addPrefixZero(oDate.getHours());
    var iMinute = addPrefixZero(oDate.getMinutes());
    var iSecond = addPrefixZero(oDate.getSeconds());
    // 获取随机的背景色
    var sBgColor = generatorColor();
    return '<span>' + iYear + '</span>年<span>' + iMonth + '</span>月<span>' + iDate + '</span>日<span>' + iHour + '</span>：<span>' + iMinute + '</span>：<span style="background:'+ sBgColor +';">' + iSecond + '</span>';
}
// 随机生成颜色
function generatorColor() {
    var str = '#';
    for(var i = 0; i < 6; i++) {
        str += Math.round(Math.random() * 15).toString(16);
    }
    return str;
}
// 添加前缀0
function addPrefixZero(num) {
    if(num < 10) {
        return '0' + num;
    }
    return num;
}
$(function ($) {
    $("#data").html(formatDateToString());
    setInterval(function () {
        $("#data").html(formatDateToString());
    }, 1000);
});
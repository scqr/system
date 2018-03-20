/*
	封装通过ID获取HTML元素
*/
function $(id) {
	return document.getElementById(id);
}

/*
	过滤敏感词
	input：被过滤的字符串
	sensitiveWords：敏感词
	replace：被替换后的词语
*/
function filterWords(input, sensitiveWords, replace) {
	/*if( input.indexOf(sensitiveWords) !== -1 ) {
		input = input.replace(sensitiveWords, replace);
	}*/

	while(input.indexOf(sensitiveWords) !== -1) {
		input = input.replace(sensitiveWords, replace);
	}

	return input;
}

/*
    封装AJAX函数
    type：请求方式，默认值为GET
    url：请求地址
    async：是否异步，默认值为true
    data：网后台传送的数据，数据格式为对象或者字符串，默认值为空
    success：请求成功以后的回调函数
    beforeSend：发送之前执行的回调函数
    complete：ajax执行完毕以后执行的回调函数
    error：请求失败后执行的回调函数
*/
function ajax({ type = 'GET', url, async = true, data = '', beforeSend, success, error, complete }) {
	return new Promise(function (resolve, reject) {
		// 将请求方式强制转换成大写
		type = type.toUpperCase();
		// 创建ajax对象
		if (window.ActiveXObject) {
			var oXhr = new window.ActiveXObject('Microsoft.XMLHTTP');
		} else {
			var oXhr = new XMLHttpRequest();
		}

		// 允许发送cookie
		oXhr.withCredentials = true;

		// 将对象格式的数据转换成字符串
		if (typeof data === 'object') {
			var sData = '';
			for (var sAttr in data) {
				sData += sAttr + '=' + encodeURIComponent(data[sAttr]) + '&';
			}

			data = sData.slice(0, -1);
		}

		// 如果当前请求是GET请求
		if (type === 'GET') {
			url += '?' + data;
		}

		// 设置请求方式、地址、是否异步
		oXhr.open(type, url, async);

		// 监听readyStats状态的改变
		oXhr.onreadystatechange = function () {
			if (oXhr.readyState === 4) {
				if (oXhr.status === 200) {
					success && success(oXhr.responseText);
					resolve(oXhr.responseText);
				} else {
					error && error(oXhr.status, oXhr.statusText);
					reject([oXhr.status, oXhr.statusText]);
				}
				// 执行完成动作的回调函数
				complete && complete();
			}
		};

		beforeSend && beforeSend();

		// 如果是POST请求
		if (type === 'POST') {
			oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			// 发送请求
			oXhr.send(data);
		} else {
			// 发送请求
			oXhr.send();
		}
	});
}



//正则封装
//参数：
//正则类型（如：邮箱，手机号，身份证号等等）
//要验证的字符串
//返回值：true：验证通过；false：验证不通过；

function checkAll(type,str){
	switch(type){
		case "email": var reg = /^\w+@\w+\.(com|cn|net|cc|com\.cn)$/;break; 
		case "idCard": var reg = /^[1-9]\d{16}[0-9xX]$/;break; 
		case "date": var reg = /^\d{4}[\/\-\.](0[1-9]|1[0-2])[\/\-\.]\d{2}$/;break; 
		case "ip": var reg =/^((\d|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(\d|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;break; 
		default:;
	}
	if(reg){
		return reg.test(str);	
	}else{
		return false;
	}
}


//带有界面元素，并且不正确时显示 ×；正确时显示 √
//参数：
//正则类型（如：邮箱，手机号，身份证号等等）
//要验证的字符串
//显示×或者√的元素；（即提示信息显示在哪个元素上）
//返回值：无

function checkAllandUI(type,str,domObj){
	if(checkAll(type,str)){
		domObj.style.color = "green";
		domObj.innerHTML = "√";
	}else{
		domObj.style.color = "red";
		domObj.innerHTML = "×";
	}
}


//兼容获取指定的class名
function getStyle(cls){
	if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {

                if (els[i].className.indexOf(cls + ' ') >=0 || els[i].className.indexOf(' ' + cls + ' ') >=0 || els[i].className.indexOf(' ' + cls) >=0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }
}


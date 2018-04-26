(function($){

	// 全选框复选框函数
	 function choiceCheck(){
		let selectInputs = $('.check'); // 所有勾选框 6个
		let checkAllInputs = $('.check-all') // 全选框 2个
		for(var i = 0; i < selectInputs.length; i++ ){
		   selectInputs[i].onclick = function () {
			   if (this.className.indexOf('check-all') >= 0) { //如果是全选，则吧所有的选择框选中
				   for (var j = 0; j < selectInputs.length; j++) {
					   selectInputs[j].checked = this.checked;
				   }
			   }
			   if (!this.checked) { //只要有一个未勾选，则取消全选框的选中状态
				   for (var i = 0; i < checkAllInputs.length; i++) {
					   checkAllInputs[i].checked = false;
				   }
			   }
		   }
	   }
	   
	//    checkAllInputs[0].checked = true;
	   checkAllInputs[0].onclick();
	 }
	 choiceCheck();

	 //点击删除每一个的函数
	 function deleteOne(){
		let table = $ ("#cartTable");//总的table
		let tbody = $(".sessionaTbody");//
		let operation = $(".operation");
		// console.log(operation);
		//为每一个删除添加事件

		//operation[i].index = i;
		for (var i = 0; i < operation.length; i++ ){
			//operation[i].index = i;
			operation[i].onclick = function(e){
				var conf = confirm('确定删除此商品吗？');
				var e = e || window.event;
				var el = e.target || e.srcElement;
					if (conf) {
						this.parentNode.remove(this);
				}
			}
		}
	}
	// deleteOne();
	
	// 点击全部删除函数
	function deletaAll(){
		deleteAll.onclick = function () {
			let deleteAll = $("#deleteAll");
			var con = confirm('确定删除所有商品吗？'); //弹出确认框
			let tbody = $(".sessionaTbody");
			let tr    = document.getElementsByClassName("tr"); 
			let selectedTotal = document.getElementById('selectedTotal'); 
			
			if (con) {
				for (var i = 0; i < tr.length; i++) {
					
					// 如果被选中，就删除相应的行
					// console.log(tr[i].getElementsByTagName('input'));
					if (tr[i].getElementsByTagName('input')) {
						
						tr[i].parentNode.remove(tr[i]); // 删除相应节点
						i--; //回退下标位置
					}
				}
			} else {
				alert('请选择商品！');
			}
		}

	}
	// deletaAll();

	//添加信息
	$("#addOne").click( function () {
		 $(".addInfor").css("display","block");
		
	});
	$(".quite").click( function () {
		$(".shandow").css("display","none");
	});
	
	$(".sure").click( function () {
		var trNew = document.createElement("tr");
		//trNew.className = "get";//原生加class
		//$(".her").addClass("get");//js加class
		//addClass(trNew,"get");
		var input1 = $(".input1").val();
		var input2 = $(".input2").val();
		var input3 = $(".input3").val();
		var input4 = $(".input4").val();
		trNew.innerHTML = `
		    <td class="checkbox">
			    <input class="check-one check" type="checkbox"/>
			</td>
			<td class="goods">
				<span>${input1}</span>
			</td>
			<td class="release">
				<span>${input2}</span>
			</td>
			<td class="audit">
				<span>${input3}</span>
			</td>
			<td class="subtotal"> ${input4} </td>
			<td class="operation">
				<span class="delete">删除</span>
			</td>
			</tr>`;
		var sessionaTbody = $(".sessionaTbody")
		
		sessionaTbody.append(trNew);
		var input1 = "";
		var input2 = "";
		var input3 = '';
		var input4 = '';		
		$(".addInfor").css("display","none");	
	});



	$("#auditOne").click( function () {
		$(".checking").css("display","block");
	});


  	// //删除每一个对应的li
	// var oList =document.getElementsByClassName('sessionaTbody');
	// var allTr = document.getElementsByClassName('tr');
	// console.log(allTr);
	// var aDelete = byClassName("delete");
	// console.log(aDelete);
	// var sessionaTbody = $(".sessionaTbody");
	// console.log(sessionaTbody);
	// for(var i =0 ;i < aDelete.length; i++){
	// 	aDelete[i].index = i;
	// 	aDelete[i].onclick = function (){
	// 		oList.removeChild(allTr[this.index]);
	// 	};
	// }
	//点击li删除
    // $(".boxL li").bind("click",function () {
    // 	let iIndex = $(this).index();
    // 	$(".boxL li").remove();
    // });

	//点击删除，删除对应的tr信息，冒泡事件，tbody为最大的父盒子
	$(".sessionaTbody").click(function(event){
		var $target = $(event.target);
		console.log($target + "我是事件源");
		if($target.hasClass('delete') && $(".check-one").is(":checked") ){
			//$target.attr('class') == "delete";
			$target.parent().parent().remove();
		}
	});

	
	$('#deleteAll').click(function(){
		$('.check-one').each(function(k,v){
			if($(this).is(":checked")){
				$(this).parent().parent().remove();
			}
		})
	});



	function byClassName(sClassName) {
		if(document.getElementsByClassName) {
			return document.getElementsByClassName(sClassName);
		} else {
			var aTagName = document.getElementsByTagName('*');

			var aRet = [];
			for(var i = 0; i < aTagName.length; i++) {
				if(aTagName[i].className === sClassName) {
					aRet.push(aTagName[i]);
				}
			}
			return aRet;
		}
	};



})(jQuery);

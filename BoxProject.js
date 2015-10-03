// BoxProject 1.0 | MIT license. | Basura Ratnayke (amuthupuwath@gmail.com)
function BoxProject(){
	this.init=function(){
		$('head').append('<style type="text/css">.overlay{background:#008fb1;display:none;height:100%;opacity:.2;position:absolute;top:0;width:100%}.boxContainer{margin:113px auto;background:#f6ffff;border:#008fb1 solid 3px;border-radius:15px;display:none;height:148px;position:relative;width:410px}.boxContainer *{font-family:Calibri, "Calibri Light"}.boxTitleBar{background:#008fb1;border-radius:15px 15px 24px 00;color:#fff;height:24px}.boxTitleBar div{float:left}.boxType{font-size:20px;font-weight:bold;height:10px;margin:-2px 5px 0 10px;width:10px}.boxTitle{font-size:14px;margin-top:1px}.btn{color:#fff;cursor:pointer;font-size:14px}.boxCloseBtn{background:#e01414;border-radius:0 15px 0 0;font-size:18px;float:right;height:24px;padding:0 12px;width:10px}.boxCloseBtn:hover{background:#c71111}.boxBodyText{font-size:14px;margin:20px}.btnConfirm{border-radius:12px;bottom:0;font-weight:bold;height:21px;margin:0 6px 6px 0;padding:2px 35px;position:absolute;right:0;width:20px}.btnConfirm:hover{background:#666363}.kBtn{background:#039dc2}.nBtn{background:#f02323}.boxBodyInput{border:#18accf solid 1px;border-radius:9px;color:#111111;font-size:14px;height:34px;margin-left:20px;padding:0 10px;width:340px}.boxBodyInput:focus{background:#c6f1fb}</style>');
		
		$('body').append('<div class="overlay"></div><div class="boxContainer"><div class="boxTitleBar"><div class="boxType">!</div><div class="boxTitle">Custom Error Title</div><span class="boxCloseBtn btn">X</span></div><div class="boxBody"></div></div>');
		
		$('.boxCloseBtn').click(function(){
			$('.overlay').fadeOut('slow');
			$('.boxContainer').slideUp('slow')
		})
		
	}
	function clear(){//Clears the
		$('.boxCloseBtn').click();
		$('.boxType').html("");
		$('.boxBodyText').html("");
		$('.boxTitle').html("");
		$('.boxBody').html("")
	}
	this.showAlert=function(boxTitle,boxText){				
		clear();		
		$('.boxBodyText').html("!");
		$('.boxBody').append('<div class="boxBodyBtn btn btnConfirm kBtn">OK</div>');
		$('.boxBody').append('<div class="boxBodyText"></div>');
		$('.kBtn').click(function(){
			clear()
		});
		$('.boxBodyText').html(boxText);
		$('.boxTitle').html(boxTitle);
		$('.overlay,.boxContainer').fadeIn('slow');
	}
	this.showConfirm=function(boxTitle,boxText,confirmed){//Show Confirm Box		
		clear();				
		$('.boxType').html("?");
		$('.boxBody').append('<div class="boxBodyText">'+boxText+'</div>').append('<div class="boxBodyBtn btn btnConfirm kBtn">YES</div>').append('<div class="boxBodyBtn btn btnConfirm nBtn">NO</div>');
		
		$('.boxBodyText').html(boxText);
		$('.boxTitle').html(boxTitle);
		$('.overlay,.boxContainer').fadeIn('slow');
		$('.kBtn').css('left','210px');
		$('.btnConfirm').click(function(){
			if($(this).html( )== "YES")
				confirmed()
			clear()
		})
	}
	this.showPrompt=function(boxTitle,boxText,confirmed){		
		clear();
		$('.boxType').html("I");
		$('.boxBody').append('<div class="boxBodyText">'+boxText+'</div>').append('<input id="boxBodyInput" name="boxBodyInput" type="text" class="boxBodyInput" value="Some Text Here"></div>').append('<div class="boxBodyBtn btn btnConfirm kBtn">SUBMIT</div>').append('<div class="boxBodyBtn btn btnConfirm nBtn">CLEAR</div>');
		$('.boxBodyText').css('margin-bottom','4px');
		$('.btnConfirm').css('padding','2px 35px 0 24px').css('width','32px');
		$('.kBtn').css('left','210px');
		$('.nBtn').css('width','30px');
		$('.boxContainer').css('height','156px');
		
		$('.boxBodyText').html(boxText);
		$('.boxTitle').html(boxTitle);
		$('.overlay,.boxContainer').fadeIn('slow');
		
		$('.btnConfirm').click(function(){
			if($(this).html( )== "SUBMIT"){
				confirmed($('#boxBodyInput').val());						
				clear()
			}else
				$('#boxBodyInput').val("")
		})
	}
}

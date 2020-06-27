//javascript
var player_status=1;
var state=0;

function down(){
	  //document.getElementById("main").style="transform:translateY(0) scale(1);border-radius:0;";
    	document.getElementById("bottom_player").className="player_down";
    	//document.getElementById("head_wrapper").style="transform:translateY(0);"
    	document.getElementById("bottom_bar").className="bottom_bar_up";
    	document.getElementById("down").className="down_down";  //invisible
    	document.getElementById("control_bar").className="control_bar_up";
    	//document.getElementById("square_cover_wrapper").style="transform:scale(0.5)";
    	document.getElementById("square_cover_wrapper").style="width:60px;height:60px;border-radius:5px";
    	document.getElementById("square_cover").style="width:60px";
    	var t=setTimeout(function(){location.reload(true);},3000);
}

function up(){
	//window.location.href="#head";
	//document.getElementById("main").style="transform: translateY(-1%) scale(0.95);border-radius:20px;filter:blur(2px)";
	//player_status=1;
	//document.getElementById("main").style="filter:blur(2px);";
	document.getElementById("bottom_player").style="bottom:0;border-radius:20px;opacity:0.96";
	document.getElementById("bottom_bar").style="bottom:-50px";
	document.getElementById("down").style="display:flex";
	document.getElementById("player_txt").style="left:17%";
	//document.getElementById("control_bar").style="bottom:20px";
	//document.getElementById("square_cover_wrapper").style="transform:translateY(200px) translateX(200px) scale(4); border-radius:60px";

	if(player_status==1 && state==1){
		//document.getElementById("square_cover_wrapper").className="rotate";
		document.getElementById("square_cover").style="width:280px;opacity:1";
	    document.getElementById("square_cover_wrapper").style="transition-duration:0.3s;opacity:1";
	    document.getElementById("square_cover_wrapper").style="animation:rotate 25s linear infinite;";
	    //document.getElementById("player_state").style="transform:translateX(45%);color:#fe2c55";
	    //document.getElementById("name_of_music").style="margin-left:2.5%;height:48px;transform:translateX(45%)";
    }  
}

var scroll;
var n=0;
var $i=1;

function lyric(){
	var top=document.getElementById("lyric_wrapper").style.top;
	function lyric_scroll(){
	    if($i>1){
	    	document.getElementById("lyric_wrapper").style.top=top+'px';
	    	top-=60;
	    }
	    $("#lyric_wrapper p").eq($i-1).css({"color":"#959595","transform":"scale(1)","text-shadow":"none"});
	    $("#lyric_wrapper p").eq($i).css({"color":"rgba(254, 44, 85, 0.94)","transform":"scale(1.1)","text-shadow":"5px 5px 8px #a7a7a7"});
	    $i+=1;
	}
	if(state==1){
		if(n==0){
			$("#lyric_wrapper p").eq(0).css({"color":"rgba(254, 44, 85, 0.94)","transform":"scale(1.1)","text-shadow":"5px 5px 10px #a7a7a7"});
		}
		scroll=setInterval(lyric_scroll,8000)
		n=1;
	}
	else{
		clearInterval(scroll);
	}
}


function auto(){
	var click=0;
	cycle();
	var time=setInterval(cycle,1500);

	$(function(){
		$("#play_pause").click(function(){
	       lyric();
		})

		$("#head_wrapper").mouseover(function(){
			clearInterval(time);
			//$(this).children("div").css({"animation":"move_up 0.4s ease-out 1","animation-fill-mode":"forwards"});
			$(this).css("cursor","pointer");
		})
		$("#head_wrapper").mouseleave(function(){
			cycle();
			time=setInterval(cycle,1500);
		})
		$(".text_wrapper").mouseover(function(){
			$(this).css({"animation":"move_up 0.4s ease-out 1","animation-fill-mode":"forwards"});

		})
		$(".text_wrapper").mouseleave(function(){
			$(this).css({"animation":"move_down 0.4s ease-out 1","animation-fill-mode":"forwards"});
		})

		$("#part_block_1 .cell").mouseover(function(){
			//alert("Test");
			$(this).children("dl").css("display","block");
			$("#part_block_2").css({"transform":"translateX(80%)","opacity":"0.2"})
		})
		$("#part_block_1 .cell").mouseleave(function(){
			//alert("Test");
			$(this).children("dl").css("display","none");
			$("#part_block_2").css({"transform":"translateX(0)","opacity":"1"})
		})

		$("#part_block_2 .cell").mouseover(function(){
			//alert("Test");
			$(this).children("dl").css("display","block");
			$("#part_block_1").css({"transform":"translateX(-60%)","opacity":"0.2"})
		})
		$("#part_block_2 .cell").mouseleave(function(){
			//alert("Test");
			$(this).children("dl").css("display","none");
			$("#part_block_1").css({"transform":"translateX(0)","opacity":"1"})
		})

		$("#more dd").click(function(){
			document.getElementById("music").play();
		    $("#square_cover").attr("src","imgs/cover/summer wine.JPG");
		    $("#name_of_music").html("Summer wine <span style='font-size:14px'>(展示歌单内都是此曲)</span>");
		    $("#player_state").text("正在播放示例曲");
		    $("#player_state").css("color","#fe2c55");
		    $("#play_pause img").attr("src","imgs/icon/pause.svg");
		    $("#play_pause img").css("width","40px");
		    state=1;
		    up();
		    lyric();  
		})

		$("#submit").click(function(){
			var v=document.getElementById("search").value;
			alert("请输入您想要查找的内容");
		});
		document.getElementById("search").onfocus=function(){
			document.getElementById("search").placeholder="   请输入";
		}
		document.getElementById("search").onblur=function(){
			document.getElementById("search").placeholder="   搜索歌曲或艺人";
		}

		var more_click=0;
		$("#more_choice img").click(function(){
			if(more_click==0){
				$("#more_choice dl").css("display","block");
				more_click=1;
			}
			else{
				$("#more_choice dl").css("display","none");
				more_click=0;
			}	
		})
		$("#more_choice dl").mouseleave(function(){
			$("#more_choice dl").css("display","none");
				more_click=0;
		})

		var gray=0;
		$("#more_choice dd:first-child").click(function(){
			if(gray==0){
				$("#main").css("filter","grayscale(95%)");
			    $(this).text("关闭灰度模式");
			    gray=1;
			}
			else{
				$("#main").css("filter","grayscale(0)");
				$(this).text("开启灰度模式");
			    gray=0;
			    var t=setTimeout(function(){location.reload(true);},10);
			}
		})
		$("#more_choice dd:eq(1)").click(function(){
			$(".bg").css("background","orange");
		})
		
	})
    
    
	function cycle(){
	    var card_1=document.getElementById("card_1");
		var card_2=document.getElementById("card_2");
		var card_3=document.getElementById("card_3");
		if(click<3){
			switch(click){
				case 0:
				  card_1.style="z-index:1 ;transform:translateX(412px)";
		          card_2.style="z-index:1 ;transform:scale(0.79) translateX(-260px) translateY(-30px) ;border:none";
		          card_3.style="z-index:2 ;transform: scale(1.27) translateX(-163px) translateY(5.5px) ;border:0.5px solid red;";
		          click+=1;
		          break;
		        case 1:
		          card_1.style="z-index:2 ;transform: scale(1.27) translateX(163px) translateY(5.5px) ;border:0.5px solid red;";
		          card_2.style="z-index:1 ;transform:scale(0.79) translateX(260px) translateY(-30px) ;border:none";
		          card_3.style="z-index:1 ;transform:translateX(-412px)";
		          click+=1;
		          break;
		        case 2:
		          card_1.style="z-index:1 ;transform:translateX(0) scale(1)";
		          card_2.style="z-index:2 ;transform:translateX(0) translateY(-18px) scale(1)";
		          card_3.style="z-index:1 ;transform:translateX(0) scale(1)";
		          click=0;
		          break;
			}     
		}
		else{
			click=0;
		}
    }
}

function change_into_pause(self){
	if(state==0){
		self.src="imgs/icon/pause.svg";
	    self.width=40;
		state=1;
		document.getElementById("music").play();
		var status=document.getElementById("player_state");
		status.innerText="正在播放"
		status.style="color:#fe2c55";
		document.getElementById("square_cover_wrapper").style="transform:scale(1.1);box-shadow:3px 10px 10px #bdbdbe,-3px 10px 10px #bdbdbe";
		up();
	}
	else{
		self.src="imgs/icon/play.svg";
		self.width=25;
		state=0;
		document.getElementById("music").pause();
		var status=document.getElementById("player_state")
		status.innerText="已暂停";
		status.style="color:black";
		//document.getElementById("square_cover_wrapper").style="transform:scale(1)";
		document.getElementById("square_cover_wrapper").style.animationPlayState="paused";
		
	}
}

function change_into_red_next(self){
	self.src="imgs/icon/next (1).svg";
}

function change_into_black_next(self){
	self.src="imgs/icon/next.svg";
}

function change_into_red_pre(self){
	self.src="imgs/icon/pre(1).svg";
}
function change_into_black_pre(self){
	self.src="imgs/icon/pre.svg";
}

function back(){
	window=history.back()
}

function back_to_top(){
	window.location.href="#head";
}

function next(){
	$(function(){
		$("#music").attr("src","audio/火箭少女101 - 卡路里.mp3");
		$("#music").attr("autoplay","true");
		$("#square_cover").attr("src","imgs/cover/burn my calorie.JPG");
		$("#name_of_music").text("卡路里");
		$("#player_state").text("正在播放");
		$("#player_state").css("color","#fe2c55");
		$("#play_pause img").attr("src","imgs/icon/pause.svg");
		$("#play_pause img").css("width","40px");
	    state=1;
	    up();
	    lyric();
	})
}

function pre(){
	$(function(){
		$("#music").attr("src","audio/Off to the race.mp3");
		$("#music").attr("autoplay","true");
		$("#square_cover").attr("src","imgs/cover/Off to the race.JPG");
		$("#name_of_music").text("Off to the race");
		$("#player_state").text("正在播放");
		$("#player_state").css("color","#fe2c55");
		$("#play_pause img").attr("src","imgs/icon/pause.svg");
		$("#play_pause img").css("width","40px");
	    state=1;
	    up();
	    lyric();
	})
}

(function() {
	/*//判断开始结束 paused  play(开始)  pause (暂停)
     var btn1 = document.getElementById('btn');
     btn1.onclick = function playPaused(){
     	  var sou1 = document.getElementById("sou")
          if(sou1.paused){

          	sou1.play();
          }else{
          	sou1.pause();
          }
     }*/
     //判断是否静音 muted 判断是否 为  true 或 false
     var ton1 = document.getElementById('ton');
     ton1.onclick = function muted(){
     	var sou1 = document.getElementById("sou")
     	if(sou1.muted==true){
            sou1.muted = false;
     	}else{
     		sou1.muted = true;
     	}
     }
     var tt1 = document.getElementById('tt');
     tt1.onclick = function (){
     	var sou1 = document.getElementById("sou");
     	/*sou1.style.width ="500px";*/
     	if(sou1.style.width == "300px"){
             sou1.style.width ="500px";
     	}else{
     		sou1.style.width ="300px";

     	}

    }
    var on1 = document.getElementById('on');
     on1.onclick = function (){
     	var sou1 = document.getElementById("sou");
     	/*sou1.style.width ="500px";*/
     	if(sou1.style.width == "300px"){
             sou1.style.width ="100px";
     	}else{
     		sou1.style.width ="300px";

     	}

    }
    var sou1 = document.getElementById("sou")
    sou1.onplay = function(){
    	console.log(btn1);
    }
}(window))
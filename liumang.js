(function() {
	var sou1 = document.getElementById('sou');
	var jpg1 = document.getElementById('jpg2');
	//图片的显示
	/*sou1.onplay = function(){
		console.log("sou1");		
		jpg1.style.display = 'none';
	}
	sou1.onpause = function(){
		console.log(sou1);
		jpg1.style.display = 'block';
	}*/
	//快进
    sou1.onseeked = function(){
    	console.log("zxcvb");
    }
    sou1.onplaying= function(){
		console.log("www");
	}
	//当前的播放位置
    sou1.ontimeupdate= function(){
		console.log("123456");
	}
	//调节时间
    sou1.onvolumechange= function(){
		console.log("sou1");
	}
    sou1.addEventListener('loadeddata',function(){
    	console.log("987654");
    })
    sou1.addEventListener('loadedmetadata',function(){
    	console.log("souadd");
    })
    //路径的显示
    console.log(sou1.currentSrc);
    //从第几秒开始播放
    //console.log(sou1.currentTime=10);
    //封面
    sou1.poster = "4.jpg"
    //自动播放
    sou1.autoplay = "true";
}(window))
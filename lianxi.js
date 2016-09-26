(function() {
	var sou1 = document.getElementById('sou');
	sou1.ontimeupdate = function(){
		/*console.log(sou1.currentTime);*/
		console.log(sou1.duration);
		sou1.loop =true;
	}
	//加快播放速度
	sou1.playbackRate=20;
	sou1.onended = function(){
	//关闭网页  结束后	
		/*window.close();*/
	}
}(window))
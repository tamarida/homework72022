var video;

window.addEventListener("load", function(){
	video = document.querySelector("#player1")
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

	console.log("Autoplay is set to " + video.autoplay)
	console.log("Autoplay is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function(){
 	console.log("Play Video")
	document.querySelector("#volume").innerHTML = video.volume * 100  + "%"
	video.play()
 });

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video")
	video.pause()
});

document.querySelector('#slower').addEventListener("click", function(){
	console.log("Slow Video Up")
	video.playbackRate *= .9;

	console.log("Speed is " + video.playbackRate)
});

document.querySelector('#faster').addEventListener("click", function(){
	console.log("Slow Video Down")
	video.playbackRate /= .9;

	console.log("Speed is " + video.playbackRate)
});

document.querySelector('#skip').addEventListener("click", function(){
	console.log("Skip Ahead")
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}

	console.log("Video Current Time is " + video.currentTime)

});

document.querySelector('#mute').addEventListener("click", function(){
	console.log("Mute Video")
	if(video.muted ==true){
		console.log("Unmute")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
});

document.querySelector('#slider').addEventListener("click", function(){
	console.log("The current value is ", this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector('#vintage').addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector('#orig').addEventListener("click", function(){
	video.classList.remove("oldSchool");
});
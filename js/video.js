var video;

window.addEventListener("load", function(){
	console.log("Good job opening the wiindow");
	video = document.querySelector("#player1");
	console.log(video);
	video.autoplay = false;
	console.log("autoplay is set to false");
	video.loop = false;
	console.log("loop is set to false");
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play video!");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
})

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause video!");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down!");
	video.playbackRate *= 0.9;
	console.log("video playback rate " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up!");
	video.playbackRate *= 1.11;
	console.log("video playback rate " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip!");
	console.log("current time in video before skip: " + video.currentTime);
	video.currentTime += 10;
	if (video.currentTime > video.duration){
		video.currentTime = 0;
	}
	console.log("current time in video after skip: " + video.currentTime);
	
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute!");
	if (video.muted == false){
		video.muted = true;
		slider.value = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
		document.querySelector("#volume").innerHTML = 0;
	}else{
		video.muted = false;
		slider.value = 100;
		document.querySelector("#mute").innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	}
})

document.querySelector("#slider").addEventListener("input", (event) =>{
	console.log("current volume: " + slider.value);
	video.volume = (slider.value) / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log("In grayscale");
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
	console.log("In original");
})

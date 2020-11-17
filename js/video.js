var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume*100 + '%';
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("Slow Down " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
	console.log("Speed Up " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5){
		video.currentTime += 5;
	}
	else {
		video.currentTime = 0;
		console.log("Start from beginning");
	}
	video.play()
	console.log("Skip Ahead " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false) {    
           video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
    }

    else {
        video.muted = false;
	    document.getElementById("mute").innerHTML = "Mute";
    }
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	volume.innerHTML = this.value+'%';
	console.log("Volume ");
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});



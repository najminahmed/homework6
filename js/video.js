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
	video.playbackRate: .1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate: 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime+=5;
	if (video.ended === true) {    
           video.loop = true;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
           video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
    }

    else {
        video.muted = false;
	    document.getElementById("mute").innerHTML = "Mute";
    }
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	
});

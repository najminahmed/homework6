var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function() {
	video.mute: true;
});

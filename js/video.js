var video=document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;
	video.loop=false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume *100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow");
	video.playbackRate*=0.95;
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("fast");
	video.playbackRate/=0.95;
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute");
	if (video.muted==true){
		video.muted=false
		this.innerHTML="Mute";
	}
	else{
		video.muted=true;
		this.innerHTML="Unmute";
	}
	console.log(video.volume)
	document.querySelector("#volume").innerHTML=video.volume *100 + "%";
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("changing volume");
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector(".video").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector(".video").classList.remove("oldSchool");
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("the current location is: "+ video.currentTime);
	if(video.currentTime+15<=video.duration){
		video.currentTime+=15;
		console.log("new location is: "+ video.currentTime);
	}
	else{
		video.currentTime=0;
		video.play();
	}
});
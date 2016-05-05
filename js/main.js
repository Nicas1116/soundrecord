var recording =false;
  var myMedia;
function recordSound() {
	  if(recording){
		//recorder && recorder.stop();
		myMedia.startRecord();
		$(".btn-record").html("START RECORD")
		createDownloadLink();
		recorder.clear();
		recording=false
	  }else{
		//recorder && recorder.record();
		myMedia.startRecord();
	    $(".btn-record").html("STOP RECORD")
		recording=true;
	  }
	 
	  
  }


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
     console.log(Media)
	myMedia = new Media("myrecording.mp3",function() {
		console.log("recordAudio():Audio Success");
		myMedia.play();
	});

}
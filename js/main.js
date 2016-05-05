var recording =false;
  var myMedia;
function recordSound() {
	  if(recording){
		//recorder && recorder.stop();
		myMedia.stopRecord();
		$(".btn-record").html("START RECORD")
		myMedia.play();
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
	 $(".logfile").html("LOG:"+Media);
	myMedia = new Media("myrecording.mp3",function() {

		myMedia.play();
	},function() {
		$(".logfile").html("LOG:"+myMedia);
	});

}
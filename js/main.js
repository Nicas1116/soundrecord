var recording =false;
  var myMedia;
  ar captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
		$(".logfile").append("LOG:"+path);
        // do something interesting with the file
    }
};


var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

function recordSoundDA() {
	capture.captureAudio(captureSuccess, captureError, {limit:2});
}
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

var capture
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
     console.log(Media)
	 $(".logfile").html("LOG:"+Media);
	 capture = navigator.device.capture;
	myMedia = new Media("myrecording.mp3",function() {

		myMedia.play();
	},function() {
		$(".logfile").html("LOG:"+myMedia);
	});

}
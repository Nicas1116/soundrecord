var recording =false;
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

  var myMedia;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    
	/*myMedia = new Media("documents://beer.mp3",function() {
		alert("recordAudio():Audio Success");
		myMedia.play();
	},

	// error callback
	function(err) {
		alert("recordAudio():Audio Error: "+ err.code);
	});*/

}

  var audio_context;
  var recorder;
var recording=false
  function startUserMedia(stream) {
    var input = audio_context.createMediaStreamSource(stream);
    recorder = new Recorder(input, {
                  numChannels: 1
                });
  }

  function recordSound() {
	  if(recording){
		recorder && recorder.stop();
		$(".btn-record").html("START RECORD")
		createDownloadLink();
		recorder.clear();
		recording=false
	  }else{
		recorder && recorder.record();
	    $(".btn-record").html("STOP RECORD")
		recording=true;
	  }
	 
	  
  }

  function createDownloadLink() {
    recorder && recorder.exportWAV(function(blob) {
		console.log(blob)
      /*var url = URL.createObjectURL(blob);
      var li = document.createElement('li');
      var au = document.createElement('audio');
      var hf = document.createElement('a');

      au.controls = true;
      au.src = url;
      hf.href = url;
      hf.download = new Date().toISOString() + '.wav';
      hf.innerHTML = hf.download;
      li.appendChild(au);
      li.appendChild(hf);
      recordingslist.appendChild(li);*/
    });
  }

  window.onload = function init() {
    try {
      // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
      window.URL = window.URL || window.webkitURL;

      audio_context = new AudioContext;
      
    } catch (e) {
      alert('No web audio support in this browser!');
    }

    navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
   
    });
  };

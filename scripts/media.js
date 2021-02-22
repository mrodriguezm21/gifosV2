//objeto para llamar a la camara
 var x = true;
if (x == true) {
   function getStreamAndRecord() {
      navigator.mediaDevices.getUserMedia({
         audio: false,
         video: {
            height: { max: 480 }
         }
      })
         .then(function (stream) {
            video.srcObject = stream;
            video.play()
         })
   }
   x = false;
} else {
   mediaStream.getVideoTracks()[0].stop();
   x = true;
}


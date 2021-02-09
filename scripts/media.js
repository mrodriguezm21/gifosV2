//objeto para llamar a la camara
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
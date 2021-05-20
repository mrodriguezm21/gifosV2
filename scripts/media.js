// objetos del html
const srcVideo = document.getElementById("srcVideo");
const videoButton = document.getElementById("videoButton");
const stopedButton = document.getElementById("stopedButton")

let form = new FormData();

// Funcion grabar, detener y descargar Gif
function getStreamAndRecord() {
   // Propiedades del gif
   navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
         height: { max: 480 }
      }
   })
   // Renderizado de camara en etiqueta <video></video>
      .then(async function (stream) {
         srcVideo.srcObject = stream;
         srcVideo.play()
         // objeto base para cada Gif
         var recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            save: "Test",
            onGifRecordingStarted: function() {
               console.log('started')
            },
         });
         // Inicio de la grabacion
         recorder.startRecording()
         // Fin de la grabacion
         stopedButton.addEventListener("click", () => {
            recorder.stopRecording(async function() {
               await uploadGif(recorder.getBlob())
            });
         })
      })
}

async function uploadGif(gifData) {
   try {
      form.append('file', gifData, 'myGif.gif');
      const res = await fetch("https://upload.giphy.com/v1/gifs?api_key=dNkeI6zowJCt3piQ2sJ0ZOfdsiewNf1Q", {
         method: "post",
         body: form,
         mode: "no-cors",
         redirect: "follow",
      })
      // const json = await res.json()
      console.log(res)
      console.log(typeof(res))
   } catch(error) {
      console.log(error)
   }
}

videoButton.addEventListener("click", () => {
   getStreamAndRecord()
})
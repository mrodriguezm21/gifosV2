// objetos del html
const srcVideo = document.getElementById("srcVideo");
let videoButton = document.getElementById("videoButton");
const buttonContent = document.getElementById("buttonContent")

let form = new FormData();

let myGifs = []

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
         buttonContent.innerHTML = `<button class="button" id="stopButton">stop</button>`
         const stopButton = document.getElementById("stopButton")
         recorder.startRecording()
         // Fin de la grabacion
         stopButton.addEventListener("click", () => {
            recorder.stopRecording(async function() {
               await uploadGif(recorder.getBlob())
               
            });
            buttonContent.innerHTML = `<button class="button" id="videoButton">GRABAR</button>`
            videoButton = document.getElementById("videoButton");
         })
      })
}



async function uploadGif(gifData) {
   const formData = new FormData();
   formData.append("file", gifData);
   const request = await fetch("https://upload.giphy.com/v1/gifs?api_key=dNkeI6zowJCt3piQ2sJ0ZOfdsiewNf1Q", {
       method: "POST",
       body: formData,
   });
   const data = await request.json();
   localStorage.setItem("myGifs",data.data.id);
   console.log(localStorage.getItem("myGifs"));




videoButton.addEventListener("click", (event) => {
   event.preventDefault();
   getStreamAndRecord()
}

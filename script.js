const videoElement = document.getElementById('video');
const button= document.getElementById('button');

// Prompt to select media stream, pass to video element,then play
async function selectMediaStream(){
    try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject=mediaStream;
     videoElement.onloadedmetadata=() => {
        videoElement.play();
      }
   }catch(error) {
    //  CATCH ERROR
    console.log('whoops,error here:', error);
    }
}

button.addEventListener('click',async () =>{
  // DISABLE BUTTON
  button.disable=true;
  //START PICTURE IN PICTURE
  await videoElement.requestPictureInPicture();
  // RESET BUTTON
  button.disabled=false;
 });
//ON LOAD
selectMediaStream();


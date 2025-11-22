const videoel = document.querySelector(".video");
const buttonel = document.querySelector(".button");

// Function to select the video from tab and pass it to the video element (using screen capture API)
async function selectmedia() {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia();
    videoel.srcObject = media;
    videoel.onloadedmetadata = () => {
      videoel.play();
    };
  } catch (error) {
    console.log(error);
  }
}

buttonel.addEventListener("click", async () => {
  buttonel.disabled = true;
  await videoel.requestPictureInPicture(); // Corrected method call
  buttonel.disabled = false;
});

selectmedia();

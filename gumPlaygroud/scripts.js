let stream = null;
const constraints = {
  video: true,
  audio: true,
};
const myVideoEl = document.getElementById("my-video");

const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    changeButtons([
      "green",
      "blue",
      "blue",
      "grey",
      "grey",
      "grey",
      "grey",
      "grey",
    ]);
  } catch (error) {
    console.log("user denied access to constraints");
  }
};

const showMyFeed = (e) => {
  if (!stream) {
    alert("stream is still loading...");
    return;
  }
  myVideoEl.srcObject = stream;
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "grey",
    "grey",
    "blue",
  ]);
};

const stopMyFeed = (e) => {
  if (!stream) {
    alert("stream is still loading...");
    return;
  }
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
  changeButtons([
    "blue",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
  ]);
};

document.querySelector("#share").addEventListener("click", (e) => {
  getMicAndCamera(e);
});
document
  .querySelector("#show-video")
  .addEventListener("click", (e) => showMyFeed(e));
document
  .querySelector("#stop-video")
  .addEventListener("click", (e) => stopMyFeed(e));
document
  .getElementById("change-size")
  .addEventListener("click", (e) => changeSize(e));
document
  .querySelector("#start-record")
  .addEventListener("click", (e) => startRecording(e));
document
  .querySelector("#stop-record")
  .addEventListener("click", (e) => stopRecording(e));
document
  .querySelector("#play-record")
  .addEventListener("click", (e) => playRecording(e));

// const supportedStuff = navigator.mediaDevices.getSupportedConstraints();
// console.log("supportedStuff:", supportedStuff);

const changeSize = (e) => {
  stream.getVideoTracks().forEach((track) => {
    const maxHeight = track.getCapabilities().height.max;
    const maxWidth = track.getCapabilities().width.max;
    const height = document.getElementById("vid-height").value;
    const width = document.getElementById("vid-width").value;
    const constraints = {
      height: { exact: height <= maxHeight ? height : maxHeight },
      width: { exact: width <= maxWidth ? width : maxWidth },
    };
    track.applyConstraints(constraints);
  });
};

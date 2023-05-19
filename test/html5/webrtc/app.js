const video = document.getElementById('video');
const snapshotBtn = document.getElementById('snapshot-btn');
const snapshot = document.getElementById('snapshot');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// 获取摄像头视频流
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing media devices.', error);
  });

// 截取视频帧并显示在img元素中
snapshotBtn.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  snapshot.src = canvas.toDataURL();
});

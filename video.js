const videoEl = document.querySelector('#mainVideo');
const videoIcon = document.querySelector('#mainVideoPlayIcon');
videoEl.addEventListener('play', () => {
	videoIcon.classList.toggle('video__icon_hidden');
});
videoEl.addEventListener('pause', () => {
	videoIcon.classList.toggle('video__icon_hidden');
});
videoIcon.addEventListener('click', () => {
	videoEl.play();
});

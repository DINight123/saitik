// Получаем элементы страницы
const player = document.getElementById('videoPlayer');
const playPauseButton = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');

// Обработчик кликов кнопки Play/Pause
playPauseButton.addEventListener('click', () => {
    if(player.paused || player.ended){
        player.play();
        playPauseButton.firstChild.src = 'img/icon-pause.png';
    } else{
        player.pause();
        playPauseButton.firstChild.src = 'img/icon-play.png';
    }
});

// Изменение прогресса воспроизведения
player.addEventListener('timeupdate', () => {
    const percentage = Math.floor((player.currentTime / player.duration) * 100);
    progressBar.value = percentage;

    // Форматирование отображаемого текущего времени
    let minutes = Math.floor(player.currentTime / 60);
    let seconds = Math.floor(player.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2,'0')}`;

    // Если длительность известна
    if (!isNaN(player.duration)) {
        let totalMinutes = Math.floor(player.duration / 60);
        let totalSeconds = Math.floor(player.duration % 60);
        durationDisplay.textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2,'0')}`;
    }
});

// Перемотка видео
progressBar.addEventListener('change', () => {
    const seekTo = player.duration * (progressBar.value / 100);
    player.currentTime = seekTo;
});

// Управление громкостью
volumeControl.addEventListener('change', () => {
    player.volume = volumeControl.value;
});
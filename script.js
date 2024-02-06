const songs = [
    { title: 'Song 1', source: 'song1.mp3' },
    { title: 'Song 2', source: 'song2.mp3' },
    { title: 'Song 3', source: 'song3.mp3' }
];

const playlist = document.getElementById('playlist');
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const skipButton = document.getElementById('skip');
const volumeControl = document.getElementById('volume');
const searchInput = document.getElementById('search');

// Populate playlist
songs.forEach(song => {
    const listItem = document.createElement('li');
    listItem.textContent = song.title;
    listItem.setAttribute('data-source', song.source);
    listItem.addEventListener('click', () => {
        audio.src = song.source;
        audio.play();
        playPauseButton.textContent = 'Pause';
    });
    playlist.appendChild(listItem);
});

// Play/Pause button functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Skip button functionality
skipButton.addEventListener('click', () => {
    const currentSongIndex = songs.findIndex(song => song.source === audio.src);
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[nextSongIndex].source;
    audio.play();
});

// Volume control functionality
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Search functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    songs.forEach((song, index) => {
        const listItem = playlist.children[index];
        const songTitle = song.title.toLowerCase();
        if (songTitle.includes(searchTerm)) {
            listItem.style.display = 'block';
        } else {
            listItem.style.display = 'none';
        }
    });
});

let currentPage = 1;
const totalPages = 7;
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const backgroundMusic = document.getElementById('background-music');
const playMusicButton = document.getElementById('play-music-button');
const pauseMusicButton = document.getElementById('pause-music-button');
const volumeControl = document.getElementById('volume-control');

function nextPage() {
    const current = document.getElementById(`page-${currentPage}`);
    current.classList.add('hidden');

    currentPage++;
    if (currentPage > totalPages) {
        currentPage = 1; // Loop back to the start
    }
    
    const next = document.getElementById(`page-${currentPage}`);
    next.classList.remove('hidden');

    updateProgress();
}

function restartStory() {
    currentPage = 1;
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(`page-${currentPage}`).classList.remove('hidden');
    updateProgress();
}

function updateProgress() {
    const progress = (currentPage / totalPages) * 100;
    progressFill.style.width = `${progress}%`;
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playMusicButton.style.display = 'none';
        pauseMusicButton.style.display = 'inline-block';
    } else {
        backgroundMusic.pause();
        playMusicButton.style.display = 'inline-block';
        pauseMusicButton.style.display = 'none';
    }
}

volumeControl.addEventListener('input', (event) => {
    backgroundMusic.volume = event.target.value;
});

function makeChoice(choice) {
    switch(choice) {
        case 'choice1':
            showPage(3);
            break;
        case 'choice2':
            showPage(4);
            break;
        case 'choice3':
            showPage(5);
            break;
        case 'choice4':
            showPage(6);
            break;
        case 'choice5':
            showPage(5);
            break;
        case 'choice6':
            showPage(6);
            break;
        case 'choice7':
            showPage(7);
            break;
        case 'choice8':
            showPage(6);
            break;
        case 'choice9':
            showPage(11);
            break;
        case 'choice10':
            showPage(12);
            break;
        default:
            restartStory();
            break;
    }
}

function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(`page-${pageNumber}`).classList.remove('hidden');
    currentPage = pageNumber;
    updateProgress();
}
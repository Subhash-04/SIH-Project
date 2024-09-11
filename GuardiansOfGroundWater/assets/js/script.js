document.addEventListener('DOMContentLoaded', function () {
    // Handle the "Start Your Journey" button
    const startGameButton = document.querySelector('.start-game');
    if (startGameButton) {
        startGameButton.addEventListener('click', function () {
            startGame();
        });
    }

    // Handle the "How to Play" button
    const tutorialButton = document.querySelector('.show-tutorial');
    if (tutorialButton) {
        tutorialButton.addEventListener('click', function () {
            showTutorial();
        });
    }

    // Handle the "Leaderboard" button
    const leaderboardButton = document.querySelector('.leaderboard');
    if (leaderboardButton) {
        leaderboardButton.addEventListener('click', function () {
            showLeaderboard();
        });
    }

    // Handle the "Water Tutorial" icon button
    const waterIconButton = document.querySelector('.water-tutorial');
    if (waterIconButton) {
        waterIconButton.addEventListener('click', function () {
            triggerWaterTutorial();
        });
    }

    // Handle the "Play Quiz" icon button
    const playQuizButton = document.querySelector('.play-quiz');
    if (playQuizButton) {
        playQuizButton.addEventListener('click', function () {
            startQuiz();
        });
    }

    // Handle the "Settings" icon button
    const settingsButton = document.querySelector('.settings');
    if (settingsButton) {
        settingsButton.addEventListener('click', function () {
            showSettings();
        });
    }

    // Functions to handle button actions
    function startGame() {
        window.location.href = 'game.html';  // This would lead to the game page or initiation of the game.
    }

    function showTutorial() {
        alert('Showing tutorial...');
        // Add your tutorial logic here.
    }

    function showLeaderboard() {
        window.location.href = 'leaderboard.html';  // Navigate to the leaderboard page.
    }

    function triggerWaterTutorial() {
        alert('Showing water conservation tutorial...');
        window.location.href = 'npc.html';  // Navigate to the NPC water tutorial page.
    }

    function startQuiz() {
        window.location.href = 'quiz-level-1.html';  // Navigate to the first quiz level.
    }

    function showSettings() {
        window.location.href = 'settings.html';  // Navigate to the settings page.
    }
});

// database.js

// Function to update user score
function updateUserScore(username, newScore) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users = users.map(user => {
        if (user.username === username) {
            user.score = newScore;
        }
        return user;
    });

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(users.find(user => user.username === username)));
}

// Function to fetch leaderboard
function getLeaderboard() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Sort users by score in descending order and return the top users
    return users.sort((a, b) => b.score - a.score);
}

// Function to update leaderboard
function updateLeaderboard(username, score) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Check if user exists in the leaderboard and update the score
    const existingPlayer = leaderboard.find(player => player.username === username);
    if (existingPlayer) {
        existingPlayer.score = score;
    } else {
        leaderboard.push({ username, score });
    }

    // Sort the leaderboard by score (highest first)
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Export the functions
export { updateUserScore, getLeaderboard, updateLeaderboard };

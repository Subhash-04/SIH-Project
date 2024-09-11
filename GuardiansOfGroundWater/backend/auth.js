// auth.js

// Function to register a new user
function registerUser(username, email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return { success: false, message: 'Username already exists.' };
    }

    // Add new user
    const newUser = { username, email, password, score: 0, isLoggedIn: false };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Registration successful.' };
}

// Function to log in a user
function loginUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        user.isLoggedIn = true;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(user));  // Current logged-in user
        return { success: true, message: 'Login successful.' };
    } else {
        return { success: false, message: 'Invalid credentials.' };
    }
}

// Function to log out a user
function logoutUser() {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
        loggedInUser.isLoggedIn = false;

        // Update the users list
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.map(user => user.username === loggedInUser.username ? loggedInUser : user);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.removeItem('user');
    }
}

// Function to get current logged in user
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')) || null;
}

// Export the functions
export { registerUser, loginUser, logoutUser, getCurrentUser };

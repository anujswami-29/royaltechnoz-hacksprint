// General JS for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Load user data from localStorag (for logged-in users)
    let user = JSON.parse(localStorage.getItem('user'));

    // Redirect to login page if not logged in
    if (!user && window.location.pathname !== '/login.html') {
        window.location.href = 'login.html';
    }

    // Set username in dashboard if user is logged in
    if (user && window.location.pathname === '/dashboard.html') {
        document.getElementById('userName').textContent = user.username;

        // Mock data for GPA and upcoming deadlines
        document.getElementById('gpa').textContent = "3.8";  // Display GPA mock data
        
        // Example of deadlines (this could be dynamic, from an API or database)
        let deadlines = [
            { subject: "Math Exam", date: "2025-01-10" },
            { subject: "Physics Assignment", date: "2025-01-12" }
        ];
        
        let deadlinesList = document.getElementById('deadlines');
        deadlines.forEach(deadline => {
            let listItem = document.createElement('li');
            listItem.textContent = `${deadline.subject} - Due on ${deadline.date}`;
            deadlinesList.appendChild(listItem);
        });
    }

    // If goal exists, load it in the goal-setting page
    let savedGoal = localStorage.getItem('goal');
    if (savedGoal && window.location.pathname === '/goal-setting.html') {
        displayGoalProgress(savedGoal);
    }
});

// Login Form Submission (login.html)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Mock validation (you can replace with actual validation logic)
    if (username === 'iitmstudent' && password === 'password123') {
        localStorage.setItem('user', JSON.stringify({ username: username }));
        window.location.href = 'dashboard.html';  // Redirect to Dashboard after successful login
    } else {
        alert('Invalid credentials. Please try again!');
    }
});

// Goal Setting Form (goal-setting.html)
document.getElementById('goalForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let goal = document.getElementById('goal').value;

    if (goal) {
        localStorage.setItem('goal', goal);
        displayGoalProgress(goal);
    }
});

// Display Goal Progress (Function for Goal Setting page)
function displayGoalProgress(goal) {
    let goalProgress = document.getElementById('goalProgress');
    goalProgress.innerHTML = `
        <h3>Your GPA Target: ${goal}</h3>
        <div class="progress-bar" style="width: ${goal * 10}%;">${goal}%</div>
    `;
}

// Study Timetable (study-timetable.html)
document.getElementById('addSessionForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let subject = document.getElementById('subject').value;
    let time = document.getElementById('time').value;

    if (subject && time) {
        let studySchedule = document.getElementById('studySchedule');
        let listItem = document.createElement('li');
        listItem.textContent = `Study ${subject} at ${new Date(time).toLocaleString()}`;
        studySchedule.appendChild(listItem);
    }
});

// Notifications & Alerts (notifications.html)
document.getElementById('notificationsForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let notificationMessage = document.getElementById('notificationMessage').value;

    if (notificationMessage) {
        let notificationList = document.getElementById('notificationList');
        let listItem = document.createElement('li');
        listItem.textContent = notificationMessage;
        notificationList.appendChild(listItem);

        // Optionally, store the notification in localStorage or database for persistence
    }
});

// Peer-to-Peer Tutoring (peer-tutoring.html)
document.getElementById('peerTutoringForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let subject = document.getElementById('subject').value;
    let tutorName = document.getElementById('tutorName').value;

    if (subject && tutorName) {
        let tutoringList = document.getElementById('tutoringList');
        let listItem = document.createElement('li');
        listItem.textContent = `${tutorName} offers tutoring for ${subject}`;
        tutoringList.appendChild(listItem);
    }
});

// Logout Functionality
function logout() {
    localStorage.removeItem('user');  // Remove user data from localStorage
    window.location.href = 'login.html';  // Redirect to login page after logout
}

// Event listener for logout button (if any)
document.getElementById('logoutButton')?.addEventListener('click', logout);

// Dynamic content for the Study Resources Page
function loadStudyResources() {
    let studyResourcesList = [
        { title: "Mathematics Textbook", link: "https://www.mathbook.com" },
        { title: "Physics Online Course", link: "https://www.physicscourse.com" },
        { title: "Programming Tutorials", link: "https://www.programming.com" },
    ];

    let resourceContainer = document.getElementById('studyResourcesList');
    studyResourcesList.forEach(resource => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${resource.link}" target="_blank">${resource.title}</a>`;
        resourceContainer.appendChild(listItem);
    });
}

// Load study resources if on the study resources page
if (window.location.pathname === '/study-resources.html') {
    loadStudyResources();
}

// Dynamic content for the Community Engagement (discussion forums, etc.)
function loadCommunityEngagement() {
    let discussions = [
        { topic: "Math Exam Strategies", postCount: 12 },
        { topic: "Physics Homework Help", postCount: 8 },
        { topic: "Best Study Resources for CS", postCount: 20 },
    ];

    let forumContainer = document.getElementById('discussionForumList');
    discussions.forEach(discussion => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${discussion.topic} - ${discussion.postCount} posts`;
        forumContainer.appendChild(listItem);
    });
}

// Load community engagement if on the community page
if (window.location.pathname === '/community-engagement.html') {
    loadCommunityEngagement();
}

// Start by displaying the first level
document.getElementById("level-1").style.display = "block";

// Function to check the first song lyrics
function checkLyrics1() {
    const answer = document.getElementById("lyrics-1-input").value.toLowerCase().trim();
    if (answer === "how far it goes") {
        document.getElementById("summary-1").innerHTML = `
            <h3>Correct!</h3>
            <h2>Public Speaking 3: The Art and Science of Public Speaking</h3>
            <p>The session emphasized the crucial role of body language, both as an art and a science, in effective communication. We explored:</p>
            <ol>
                <li><strong>Gestures:</strong> Purposeful movements to enhance your points.</li>
                <li><strong>Facial Expressions:</strong> Authentic ways to convey emotions.</li>
                <li><strong>Eye Contact:</strong> Connecting with individual audience members.</li>
                <li><strong>Posture:</strong> Maintaining a confident yet relaxed stance.</li>
            </ol>
            <p>We also discussed the power of vocal variety, including:</p>
            <ol>
                <li><strong>Pace:</strong> Adjusting speed for emphasis.</li>
                <li><strong>Pitch:</strong> Varying tone to create emotional impact.</li>
                <li><strong>Pauses:</strong> Using silence strategically to build anticipation.</li>
            </ol>
            <p>Additionally, the art of embellishment through visual aids and rhetorical devices was explored.</p>
        `;
        document.getElementById("summary-1").style.display = "block";
        document.getElementById("next-1").style.display = "block";  // Show the Next button
    } else {
        alert("Incorrect! Try again.");
    }
}

// Function to check the first movie title
function checkMovie1() {
    const answer = document.getElementById("movie-1-input").value.toLowerCase().trim();
    if (answer === "the incredibles") {
        document.getElementById("summary-2").innerHTML = `
            <h3>Correct! </h3>
            <h2>ICT Tracks: Exploring New Technologies</h2>
            <p>The session included a review of assignments and portfolios. We tackled challenges encountered in previous lessons and delved into:</p>
            <ol>
                <li><strong>JavaScript DOM:</strong> Understanding and applying DOM concepts to enhance website interactivity.</li>
                <li><strong>Project Portfolios:</strong> Reflecting on progress and setting goals for improvement.</li>
            </ol>
        `;
        document.getElementById("summary-2").style.display = "block";
        document.getElementById("next-2").style.display = "block";  // Show the Next button
    } else {
        alert("Incorrect! Try again.");
    }
}

// Function to check the first famous person
function checkPerson1() {
    const answer = document.getElementById("person-1-input").value.toLowerCase().trim();
    if (answer === "leonardo da vinci") {
        document.getElementById("summary-3").innerHTML = `
            <h3>Correct! </h3>
            <h2>Innovation in Practice: Applying Creativity</h2>
            <p>This session was highly engaging with a visually appealing and interactive setup. We focused on:</p>
            <ol>
                <li><strong>Brainstorming Techniques:</strong> Learning various methods to spark creativity.</li>
                <li><strong>Collaboration:</strong> Working with teammates and appreciating diverse perspectives.</li>
            </ol>
            <p>The emphasis was on how innovation is driven by both individual creativity and effective teamwork.</p>
        `;
        document.getElementById("summary-3").style.display = "block";
        document.getElementById("next-3").style.display = "block";  // Show the Next button
    } else {
        alert("Incorrect! Try again.");
    }
}

// Function to check the second song lyrics
function checkLyrics2() {
    const answer = document.getElementById("lyrics-2-input").value.toLowerCase().trim();
    if (answer === "desert you") {
        document.getElementById("summary-4").innerHTML = `
            <h3>Correct! </h3>
            <h2> Public Speaking 4: Storytelling and Emotional Engagement</h2>
            <p>We explored what makes a good story:</p>
            <ol>
                <li><strong>Introduction:</strong> A captivating opening to grab attention.</li>
                <li><strong>Body:</strong> Building the narrative with emotional engagement.</li>
                <li><strong>Conclusion:</strong> A memorable finish to leave an impact.</li>
            </ol>
            <p>Emotional connection, authenticity, and vivid descriptions were highlighted as key to powerful storytelling.</p>
        `;
        document.getElementById("summary-4").style.display = "block";
        document.getElementById("next-4").style.display = "block";  // Show the Next button
    } else {
        alert("Incorrect! Try again.");
    }
}

// Function to check the second movie title
function checkMovie2() {
    const answer = document.getElementById("movie-2-input").value.toLowerCase().trim();
    if (answer === "finding nemo") {
        document.getElementById("summary-5").innerHTML = `
            <h3>Correct! </h3>
            <h2> Scholarship Writing 3: Mastering the Application Process</h2>
            <p>The session emphasized key elements for a successful application:</p>
            <ol>
                <li><strong>Preparation:</strong> Start early and know your purpose.</li>
                <li><strong>Confidence:</strong> Show your strengths without downplaying yourself.</li>
                <li><strong>Reviews:</strong> Seek feedback and refine your work.</li>
            </ol>
            <p>Additionally, we covered the importance of clear writing, providing evidence, and selecting referees carefully.</p>
        `;
        document.getElementById("summary-5").style.display = "block";
        document.getElementById("next-5").style.display = "block";  // Show the Next button
    } else {
        alert("Incorrect! Try again.");
    }
}

// Function to check the second famous person
function checkPerson2() {
    const answer = document.getElementById("person-2-input").value.toLowerCase().trim();
    if (answer === "cleopatra") {
        document.getElementById("summary-6").innerHTML = `
            <h3>Correct!</h3>
             <h2>Problem-Solving Using Data Structures</h2>
            <p>This session focused on:</p>
            <ol>
                <li><strong>Linked Lists:</strong> Understanding their dynamic nature and traversal properties.</li>
                <li><strong>Efficiency:</strong> Highlighting the advantages of linked lists in terms of memory management.</li>
            </ol>
            <p>We learned to implement linked lists using both built-in libraries and hardcoding approaches.</p>
        `;
        document.getElementById("summary-6").style.display = "block";
        document.getElementById("next-6").style.display = "block";  // Show the Finish button
    } else {
        alert("Incorrect! Try again.");
    }
}

// Function to handle moving to the next level
function nextLevel(nextLevelId) {
    const currentLevel = document.querySelector('.level:not([style*="display: none"])');
    const nextLevel = document.getElementById(nextLevelId);
    if (currentLevel) {
        currentLevel.style.display = "none";
    }
    if (nextLevel) {
        nextLevel.style.display = "block";
    }
}

// Function to show the finish screen
function showFinishScreen() {
    document.querySelectorAll('.level').forEach(level => level.style.display = "none");
    document.getElementById("finish-screen").style.display = "block";
}

// Function to restart the game
function restartGame() {
    document.getElementById("finish-screen").style.display = "none";
    document.getElementById("level-1").style.display = "block";
}

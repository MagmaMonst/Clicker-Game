// Initialize variables
let score = 0;

// Cookie image URLs for different flavors
const cookieFlavors = [
    "https://cdn-icons-png.flaticon.com/512/4341/4341067.png", // Original
    "https://cdn-icons-png.flaticon.com/512/4341/4341025.png", // Chocolate
    "https://cdn-icons-png.flaticon.com/512/4341/4341053.png", // Jam
    "https://cdn-icons-png.flaticon.com/512/4341/4341047.png", // Strawberry
    "https://cdn-icons-png.flaticon.com/512/4341/4341075.png"  // Rainbow
];

// Select elements
const scoreElement = document.getElementById("score");
const cookieImage = document.getElementById("cookie");
const cookieButton = document.getElementById("cookie-btn");

// Add event listener for cookie clicks
cookieButton.addEventListener("click", () => {
    // Increment the score
    score++;

    // Update the score display
    scoreElement.textContent = score;

    // Change the cookie image every 100 clicks
    if (score % 100 === 0) {
        const flavorIndex = (score / 100) % cookieFlavors.length; // Cycle through flavors
        cookieImage.src = cookieFlavors[flavorIndex];
    }
});

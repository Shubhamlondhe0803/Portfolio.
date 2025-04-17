// Get the elements
const enterButton = document.getElementById("enterButton");
const introPage = document.querySelector(".intro-page");
const portfolio = document.querySelector(".portfolio");


// When the button is clicked, transition to the portfolio page
enterButton.addEventListener("click", () => {
    introPage.style.opacity = "0"; // Fade out the intro page
    setTimeout(() => {
        introPage.style.display = "none"; // Hide the intro page
        portfolio.style.display = "block"; // Show the portfolio page
    }, 1000); // Delay the display change to allow the fade-out effect
});
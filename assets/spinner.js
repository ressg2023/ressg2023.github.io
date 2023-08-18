// Helper function to display the card after the content has loaded
function displayCard(selector) {
    var cardContainers = document.querySelectorAll(selector);

    cardContainers.forEach(function (cardContainer) {
        var spinner = cardContainer.querySelector('.spinner-grow');
        var card = cardContainer.querySelector('.card');

        // Hide the spinner and display the card
        spinner.style.display = 'none';
        card.style.display = 'block';
    });
}
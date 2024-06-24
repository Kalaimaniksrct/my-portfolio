function addRecommendation() {
    // Get input values
    var recommendationText = document.getElementById('newRecommendationText').value;
    var recommendationAuthor = document.getElementById('recommendationAuthor').value;

    // Create HTML elements for the new recommendation
    var recommendationBlock = document.createElement('div');
    recommendationBlock.classList.add('recommendation');

    var blockQuote = document.createElement('blockquote');
    var quoteText = document.createElement('p');
    quoteText.textContent = recommendationText;
    var cite = document.createElement('cite');
    cite.textContent = recommendationAuthor;

    blockQuote.appendChild(quoteText);
    blockQuote.appendChild(cite);
    recommendationBlock.appendChild(blockQuote);

    // Append new recommendation to existing recommendations section
    var recommendationsSection = document.getElementById('recommendations');
    recommendationsSection.appendChild(recommendationBlock);

    // Clear form fields after adding recommendation
    document.getElementById('newRecommendationText').value = '';
    document.getElementById('recommendationAuthor').value = '';

    // Show confirmation pop-up
    alert("Thank you for submitting a recommendation!");
}
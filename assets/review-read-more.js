function toggleReviewText(id) {
    var reviewText = document.getElementById("review-text-" + id);

    if (reviewText.classList.contains("text-truncate")) {
        reviewText.classList.remove("text-truncate");
    } else {
        reviewText.classList.add("text-truncate");
    }
}
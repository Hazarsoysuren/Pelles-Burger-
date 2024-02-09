document.addEventListener("DOMContentLoaded", function() {
    const currentDay = new Date().getDay();
    const offerImage = document.getElementById("offer-image");
    const dailyOffers = [
        "images/bacon.jpg",
        "images/bbq.jpg",
        "images/special.jpg",
        "images/garlic.jpg",
    ];
    offerImage.src = dailyOffers[currentDay];
});
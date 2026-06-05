// FAQ Accordion
const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box => {
    box.addEventListener("click", () => {

        const answer = box.querySelector(".faq-answer");

        if(answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Email Validation
const startBtn = document.querySelector(".btn-get-started");
const emailInput = document.querySelector(".email-input");

startBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if(email === ""){
        alert("Please enter your email address.");
        return;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    alert("Welcome to Netflix Clone!");
});

// Fade In Animation
const features = document.querySelectorAll(".feature");

window.addEventListener("scroll", () => {

    features.forEach(feature => {

        const featureTop = feature.getBoundingClientRect().top;

        if(featureTop < window.innerHeight - 100){
            feature.classList.add("show");
        }
    });

});
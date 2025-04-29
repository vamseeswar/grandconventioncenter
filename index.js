// === Countdown Timer ===
// Set the target date for your next big event
const eventDate = new Date("2025-05-10T18:00:00"); // May 10, 2025 at 6:00 PM
const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        timerElement.innerHTML = "The event has started!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // initial call

// === Testimonial Rotator ===
const testimonials = [
    `"A truly grand experience! The decor and service were top-notch." – Priya R.`,
    `"Spacious halls and the hospitality team were amazing." – Karan S.`,
    `"Perfect venue for our corporate meet. Highly recommend!" – Meera L.`,
    `"Great ambiance and professional staff. Will book again!" – Anil D.`
];

let testimonialIndex = 0;
const testimonialElement = document.getElementById("testimonial-text");

function rotateTestimonial() {
    testimonialElement.textContent = testimonials[testimonialIndex];
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

// Rotate testimonial every 6 seconds
setInterval(rotateTestimonial, 6000);
rotateTestimonial(); // initial call

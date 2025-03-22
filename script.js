document.addEventListener("DOMContentLoaded", function () {
    // Get the sections in the HTML where we will load content
    const therapistList = document.getElementById("therapist-list");
    const testimonialList = document.getElementById("testimonial-list");

    // Therapist Data
    const therapists = [
        { name: "Ella Stone", specialty: "Mindfulness Meditation", image: "images/ella-stone.jpg" },
        { name: "Every Quinn", specialty: "Trauma Therapy", image: "images/every-quinn.jpg" },
        { name: "Harper Lane", specialty: "Art Therapy", image: "images/harper-lane.jpg" },
        { name: "River Brooks", specialty: "Online Therapy", image: "images/river-brooks.jpg" },
        { name: "Sage Woods", specialty: "Holistic Healing", image: "images/sage-woods.jpg" },
        { name: "Skye Adams", specialty: "Family Counseling", image: "images/skye-adams.jpg" }
    ];

    // Customer Testimonials Data
    const testimonials = [
        { name: "Maya", feedback: "The mindfulness techniques changed my life!", image: "images/maya.jpg" },
        { name: "James", feedback: "Group therapy sessions provided a much-needed community.", image: "images/james.jpg" },
        { name: "Sarah", feedback: "Personalized techniques helped me manage my anxiety better.", image: "images/sarah.jpg" }
    ];

    // Function to load therapists dynamically
    function loadTherapists() {
        therapistList.innerHTML = "";
        therapists.forEach(therapist => {
            const therapistCard = document.createElement("div");
            therapistCard.classList.add("therapist-card");
            therapistCard.innerHTML = `
                <img class="therapist-img" src="${therapist.image}" alt="${therapist.name}">
                <div class="therapist-info">
                    <h3>${therapist.name}</h3>
                    <p>${therapist.specialty}</p>
                    <button class="btn btn-primary">Book Session</button>
                </div>
            `;
            therapistList.appendChild(therapistCard);
        });
    }

    // Function to load testimonials dynamically
    function loadTestimonials() {
        testimonialList.innerHTML = "";
        testimonials.forEach(customer => {
            const testimonialCard = document.createElement("div");
            testimonialCard.classList.add("testimonial-card");
            testimonialCard.innerHTML = `
                <img class="testimonial-img" src="${customer.image}" alt="${customer.name}">
                <div class="testimonial-info">
                    <h3>${customer.name}</h3>
                    <p>"${customer.feedback}"</p>
                </div>
            `;
            testimonialList.appendChild(testimonialCard);
        });
    }

    // Load therapists and testimonials on page load
    loadTherapists();
    loadTestimonials();
});

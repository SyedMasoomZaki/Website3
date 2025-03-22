document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Store preference in local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Load user preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Therapist images
    const therapists = [
        { name: "Ella Stone", specialty: "Mindfulness Meditation", image: "images/ella-stone.jpg" },
        { name: "Harper Lane", specialty: "Art Therapy", image: "images/harper-lane.jpg" },
        { name: "Skye Adams", specialty: "Family Counseling", image: "images/skye-adams.jpg" },
        { name: "River Brooks", specialty: "Online Therapy", image: "images/river-brooks.jpg" },
        { name: "Sage Woods", specialty: "Holistic Healing", image: "images/sage-woods.jpg" },
        { name: "Everly Quinn", specialty: "Trauma Therapy", image: "images/every-quinn.jpg" }
    ];

    const therapistList = document.getElementById("therapist-list");
    therapists.forEach(therapist => {
        const card = document.createElement("div");
        card.classList.add("therapist-card");
        card.innerHTML = `
            <img class="therapist-img" src="${therapist.image}" alt="${therapist.name}">
            <div class="therapist-info">
                <div class="therapist-name">${therapist.name}</div>
                <div class="therapist-specialty">${therapist.specialty}</div>
            </div>
        `;
        therapistList.appendChild(card);
    });

    // Testimonial images
    const testimonials = [
        { name: "Sarah M.", feedback: "Anxiety Management", image: "images/sarah.jpg" },
        { name: "James T.", feedback: "Depression Recovery", image: "images/james.jpg" },
        { name: "Maya K.", feedback: "Work-Life Balance", image: "images/maya.jpg" }
    ];

    const testimonialList = document.getElementById("testimonial-list");
    testimonials.forEach(customer => {
        const card = document.createElement("div");
        card.classList.add("therapist-card");
        card.innerHTML = `
            <img class="therapist-img" src="${customer.image}" alt="${customer.name}">
            <div class="therapist-info">
                <div class="therapist-name">${customer.name}</div>
                <div class="therapist-specialty">${customer.feedback}</div>
            </div>
        `;
        testimonialList.appendChild(card);
    });
});


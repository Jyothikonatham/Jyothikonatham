// Book Appointment Button
document.querySelector('#book-appointment').addEventListener('click', () => {
    alert('Appointment booked successfully!');
});

// Contact Form Validation
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d+$/;

    if (!name || !email || !phone || !message) {
        alert('Please fill out all fields!');
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
    } else if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number!');
    } else {
        alert('Form submitted successfully!');
    }
});

// Department Filtering
const departments = document.querySelectorAll('.department');
const filters = document.querySelectorAll('.filter');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        const departmentType = filter.dataset.type;
        departments.forEach((department) => {
            department.style.display = (department.dataset.type === departmentType || departmentType === 'all') ? 'block' : 'none';
        });
    });
});

// Doctor Profile Toggle
const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
        const profileId = toggleButton.dataset.profile;
        const profile = document.querySelector(#${profileId});
        profile.classList.toggle('show');
    });
});

// Debounce for search input
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Search Functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce(() => {
    const searchTerm = searchInput.value.toLowerCase();
    const doctors = document.querySelectorAll('.doctor');

    doctors.forEach((doctor) => {
        const doctorName = doctor.textContent.toLowerCase();
        doctor.style.display = doctorName.includes(searchTerm) ? 'block' : 'none';
    });
}, 300));

// Modal Popup for Doctor Profile
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeButton = document.getElementById('close-button');

document.querySelectorAll('.doctor-profile').forEach((profile) => {
    profile.addEventListener('click', () => {
        const doctorName = profile.dataset.name;
        const doctorImage = profile.dataset.image;
        const doctorSpecialty = profile.dataset.specialty;

        modal.style.display = 'block';
        modalContent.innerHTML = `
            <h2>${doctorName}</h2>
            <img src="${doctorImage}" alt="${doctorName}">
            <p>Specialty: ${doctorSpecialty}</p>
        `;
    });
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Scroll to Top Button
const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    scrollTopButton.classList.toggle('show', window.scrollY > 500);
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


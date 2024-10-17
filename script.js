// Simple script for any interactions
document.addEventListener('DOMContentLoaded', () => {
    // You can add more interactive elements or event listeners here
});
// Skill Filter Functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        // Filter skills
        document.querySelectorAll('.skill-item').forEach(skill => {
            if (category === 'all' || skill.classList.contains(category)) {
                skill.style.display = 'block';
            } else {
                skill.style.display = 'none';
            }
        });
    });
});

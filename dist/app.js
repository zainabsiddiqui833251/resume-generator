"use strict";
// app.ts
// app.ts
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-button');
    const hiddenItems = document.querySelectorAll('.hidden');
    if (button) { // Ensure button is not null
        button.addEventListener('click', () => {
            hiddenItems.forEach(item => {
                item.classList.toggle('hidden');
            });
            if (button.textContent === 'Show More') {
                button.textContent = 'Show Less';
            }
            else {
                button.textContent = 'Show More';
            }
        });
    }
});

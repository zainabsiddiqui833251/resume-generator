document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-button') as HTMLButtonElement | null;
    const hiddenItems = document.querySelectorAll('.hidden');

    if (button) {
        button.addEventListener('click', () => {
            hiddenItems.forEach(item => {
                item.classList.toggle('hidden');
            });

            if (button.textContent === 'Show More') {
                button.textContent = 'Show Less';
            } else {
                button.textContent = 'Show More';
            }
        });
    }
});

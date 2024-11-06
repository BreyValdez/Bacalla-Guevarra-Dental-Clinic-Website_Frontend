        // JavaScript to toggle the dropdown and arrow direction
        const dropdown = document.getElementById('dropdown');
        const dropdownButton = dropdown.querySelector('.dropdown-btn');

        dropdownButton.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
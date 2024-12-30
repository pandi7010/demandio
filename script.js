document.addEventListener('DOMContentLoaded', function() {
    // Prevent right-click (context menu)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Prevent inspect element shortcuts
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === 'i' || event.key === 'Shift' || event.key === 'u' || event.key === 'j')) {
            event.preventDefault();
        }
    });

    // Show main content after 3 seconds
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);

    const rentals = [
        {
            title: 'கருப்பட்டி/Karupatti',
            description: 'Karupatti, also known as palm jaggery, is a natural sweetener made from the sap of palm trees. Its a healthier alternative to processed sugar because its made without chemicals and retains essential nutrients and minerals.',
            price: '230/kg',
            photo: 'https://www.gourmetgardener.in/cdn/shop/files/Karuppatti_aaf482fb-2e08-4a14-aaf8-279c9a054763.jpg?v=1698307117',
            isBooked: false
        },
        {
            title: 'செம்பருத்தி பூ/Hibiscus',
            description: 'Hibiscus is known to lower blood pressure, improve cholesterol, and support digestion. It’s rich in antioxidants and boosts immunity, but should be used in moderation due to potential medication interactions.',
            price: '250/kg',
            photo: 'https://www.srinarayanans.com/product-images/sembaruthipowder.jpg/456155000000081308/700x700',
            isBooked: false
        },
        {
            title: 'பனங்கிழங்கு/Palm tuber',
            description: 'Panangkilangu (Palm tuber) is the tuber of the palm tree, commonly used in food and medicine. It is rich in nutrients and is believed to boost energy and regulate blood sugar. It is also used to improve overall health.',
            price: '160/kg',
            photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFa8zvHESYR7TmIHBuwb6i80JG1fdyt-1knqSkVq3qjiDF0KDU8LcTn_N21C4PMm3fvzhQ3DldwNIeSAI3K8acf2uaJaRwRSXdI7Itry8jSE2tEXYm11FXOnnOslFeC3hYNF52XUeNqHm2/s1600/IMG_7000.JPG',
            isBooked: true
        }
    ];

    const rentalsContainer = document.getElementById('rentals');
    const searchInput = document.getElementById('search');
    const toggleModeButton = document.getElementById('toggle-mode');
    
    // URL for the common Google Form for all products
    const googleFormUrl = 'https://your-google-form-url-here';

    function displayRentals(filteredRentals = rentals) {
        rentalsContainer.innerHTML = '';
        filteredRentals.forEach(rental => {
            const rentalCard = document.createElement('div');
            rentalCard.classList.add('col-md-4');

            rentalCard.innerHTML = `
                <div class="card">
                    <img src="${rental.photo}" class="card-img-top" alt="${rental.title}">
                    <div class="card-body">
                        <h5 class="card-title">${rental.title}</h5>
                        <p class="card-text">${rental.description}</p>
                        <p class="card-text"><strong>${rental.price}</strong></p>
                        
                        <a href="${googleFormUrl}" target="_blank" class="btn btn-primary"><i class="fas fa-credit-card"></i> Buy</a>
                        <span class="dot ${rental.isBooked ? 'red' : 'green'}"></span> ${rental.isBooked ? 'out of stock' : 'Stock available'}
                    </div>
                </div>
            `;

            rentalsContainer.appendChild(rentalCard);
        });
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRentals = rentals.filter(rental =>
            rental.title.toLowerCase().includes(searchTerm) ||
            rental.description.toLowerCase().includes(searchTerm)
        );
        displayRentals(filteredRentals);
    });

    // Toggle Dark Mode
    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    displayRentals();
});

destinations = [
    { name: "Paris", image: "paris.jpg", shortDescription: "Explore the city of lights.", price: "$1200", details: "A romantic city with rich culture, history, and landmarks like the Eiffel Tower.", region: "Europe" },
    { name: "Tokyo", image: "tokyo.jpg", shortDescription: "Visit the futuristic city of Japan.", price: "$1000", details: "A vibrant city that blends traditional temples with modern skyscrapers.", region: "Asia" },
    { name: "Rome",image: "rome.jpg",shortDescription: "Discover ancient Roman history.",price: "$950",details: "Walk through history with landmarks such as the Colosseum and Roman Forum.", region: "Europe" },
    { name: "Bangkok", image: "bangkok.jpg",shortDescription: "Explore the bustling capital of Thailand.",price: "$800",details: "A vibrant city known for its temples, shopping, and delicious street food.", region: "Asia" }
];

destinationsGrid = document.getElementById("destinationsGrid");

function displayDestinations() {
    destinationsGrid.innerHTML = '';  

    destinations.forEach(destination => {
        card = document.createElement("div");
        card.className+="destination-card";

        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.shortDescription}</p>
            <p><strong>${destination.price}</strong></p>
            <button onclick="openModal('${destination.name}')">View Details</button>
        `;
      
        destinationsGrid.appendChild(card);
    });
}

displayDestinations();  

searchInput = document.getElementById("searchInput");
regionSelect = document.getElementById("regionSelect");

searchInput.addEventListener("input", filterDestinations);
regionSelect.addEventListener("change", filterDestinations);

function filterDestinations() {
        searchQuery = searchInput.value.toLowerCase();
        selectedRegion = regionSelect.value;

        filteredDestinations = destinations.filter(destination => {
        matchesSearch = destination.name.toLowerCase().includes(searchQuery);
        matchesRegion = selectedRegion === "All" || destination.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    displayFilteredDestinations(filteredDestinations);
}

function displayFilteredDestinations(filteredDestinations) {
    destinationsGrid.innerHTML = '';  

    filteredDestinations.forEach(destination => {
        const card = document.createElement("div");
        card.classList.add("destination-card");

        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.shortDescription}</p>
            <p><strong>${destination.price}</strong></p>
            <button onclick="openModal('${destination.name}')">View Details</button>
        `;
        
        destinationsGrid.appendChild(card);
    });
}

modal = document.getElementById("destinationModal");
modalContent = document.getElementById("modalContent");
closeModalBtn = document.getElementById("closeModal");

function openModal(destinationName) {
    destination = destinations.find(d => d.name === destinationName);

    if (destination) {
        modalContent.innerHTML = `
            <h2>${destination.name}</h2>
            <p>${destination.details}</p>
            <p><strong>${destination.price}</strong></p>
            <button onclick="bookNow()">Book Now</button>
        `;
        modal.style.display = "block";  
    }
}

closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
    modal.style.display = "none";  
}

function bookNow() {
    var destinationName = modalContent.querySelector("h2").textContent;
    window.location.href = "BookingPage.html?destination=" + destinationName;    
}
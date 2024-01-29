// Get all pets
function getAllPets() {
    fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => {
            // Add code here to display pets in the DOM
            console.log(pets); // For debugging
        })
        .catch(error => console.error('Error:', error));
}

// Get pets by owner
function getPetsByOwner(owner) {
    fetch('/api/v1/pets/owner?owner=' + owner)
        .then(response => response.json())
        .then(pet => {
            // Add code here to display pet in the DOM
            console.log(pet); // For debugging
        })
        .catch(error => console.error('Error:', error));
}

// Get pets by name
function getPetsByName(name) {
    fetch('/api/v1/pets/' + name) // Corrected the URL structure
        .then(response => response.json())
        .then(pet => {
            // Add code here to display pet in the DOM
            console.log(pet); // For debugging
        })
        .catch(error => console.error('Error:', error));
}

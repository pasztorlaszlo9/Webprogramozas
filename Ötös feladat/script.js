let AllBookings = [];

document.addEventListener('DOMContentLoaded', async () => {

    const officeContainer = document.getElementById('office-container');
    const myBookings = document.getElementById('reserved');

    async function fetchOffices() {
        const response = await fetch('https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/offices.json')
        const data = await response.json();
        return data;
    }

    function renderOfficeslist(officesToDisplay) {
        officesToDisplay.forEach(office => {
            const card = createOfficeCard(office);
            officeContainer.appendChild(card);
        })
    }

    function createOfficeCard(office) {
        const cardCol = document.createElement('div');
        cardCol.classList.add('col');
        cardCol.innerHTML = `
            <div class="card h-100">
                <img src="${office.image}" class="card-img-top" alt="${office.name}">
                <div class="card-body">
                    <h5 class="card-title">${office.name}</h5>
                    <p class="card-text">Cím: ${office.address}</p>
                    <p class="card-text">Terület: ${office.area_m2} m²</p>
                    <p class="card-text">Alapár: ${office.base_fee} €</p>
                    <p class="card-text">Napi ár: ${office.daily_price} €/nap</p>
                    <button class="btn btn-primary" 
                        data-office-id="${office.id}"
                        data-office-name="${office.name}">Foglalás</button>
                </div>
            </div>
        `;

        return cardCol
    }

    const offices = await fetchOffices();
    renderOfficeslist(offices);

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', handleConfirmBooking);
    });

    function renderBookings() {
        myBookings.innerHTML = '';
        AllBookings.forEach(booking => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = booking.name;
            myBookings.appendChild(li);
        });
    }

    function handleConfirmBooking() {
        alert("Sikeres foglalás");
        const newBooking = {
            id: this.dataset.officeId,
            name: this.dataset.officeName,
        };
        AllBookings.push(newBooking);
        renderBookings();
    }

});
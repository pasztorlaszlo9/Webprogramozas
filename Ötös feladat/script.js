
let AllBookings = [];

document.addEventListener('DOMContentLoaded', async () => {
    async function fetchOffices() {
        const response = await fetch('https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/offices.json')
        const data = await response.json();
        return data;
    }


    const officeContainer = document.getElementById('office-container')

    function renderOfficeslist(officesToDisplay) {
        officesToDisplay.forEach(office => {
            const card = createOfficeCard(office);
            officeContainer.appendChild(card);
            console.log("mukszik")
        })
    }

    function createOfficeCard(office) {
        const cardCol = document.createElement('div');
        cardCol.innerHTML = `<div class="card-container">
            <h5 class="card-title">${office.name}</h5>
            <p class="card-text">Cím: ${office.address}</p>
            <p class="card-text">Terület: ${office.area_m2}</p>
            <p class="card-text">Négyzetméter ár:${office.base_fee}</p>
            <p class="card-text">Napi ár:${office.daily_price}</p>
            <img src="${office.image}" class="card-img-top" alt="...">
            <button class="btn btn-primary btn-lg btn-block mt-3" 
             data-office-id="${office.id}"
             data-office-name="${office.name}">Foglalás</button>
            </div>
           `
        return cardCol
    }


    const asd = await fetchOffices()
    renderOfficeslist(asd)

    const confirmBookingButton = document.getElementsByClassName('btn')
    console.log(confirmBookingButton)


    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', handleConfirmBooking)
    })

    function renderBookings() {
        myBookings.innerHTML = '';
        const ul = document.createElement('ul');
        ul.className = 'list-group';
        AllBookings.forEach(booking => {
            const li = document.createElement('li');
            li.innerHTML = `<div class="card-container">
            <h5 class="card-title">${booking.name}</h5> </div>`;
            ul.appendChild(li);
        }
        )
        myBookings.appendChild(ul);
    }

    function handleConfirmBooking() {
        alert("Sikeres foglalás")
        console.log(this.dataset.officeId)
        console.log(this.dataset.officeName)
        const newBooking = {
            id: this.dataset.officeId,
            name: this.dataset.officeName,

        }
        AllBookings.push(newBooking)
        console.log(AllBookings)
        renderBookings()
    }

    const myBookings = document.getElementById('reserved')



}
)
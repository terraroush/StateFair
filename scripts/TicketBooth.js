const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "rideTicket-btn") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketPurchased: event.target.value
            }
        })
        eventHub.dispatchEvent(rideEvent);
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket-btn">Ride Ticket</button>
        </div>
    `
}


// create a function that counts every click of any button in a session. For every ticket sold, increment.
// after a ticket is counted, update the state change

const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelector(".customer");

let ticketsPurchased = 0;

export const Counter = () => {
    eventHub.addEventListener("anyTicketPurchased", () => {
        contentTarget.innerHTML = `Total tickets purchased: ${ticketsPurchased.value++}`
    })
}

const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".games")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", (event) => {
        const ticketWasPurchased = event.detail.ticketPurchased
        return contentTarget.innerHTML += `
          <div class="person player"></div>
          `;
    });
  };
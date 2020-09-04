const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = () => {
  eventHub.addEventListener("rideTicketPurchased", (event) => {
    if (event.detail.ticketPurchased) {
      return (contentTarget.innerHTML = `
        <div class="person rider"></div>
        `);
    }
  });
};

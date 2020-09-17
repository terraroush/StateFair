const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelector(".sideshow");

export const SideshowTicketHolders = () => {
  eventHub.addEventListener("sideshowTicketPurchased", (event) => {
    const ticketWasPurchased = event.detail.ticketPurchased;
    return (contentTarget.innerHTML += `
          <div class="person gawker"></div>
          `);
  });
};

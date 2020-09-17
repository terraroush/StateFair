const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelector(".food");

export const FoodTicketHolders = () => {
  eventHub.addEventListener("foodTicketPurchased", (event) => {
    const ticketWasPurchased = event.detail.ticketPurchased;
    return (contentTarget.innerHTML += `
          <div class="person eater"></div>
          `);
  });
};

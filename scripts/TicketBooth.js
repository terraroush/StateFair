const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "rideTicket-btn") {
    const rideEvent = new CustomEvent("rideTicketPurchased", {
      detail: {
        ticketPurchased: event.target.value,
      },
    });
    eventHub.dispatchEvent(rideEvent);
  }
});
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "foodTicket-btn") {
    const foodEvent = new CustomEvent("foodTicketPurchased", {
      detail: {
        ticketPurchased: event.target.value,
      },
    });
    eventHub.dispatchEvent(foodEvent);
  }
});
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "gameTicket-btn") {
    const gameEvent = new CustomEvent("gameTicketPurchased", {
      detail: {
        ticketPurchased: event.target.value,
      },
    });
    eventHub.dispatchEvent(gameEvent);
  }
});
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "sideshowTicket-btn") {
    const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
      detail: {
        ticketPurchased: event.target.value,
      },
    });
    eventHub.dispatchEvent(sideshowEvent);
  }
});
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "fullPackageTicket-btn") {
    const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
      detail: {
        ticketPurchased: event.target.value,
      },
    });
    eventHub.dispatchEvent(fullPackageEvent);
  }
});

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket-btn">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
        <button id="foodTicket-btn">Food Ticket</button>
        </div>
        <div class="ticketBooth">
        <button id="gameTicket-btn">Game Ticket</button>
        </div>
        <div class="ticketBooth">
        <button id="sideshowTicket-btn">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
        <button id="fullPackageTicket-btn">Full Package Ticket</button>
        </div>
    `;
};

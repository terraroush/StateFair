const eventHub = document.querySelector("#state-fair");
const rideTarget = document.querySelector(".rides");
const foodTarget = document.querySelector(".food");
const gamesTarget = document.querySelector(".games");
const sideshowTarget = document.querySelector(".sideshow");

export const PackageTicketHolders = () => {
  eventHub.addEventListener("fullPackageTicketPurchased", (event) => {
    const ticketWasPurchased = event.detail.ticketPurchased;
    return (
      (rideTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `) +
      (foodTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `) +
      (gamesTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `) +
      (sideshowTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `)
    );
  });
};

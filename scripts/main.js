// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
import { PackageTicketHolders } from "./package/PackageTicketHolders.js";
// import { Counter } from "./counter/CounterHome.js";


TicketBooth();
// Counter();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
PackageTicketHolders();
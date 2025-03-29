import { world, system } from "@minecraft/server";
import { henlo } from "./games/parkour_run.ts"

function mainTick() {
    if ( system.currentTick % 100 == 0 ) henlo()

    system.run( mainTick )
}

world.afterEvents.worldLoad.subscribe( mainTick )
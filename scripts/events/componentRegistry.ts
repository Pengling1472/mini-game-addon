import { system, StartupEvent, BlockComponentStepOnEvent } from "@minecraft/server";

export default function ComponentRegistryInit() {
    system.beforeEvents.startup.subscribe( ( event: StartupEvent ) => {
        event.blockComponentRegistry.registerCustomComponent( 'checkpoint', {
            onStepOn( event: BlockComponentStepOnEvent ) {
                
            }
        } )
    } )
}
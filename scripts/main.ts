import { world, system, InputButton, ButtonState } from "@minecraft/server"
import { Vector3 } from './classes/vector3'

let loopStop = false

const players: Map<string, {
    doubleJumped: boolean,
    hasjumped: boolean
}> = new Map()

function init() {
    for ( const player of world.getAllPlayers() ) {
        players.set( player.name, {
            doubleJumped: false,
            hasjumped: false
        } )

        player.runCommand( "effect @s saturation infinite 1 true" )
    }

    mainTick()
}

function mainTick() {
    // if ( loopStop ) {
    //     world.sendMessage( 'code stopped' )
    //     return
    // }

    for ( const player of world.getAllPlayers() ) {
        const playerData = players.get( player.name )

        if ( !playerData ) continue

        const { doubleJumped, hasjumped } = playerData
        const rotation = player.getRotation()
        const jumpState = player.inputInfo.getButtonState( InputButton.Jump ) == ButtonState.Pressed

        if ( player.isOnGround ) {
            playerData.doubleJumped = false
            playerData.hasjumped = false
        }

        if ( !player.isOnGround ) {
            if ( !jumpState ) playerData.hasjumped = true
            
            if ( jumpState && hasjumped && !doubleJumped ) {
                playerData.doubleJumped = true
    
                player.applyKnockback( { x: - Math.sin( rotation.y / 180 * Math.PI ), z: Math.cos( rotation.y / 180 * Math.PI ) }, 0.5 )
            }
        }

    }

    // if ( system.currentTick % 1200 == 0 ) loopStop = true

    system.run( mainTick )
}

world.afterEvents.worldLoad.subscribe( init )
namespace SpriteKind {
    export const start = SpriteKind.create()
    export const animation = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const consumible = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    // Donovan put your map here
    if (character_choice == 2) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`NOJO OTHER PUNCH`,
        100,
        false
        )
    }
    // Donovan put your map here
    if (character_choice == 1) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player2, function (sprite, otherSprite) {
    sprite.x += -2
    otherSprite.x += 2
})
function defeat (mySprite: Sprite) {
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    tiles.setCurrentTilemap(tilemap`level21`)
    if (character_choice == 1) {
        scene.setBackgroundImage(assets.image`Nojo lost`)
    } else {
        scene.setBackgroundImage(assets.image`kuji lost`)
    }
    return 0
}
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (info.score() == 1000) {
        scene.setBackgroundImage(assets.image`Map choice screen`)
        sprites.destroy(start_up)
        sprites.destroy(button)
        pause(2000)
        map_choice = game.askForNumber("Map 1 or 2", 1)
        info.player1.setScore(0)
        scene.setBackgroundImage(assets.image`Character choice`)
        pause(2000)
        character_choice = game.askForNumber("character 1 or 2", 1)
        // Donovan put your map here
        if (character_choice == 1) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`nojo`, SpriteKind.Player))
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`kuji`, SpriteKind.player2))
        }
        // Donovan put your map here
        if (character_choice == 2) {
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
                ................................
                ................................
                ...............fffff............
                .........fffffffff3f............
                .........f333333333ff...........
                ......fff33333333333f...........
                ......fff33fffffff33f...........
                ......f33ffddddddff3f...........
                ......fffdddddddddfff...........
                ......ffdddddddddddfff..........
                ......fddddfddddfddfff..........
                ......fddddfddddfddff...........
                ......ffdddfddddfdddf...........
                .......fddddddddddddf...........
                .......ffddddddddddff...........
                ........ffdddddddddf............
                ........22222222222f............
                ......fff222222222fff...........
                ......fffffffffffffff...........
                ......fffffffffff5fff...........
                ......fffffffffffffff...........
                ......fffffffffffffff...........
                ......fffffffffffffff...........
                ......fffffffffffffff...........
                ......ddfffffffffffdd...........
                ......ddfffffffffffdd...........
                ........fffffffffff.............
                ........fffffffffff.............
                ........fffffffffff.............
                .......ffffff..ffff.............
                .......ffffff..fffff............
                .......eeeeee..eeeee............
                `, SpriteKind.Player))
            mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`nojo`, SpriteKind.player2))
        }
        // Donovan put your map here
        if (map_choice == 1) {
            scene.setBackgroundImage(img`
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc4444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc44444444444444444444cccc444444ccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc444444444444444cccccc4444444ccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc444444444cccccccccccc444444444ccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc4444444444ccccccccccccc444444444ccccceeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc44444444444ccccccccccccc444444444cccccceeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc4444444444ccccccccccccccc444444444ccccceeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc44444444444cccccccccccccccc44444444cccccceeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc4444444444cccccccccccccccccc44444444ccccceeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc44444444444ccccccccccccccccccc44444444ccccceeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc44444444444cccccccccccccccccccc4444444ccccceeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccc44444444ccccceeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc44444444444cccccccccccccccccccccc4444444ccccceeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444ccccccccccccccccccccccc444444cccccceeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc4444444444cccccccccccccccccccccccc4444444ccccceeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc444444444ccccccccccccccccccccccccccc444444cccccceeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444cccccccccccccccccccccccccccc4444444cccccceeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444cccccccccccccccccccccccccccc4444444cccccceeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc444444444ccccccccccccccccccccccccccccc4444444cccccceeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc444444444cccccccccccccccccccccccccccccc4444444cccccceeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc444444444ccccccccccccccccccccccccccccccc4444444cccccceeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc444444444cccccccccccccccccccccccccccccccc44444444ccccceeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc444444444ccccccccccccccccccccccccccccccccc44444444ccccceeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc4444444444ccccccccccccccccccccccccccccccccc44444444ccccceeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc4444444444cccccccccccccccccccccccccccccccccc44444444ccccceeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc4444444444ccccccccccccccccccccccccccccccccccc444444444cccceeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc4444444444ccccccccccccccccccccccccccccccccccccc444444444cccceeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444cccccccccccccccccccccccccccccccccccccccc44444444ccccceeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccc44444444ccccccccccccccccccccccccccccccccccccccccc4444444ccccceeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444ccccccccccccccccccccccccccccccccccccccccccc444444cccccceeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc444444444ccccccccccccccccccccccccccccccccccccccccccc444444cccccceeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444ccccccccccccccccccccccccccccccccccccccccccccc44444ccccccceeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccc44444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc4444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccce
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccce
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc44444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc4444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc44444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc44444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc4444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc4444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                `)
            tiles.setCurrentTilemap(tilemap`level14`)
        }
        // Donovan put your map here
        if (map_choice == 2) {
            scene.setBackgroundImage(assets.image`Sky high map`)
            tiles.setCurrentTilemap(tilemap`level14`)
        }
        mp.setPlayerIndicatorsVisible(true)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(5, 100)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(144, 100)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    // Donovan put your map here
    if (character_choice == 1) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`no punch`,
        100,
        false
        )
    }
    // Donovan put your map here
    if (character_choice == 2) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`Kuji punch`,
        100,
        false
        )
    }
})
function defeat_2 (player_2: Sprite) {
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    tiles.setCurrentTilemap(tilemap`level21`)
    if (character_choice == 1) {
        scene.setBackgroundImage(assets.image`Kuji losing`)
    } else {
        scene.setBackgroundImage(assets.image`Nojo losing`)
    }
    return 0
}
info.player1.onLifeZero(function () {
    player_1 = defeat(mySprite)
})
info.player2.onLifeZero(function () {
    info.player2.setLife(defeat_2(mySprite))
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    // Donovan put your map here
    if (character_choice == 1) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`nojo kick`,
        100,
        false
        )
    }
    // Donovan put your map here
    if (character_choice == 2) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`KUJI KICK`,
        100,
        false
        )
    }
})
let mySprite: Sprite = null
let player_1 = 0
let map_choice = 0
let character_choice = 0
let button: Sprite = null
let start_up: Sprite = null
scene.setBackgroundImage(assets.image`starting scree`)
start_up = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.animation)
start_up.setPosition(13, 25)
animation.runImageAnimation(
start_up,
assets.animation`intro starting`,
500,
false
)
music.play(music.stringPlayable("E F E D E F G D ", 44), music.PlaybackMode.LoopingInBackground)
button = sprites.create(assets.image`Start butto`, SpriteKind.start)
button.setPosition(81, 89)
animation.runImageAnimation(
button,
assets.animation`flashing`,
500,
true
)
info.player1.setScore(1000)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
let list = [assets.image`medkit`, assets.image`band aid`, assets.image`speed boost`]
info.player1.setLife(50)
info.player2.setLife(50)
game.onUpdateInterval(10000, function () {
    powerups = sprites.create(list._pickRandom(), SpriteKind.consumible)
    powerups.setPosition(randint(0, 150), 100)
})

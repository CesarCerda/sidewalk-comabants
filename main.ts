namespace SpriteKind {
    export const start = SpriteKind.create()
    export const animation = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (info.score() == 1000) {
        scene.setBackgroundImage(assets.image`Map choice screen`)
        sprites.destroy(start_up)
        sprites.destroy(button)
        pause(100)
        map_choice = game.askForNumber("Map 1 or 2", 1)
        info.player1.setScore(0)
    }
})
let map_choice = 0
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
forever(function () {
    // Donovan put your map here
    if (map_choice == 1) {
    	
    }
    // Donovan put your map here
    if (map_choice == 2) {
        scene.setBackgroundImage(assets.image`Sky high map`)
        tiles.setCurrentTilemap(tilemap`level14`)
    }
})

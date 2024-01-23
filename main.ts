namespace SpriteKind {
    export const start = SpriteKind.create()
    export const animation = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (info.score() == 1000) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ff11ffffff11fffff11111ff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ff11ffffff11fffff1fff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1ff11ffffff11fffff1fff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1f1f1ffffff11fffff1fff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1f1f1fffff1f1fffff1111ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1f1f1fffff1ff1ffff1ffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1f1ff1ffff1111ffff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff11fff1fff1fff1ffff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff11fff1fff1fff1ffff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff11fff1fff1ffff1fff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fff1fff1ffffffff1ffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111111111111111fffffffffffff
            fffffffffff122222222222222222222222222222222222222222222222222222222222222221fffff1cccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222222222222222222222222222221fffff1ccc111ccccccccccccccccccfffcccccccccccccccccccccccccccccccccccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222222222222222b222221fffff1cc1bbb1ccccccccccccccccffffccc1cccccccccccccccccccccccccccccccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222222222222222b222221fffff1c11bbb11ccccccccc1ccccffffcccccccccccccccccccccccccc1cccccccccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222222222b22b22b22b221fffff1cc1bbb1ccccccccccccccff88fcccccccccccccccc1cccccccccccccccccccc1fffffffffffff
            fffffffffff1222555c222222222222222222222222222222222222222222222222222222b221fffff1ccc111ccccccccccccfccff88fcccccccc1cccccccccccccccccccccc1ccccc1fffffffffffff
            fffffffffff1222555c222222222222222222222222222222222222222222222222f2b222f221fffff1cccc1cccccccccccccffcf888fccccccccccccccccccccccccccccccccccccc1fffffffffffff
            fffffffffff1222555c22222222222222222222222222222222222222222222222b222bff2221fffff1cccccccccccccc1cccf8f88188ffcccccccccccccccccccc1cccccccccccccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222222222222b222b2ffb21fffff1ccccccccccccccccccf88f88888fccccccccccccccccccccccccffffffffccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222222222222ee44422b21fffff1ccc1ccccccccccccccf88f88818fccccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222222222222f4444be221fffff1ccccccccccccccccccf88ff888fffcccccccccccccccccccccccf121121fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222222222222ee4444eee21fffff1ccccccccccccccccccf188ff8888fcccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222222222222ee4444eee21fffff1ccccccccccccccccccf88888fff8fcccccc1ccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222222222222222222eee444eeee21fffff1ccccccccccccccc1ccf8818888fffcccccccccccccccccccccccf121121fccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222222222eeee444eeee21fffff1ccccfffffffcccccccf888888888ccccccccccccccc1ccccccccf222222fccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222222222eeee444eeee21fffff1cccfffffffffccccccf18881888fccccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222222222eeee4444eeee21fffff1ccfffffffffffcccccf88888888fccccccccccccccccccccccccf121121fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222222222eeee4444eeee21fffff1ccff1fffff1ffcccccf88188818fccccccccc1ccccccccccccccf222222fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222222222eeee4444eeee21fffff1ccfffffffffffcccccf88888888fccccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222222eeeeeee444eeeee21fffff1ccffff1f1ffffcccccf18881888fccccccccccccccccccccccccf121121fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222222222222eeeee44444eeeeeee1fffff1ccfffffffffffcccccf88888888fccccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222222222222eeeee44444eeeeeeeefffff1ccff1fffff1ffcccccf88188818fccccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222222eeeeee4444444eeeeeefffff1ccfffffffffffcccccf88888888fccccccccccccccccccccccccf121121fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222222eeeeee4444e444eeeeeefffff1cccfff1f1fffccccccf18881888fccccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222222222eeeeeee4444e444eeeeeefffff1ccccfffffffcccccccf88188888fccccccccccccccccccccccccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222222222eeeeeee444ee444eeeeeefffff1ccccf1fff1fcccccccf88888818fccffffffffffffffffffffccf121121fccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222222eeeeeeee444ee444eeeeeefffff1ccccfffffffcccccccf88881888fccf777777771777777777fccf222222fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222eeeeeeee4444ee4444eeeeefffff1ccccf1fff1fcccccccf18888888fccf771777771777771777fccf222222fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222222eeeeeee44444ee4444eeeeefffff1ccccfffffffcccccccf88888818fccf7fffffffffffffff77fccf121121fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222222eeeeeee44444eee444444eeefffff1ccccf1fff1fcccccccf88188888fccf777177177771717777fccf222222fccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222eeeeeee44444eeeee44444ee1fffff1ccccfffffffcccccccf88881888fccf7ffffffffffffff777fccf222222fccc1fffffffffffff
            fffffffffff12222222222222222222222222222222222222222eeeeee444444eeeeee4444ee1fffff1ccccf1fff1fcccccccf18888888fccf777777777777777777fccf121121fccc1fffffffffffff
            fffffffffff1222222222222222222222222222222222222222eeeeee444444eeeeeeee444ee1fffff1ccccfffffffcccccccf88188818fccf771717177177177177fccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222eeeeeee44444eeeeeeeee444ee1fffff1ccccf1fff1fcccccccf88881888fccf777777777777777777fccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222eeeeee44444eeeeeeeeee444ee1fffff1ccccfffffffcccccccf18888888fccf7ffffffffffffff777fccf121121fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222eeeee44444eeeeeeeeeee444ee1fffff1ccccf1fff1fcccccccf88188818fccf771777177717777177fccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222eeeee4444eeeeeeeeeeee444ee1fffff1ccccfffffffcccccccf88881888fccf7ffffffffffffffff7fccf222222fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222eeeee444eeeeeeeeeeeee444ee1fffff1ccccf1fff1fcccccccf18888818fccf771777177717777177fccf121121fccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222222eeee4444eeeeeeeeee444444ee1fffff1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1fffffffffffff
            fffffffffff1222222222222222222222222222222222222eeee444444eeeeeeeeee444eeeee1fffff1cccdf1ffd1fccdccccd8818d888fdcf71d7771d7717d7717dfccfd2112dfccc1fffffffffffff
            fffffffffff122222222222222222222222222222222222eeeee444444eeeeeeeeee444eeeee1fffff1cccdffffdffccdccccd8888d818fdcf7fdffffd7fffd77ffdfccfd2222dfccc1fffffffffffff
            fffffffffff12ccccccccccccccccc22222222222222222eeee444444eeeeeeeeeeeeeeeeeee1fffff1cccdf1ffd1fccdccccd1888d888fdcf77d1771d7717d7717dfccfd2112dfccc1fffffffffffff
            fffffffffff1ccccccccccccccccccccccccccccccccccceee44444eeeeeeeeeeeeeeeeeeeee1fffff1cccdffffdffccdccccd8818d888fdcf77d7777d7777d7777dfccfd2222dfccc1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccc4444eeeeeeeeeeeeeeeceeeccc1fffff1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccc4444ccccccceeeeeeeeccccccc1fffff1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1fffff1bbbbbbbbbfbbbbbbfbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbb1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1fffff1bbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbfbbbbbbfbbbbbfbbbbbbbbbbfbbbbbb1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1fffff1bbbbbbbbfbbbbfffbbbbbbfbbbbbbbbfbbbbbbfbbbbbbfbbbbffbbbbfbbbbbb1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1fffff1bbbbbbbbfbbbbbbbbbbbbbfbbbbbbbfbbbbbbfbbbbbbfbbbbbbbbbbfbbbbbbb1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1fffff1bbbbbbbfbbbbbbbbbbbbbfbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbfbbbbbbbb1fffffffffffff
            fffffffffff1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1fffff1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1fffffffffffff
            fffffffffff111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111111111111111fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff11ffffff11111ff1fff1fffff11111ffffffffffffffffffffffffffffff1111fff11111fffff1fffffff1ffff1ff1fffffffff1fff1ff1111ff111fff1fff1ffffffffffffffffffffffffff
            fffffff11fffff1fffffff1fff1ffff1ffffff1fff1fff1fff1ffffff1fff1fffffff1ffffff1fffffff1fffffff1fff1ffff1fff1ffff1fff1fff11ff1ffffff1fff1ffffffffffffffffffffffffff
            ffffff1f1fffff1fffffff1fff1ffff1ffffff1fff1ff1f1f1f1ffff1f1f1f1ffffff1ffffff1fffffff1fffffff1ff1ffffff1ff1ffff1fff1fff11ff1ffffff1fff1ffffffffffffffffffffffffff
            ffffff1f1fffff1fffffff1fff1ffff1ffffff1fff1ff1f1f1f1ffff1f1f1f1ffffff1ffffff1fffffff1fffffff1f1ffffffff11fffff1fff1fff11ff1ffffff1fff1ffffffffffffffffffffffffff
            fffff1fff1ffff1fffffff1fff1ffff1ffffff1fff1ff1f1f1f1ffff1f1f1f1ffffff1ffffff1ffffffff1111fff11ffffffffff1fffff11111fff11ff1ffffff1fff1ffffffffffffffffffffffffff
            fffff1fff1fffff1111fff11111fffff1111ff1fff1ff1f1f1f1ffff1f1f1f1ffffff1ffffff1ffffffffffff1ff11ffffffffff1fffff1fff1fff11ff1f11fff11111ffffffffffffffffffffffffff
            ffff1f1111fffffffff1ff1fff1fffffffff1f1fff1f1ff1f1f1fff1ff1f1f1ffffff1ffffff1ffffffffffff1ff1f1ffffffff1ffffff1fff1fff11ff1fff1ff1fff1ffffffffffffffffffffffffff
            ffff1fffff1ffffffff1ff1fff1fffffffff1f1fff1f1ff1f1ff1ff1ff1f1ff1fffff1ffffff1ffffffffffff1ff1f1ffffffff1ffffff1fff1fff11ff1fff1ff1fff1ffffffffffffffffffffffffff
            fff1ffffff1ffffffff1ff1fff1fffffffff1f1fff1f1ff1f1ff1ff1ff1f1ff1fffff1ffffff1ffffffffffff1ff1ff1ffffff1fffffff1fff1fff11ff1fff1ff1fff1ffffffffffffffffffffffffff
            fff1ffffff1ffffffff1ff1fff1fffffffff1f1fff1f1ff1f1ff1ff1ff1f1ff1fffff1ffffff1ffffffff1111fff1fff1fffff1fffffff1fff1fff11ff1fff1ff1fff1ffffffffffffffffffffffffff
            ff1fffffff1ffff1111fff1fff1fffff1111fff111ff1ff1f1fff1f1ff1f1fff1ff1111fffff1fffffffffffffff1ffff1fff1ffffffff1fff1ff1111ff111fff1fff1ffffffffffffffffffffffffff
            ff1ffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        sprites.destroy(start_up)
        sprites.destroy(button)
        pause(7000)
        game.splash(game.askForNumber("Map 1 or 2", 1))
        info.player1.setScore(0)
    }
})
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

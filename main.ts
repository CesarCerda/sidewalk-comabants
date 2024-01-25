namespace SpriteKind {
    export const start = SpriteKind.create()
    export const animation = SpriteKind.create()
    export const player2 = SpriteKind.create()
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
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbddddddddbbbbbbbbddbbbbbbbbddbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbddbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbdbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbddbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbddbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbddbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbdbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbdddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdddddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdddddddddbbbbbbbbbbddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbff1ffffbbbfffffbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbffffffbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbddddddddddddddbbbbddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbf11111fbfff111fffbbbbbbbbbbbbbbbbbbbdbbbbbbbbbffffffbbbbbbffffbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbfffffff1111ffff11111ffffffffffbbbbbbbbbbbdbbbbbbfffbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbddddddddddddddddbdddddddddbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbff11111f1111ff11111111ff1f1111ffbbbbbbbbbbdbbbbffbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbdbbbb
            bbddddddddddddddddddddddddbbbbbbbbbddddddddddbbbbbbbbbbbbbbbbbbbbbfffff111111ff111f1111f1111b111fff11fffbbbbbbbbbdbbfbbbbbbbbbbdbbbbbbbbbbbbbbffbbbbbbbbbbbdbbbb
            ddbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbf11111111111f11111111f1111111111f1111fffbbbbbbbbffbbbbbbbbbbbdbbbbbbbbbbbddbbfffbbbbbbbbbdbbbb
            bbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbf11111111111f111111111f1111111111f1111fffbbbbbbbfdbbbbbbbbbbbbbbbbbbbbbddbbbbbbfbbbbbbbbbdbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbfffff111111111111f11111111f1111111111f1111ffffbbbbbfbbdbbbbbbbbbbbbbbbbbbddbbbbbbbbbffbbbbbbdbbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbf1111111111111111ff1111111f1111111111f11111111fffbbfbbbddbbbbbbbbbbbbbb1dbbbbbbbbbbbbffbbbbbdbbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbff11111111111111111f1111111f11111111111111111111ffbffb111111bbb111111bb1d11111bbbbbbbbbffbbbbdbbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbff111f1111111111111ff1111111f1111111111111111111fbbfbbbb1bbbddbbb1bbbbbd1bbbbbbbbbbbbbbbffbbbdbbbbb
            bbbbbbbbbbbbbbdddddddddddbbbbbdbbbbddddbbbbbbbbbbbdbbbbbbbbbbffffff11111111111111ff111111f11111111111111fffffbbffbbbb1bbbbbddb1bbbbdb1bbbbbbbbbbbbbbbbffbbdbbbbb
            bbbbbbbbbbbbbbbdddddddddbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff1111111111111111111111f11111111111111fbbbbbbfbbbbb1bbbbbbbd1bbbdbb1bbbbbbbbbbbbbbbbbfbdbbbbbb
            bbbbbbbbbbbbbbbbdddddddbbbbddbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff111111111111111111111ff1111111111111ffbbbbbffbbbbb1bbbbbbbb1dddbbb1bbbbbbbbbbbbbbbbbbfbbbbbbb
            bbbbbbbbbbbbbbdbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbffffff1111ddddddddddd111111111111111fffbbbbbbfbbbbbb1bbbbbbbb1bdbddbb1111bbbbbbbbbbbbbbbfbbbbbb
            bbbbbbbbbbbbddbbbbbbdbbbddbdbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbbf1111ddddddddddd111111111111111fbbbbbbbbfbbbbbb1bbbbbbbb1dbbbbddbbbb1bbbbbbbbbbbbbbffbbbbb
            bbbbbbbbbbbbbbbbbbbbddddbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbf1111ddddddddddd111111111111111fbbbbbbbfbbbbbbb1bbbbbbbb1bbbbbbbddbb1bbbbbbbbbbbbbbbffbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbdbbbbbbbbbbbbbbf1111ddddddddddd111111111111111fbbbbbbffbbbbbb1111bbbbbb1bbbbbbbbbdd1bbbbbbbbbbbbbbbbfbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbdbbbbbbbbbbbbbffdddddddddddddddddddddddddddddfbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbb1111ddbbbbbbbbbbbbbbbffbbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbdbbbbbbbbbbbbbffdddddddddddddddddddddddddddddfbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbdbbbbbbbfbbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbbdbbbbbbbbbbbbffdddddddddddddddddddddddddddddfbbbbffb1bb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbdbbbbbbbbffbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbbddbbbbbbbbbbbfddddddddddddddddddddddddddddddfbbbffb11b1bbbbbbbbbbbbb111111bb11111bbbbbbbbddbbbbbbbbbbff
            bbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbdbbbbbbbbbbfddddddddddddddddddddddddddddddfbbffbb11b1bbbb11111bbbbbb1bbbb1bbbbb1bb1bbb11bd1111b1111bf
            bbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbdbbbbbbbbbfdddd111999dddddddd999111ddddddfbffbbb11b1bbb1bbbbb1bbbbb1bbbb1bbbbb11b1bbb1bbb1bbbb1bb1bf
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbdbbdbbbbbbbbbbbdbbbbbbbbfddddddddddddddddddddddddddddddffbbbbb11b1bbb1bbbbb1bbbbb1bbbb1bbbbb1bb11bb1bbb1dbbb1bb1bf
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbdbbdbbbbbbbbbbbbdbbbbbbbfddddddddddddddddddddddddddddddfbbbbb1b11bbbb1bbbdb1bbbbb1bbbb1bbbbb1bbb1bb1bbb1bddb111bbf
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbdbbbbbbfddddddddddddddddddddddddddddddfbbbbb1b11bbbb1bbbdb1bbbdd1bbbb1bbbbb1bbbb11bbbb111bd11bbbf
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbddbbbbbfddddddddddddddddddddddddddddddfbbbbb1b11bbbb1bbbdb1bbd1b1dbbb1bbbbb1bbbb11bbbb1bbbb1b1bbf
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbfffddddddddddddddddddddddddddfffbbbbb1b11bbbbb11111bbbd111bdbbb11111bbbbbbbbbbb1bbbb1bb1bf
            bbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbfddddddddddddddddddddddddddfffbbbbb1bb1bbbbbbbbbdbbdbbbbbbbbbbbbbbbbbbbbbbbbb111bb1bbbbf
            bbbbbbbbbbbbbbbbbbbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbfddddddddd222222e2dddddddddfbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
            bbbbbbbbbbbbbbbbbbbbbbbbdbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbfddddddde22eddd2d2eddddddddffffbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb
            bbbbbbbbbbbbbbbbbbbbbbbbddbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbffddddd22222ddd2d2ddddddddffbbffbbbbbbbbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffddddd2dd2dd22d2dddddddffbbbbfffbbbbbbbbbbdbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffdddd2d22dd2dd2dddfffffbbbbbbbbffbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffddddddddd22dddffffffbbbbbbbbbbbfbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbdbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffdddddd2d2dffffbbbbbbbbbbbbbbffbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffdddd222ffbbbbbbbbbbbbbbbbbbfffbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffddddddfffbbbbbbbbbbbbbbbbbbbbfffbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddddbffffbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffffbdbbbbbbbbbbbbbdbbbbbbdddbffffbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbddbbbbbbbbbbbbffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffddbbbbbbbbbbbdbbbbbfffffbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbdfffffbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbddbbbbbbbfffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbdfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbffffffffffffffffffffffffddffbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffddddffbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbfdddffffffffffffffffffffffdddddffbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbddbbbbbbbbbbbbbbdbbbdbbbbbbbbbbfdddfffffffffffffffffffffffdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbbbbbbdbdbbbbbbbbbbbbbdddbbdbbbbbbbbbffddddffffffffffffffffffffffdddddffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbdbbbbbbbbbbbbbbbbdbbbbbbbddbbdbbbbbbbbbbbbbdbbdbbbbbbbbbbbfdddddfffffffffffffffffffffffdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbbdbbbbbbbbbbbbbbbdbbbbdddbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbffdddddfffffffffffffffffffffffddddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbdbbddbbbbbbbbbbbbbdbbddbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbfddddddffffffffffffffffffffffffdddddfbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbdbbbbddbbbbbbbbbbbdbdbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbffddddddfffffffffffffffffffffffffddddffbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbdbbbbbddddbbbbbddbbbbbbbbbbbbbdbbbbbbbbbbbbddbbbbbbbbbbbfdddddddfffffffffffffffffffffffffdddddffbbbbbbbbdbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbdbbbbbbbbbdddddbbbbbbbbbbbbbbbdbbbbbbbbbbbddbbbbbbbbbbbbfdddddddffffffffffffffffffffffffffdddddfbbbbbbbbbdbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbffddddddfffffffffffffffffffffffffbffddddffbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfddddddffffffffffffffffffffffffffbbffddddfbbbbbbbbbdbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbfddddddffffffffffffffffffffffffffbbbffdddffbbbbbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbffdddddffbffffffffffffffffffffffffbbbffddddfbbbbbbbbbdbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbfddddddffbffffffffffffffffffffffffbbbbfddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfddddddffbffffffffffffffffffffffffbbbbfddddffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfdddddffbbffffffffffffffffffffffffbbbbfdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfdddddffbbffffffffffffffffffffffffbbbbfdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbdbbbbbbbbbbbfddddffbbbfffffffffffffffffffffffbbbbbfdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfddddfbbbbfffffffffffffffffffffffbbbbbffddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfddddffbbbffffffffffffffffffffffbbbbbbbfddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffdddfbbbffffffffffffffffffffffbbbbbbbfddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffbbbbbbbbbbbbfffffffffffffbbbbbbbfddddfbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbfffffbbbbbbbdbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbdbbbdbbbbbbbbbbbdbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbdddbbbbbbbbbbbbdbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbdddddddbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbdbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbdbbbbbdbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbdddbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbddbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbddbbddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbdbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
    } else {
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccc1cccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccccccccccccccccccc11ccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccccccccccccc11ccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111ccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111cccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccc1111cccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccc11111111111111111111
            cccccccccccccccc11111ccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccc1111111111ccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffccccccccccccccc1cccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffcccccccccccccccc1ccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffccccccccccccccccc1cccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffcccccccccccccccccc1ccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff33333333333333333333333333333333333333333333333ffffccccccccccccccccccc11ccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff33333333333333333333333333333333333333333333333ffffccccccccccccccccccccc1cccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff33333333333333333333333333333333333333333333333ffffcccc111ccccccccccccccc1ccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffccccccc11cccccccccccccc1cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffccccccccc111cccccccccccc1ccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffcccccccccccc1111ccccccccc11ccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffcccccccccccccccc111cccccccc1cccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffdddddddddddddddddddddddddffffffff33333ffffccccccccccccccccccc1111ccccc1ccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffdddddddddddddddddddddddddffffffff33333ffffcccccccccccccccccccccc1cccccc1cccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffddddfdddddfffddddfdddddddffffffff33333ffffccccccccccccc1cccccccccccccccc1ccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffddddfdddddfffddddfdddddddffffffff33333ffffcccccccccccc11ccccccccccccccccc11ccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffffddddddddddddddfdddddfddddffdddddddddddfffffffffffffccccccccc111ccccccccccccccccccccc1cccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffffddddddddddddddffddddddddffddddddddddddfffffffffffffccccccc111cccccccccccccccccccccccc11cccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffffddddddddddddddddffdddddffdddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccccc11cccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffdddddddddddddddddddddffdddffddddddddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccc111ccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffccccccccccccccccccccccccccccccccccccc1cccccc1ccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccccccccccccc1ccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccccccccccccc1ccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddddddddddffffdddddddddddddddddffffddddddddfffffffffffffccccccccccccccccccccccccccccccccccccccccccc1cccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddddddddddffffdddddddddddddddddffffddddddddfffffffffffffccccccccccccccccccccccccccccccccccccccccccc1cccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddddddddddffffdddddddddddddddddffffddddddddfffffffffffffccccccccccccccccccccccccccccccccccccccccccc1cccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddfdddddddffffdddddddddddddddddffffddddddddfffffffffffffcccccccccccccccccccccccccccccccccccccccccc1ccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffddddddddffdddddddffffdddddddddddddddddffffddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccccc11cccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffddddddddfddddddddffffdddddddddddddddddffffddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccc11cccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffddddddddfddddddddffffdddddddddddddddddffffddddddddfffffffffccccccccccccccccccccccccccccccccccccccc111cccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddfddddddddffffdddddddddddddddddffffdddddddddddddffffcccccccccccccccccccccccccc1111111111111ccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddfddddddddffffdddddddddddddddddffffdddddddddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddffdddddddffffdddddddddddddddddffffddddddddfddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccc11ccccccccccccffffffffdddddffddddddffffdddddddddddddddddffffddddddddfddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccc111cccccccccccccccccccc1111ccccccccccccccccccffffddddddffddddddddddddddddddddddddddddddddddddffdddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccc111ccccccccccccc1111ccccccccccccccccccccccffffdddddddffddddddddddddddddddddddddddddddddddffddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccc1111111111111ccccccccccccccccccccccccccffffddddddddffddddddddddddddddddddddddddddddddfddddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffdddddddddffdddddddddddddddddddddddddddddffdddddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffffffddddddfddddddddddddddddddddddddddddffdddddfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffffffddddddffdfdddddddddddddddddddfddddddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddffdddddddddddddddddfddddddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffddddddffddddfddddddfdddffddddddddddddfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffddddddddffddfddddddfdddfdddddddddddddfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffdddddddddffdfddddddfdfffdddddddddddddfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffddddddddddddfddddddfdddddddddddddddddfffffcccccccccccccccccccccccccc1ccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddfddddddfdddddddddddddddddfffffccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddfdddddddddddddddddddfddddccccccccccccccccccccccccc1cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccc1ccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddfffdccccccccccccccccccccccccccccc11ccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddfffddddddddddddddddddddddddddddddddddddddddddddddffddffdddccccccccccccccccccccccccccc1cccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddffddffddddddddddddddddddddddddddddddddddddddddddddffddddfffdcccccccccccccccccccccccccccc1ccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdfffddddffddddddddddddddddddddddddddddddddddddddddddffdffffddfdccccccccccccccccccccccccccccc11ccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdfddffffdffdddddddddddddddddddddddddddddddddddddddddfddfddffdffccccccccccccccccccccccccccccccc11ccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffdffddfddfdddfdddddddddddddddddddddddddddddddddfdddfddffdffddfccccccccccccccccccccccccccccccccc11ccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccfddffdffddfdddfddddddddddddddddddddddddddddddddffdddfddddffddffccccccccccccccccccccccccccccccccccc1cccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffddffddddfddddfddddddddddddd2222dddddddddddddffddddfffdddddffdcccccccccccccccccccccccccccccccccccc11cccccccccccccc
            cccccccccccccccccccccccccccccccccc1ccccccccccdffdddddfffddddffdddddddddddd22222dddddddddddffdddddddfffffffddcccccccccccccccccccccccccccccccccccccc111ccccccccccc
            ccccccccccccccccccccccccccccccccc1cccccccccccddfffffffdddddddfdddddddddddd22222ddddddddddffdddddddddddddddddccccccccccccccccccccccccccccccccccccccccc11ccccccccc
            cccccccccccccccccccccccccccccccc1ccccccccccccddddddddddddddddfffddddddddd222222dddddddffffddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccc1cccccccc
            cccccccccccccccccccccccccccccccc1ccccccccccccddddddddddddddddddffffdddddd2222222ddddfffdddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccc1cccccccccccccdddddddddddddddddddddffdddd22222222ddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccc1cccccccccccccddddddddddddddddddddddddddd222f2f22ddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccc1ccccccccccccccddddddddddddddddddddddddddd222ff2222dddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccc1ccccccccccccccffffffffdddddddddddddddddd2222ff2222dddddddddddddddddddddffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccc11cccccccccccccccddddddddddddddddddddfddddd2222ff2222dddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccc1cccccccccccccccccddddddddddddddddddddffdddd2222ff2222ddddddfffddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccc1ccccccccccccccccccdddddddddddddddddddddffddd2222ff2222dddddffddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccc11cccccccccccccccccccddddddddddddddddddddddffdd2222f2f222ddddffdddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccc11cccccccccccccccccccccffffffffdddddddddddddddffd2222f2f222ddddfddddddddddddddddffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccc1111111cccccccccccccccccccccccddddddddddddddddddddddddfdd22222f222dddffddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfdd2222222ddddfdddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddffdddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddfddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddfddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddfddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddffffdddddddddddddddddfddddddddddddfdddddddddddddddfffddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccc1cccccccccfffffddddddddddddddddddddddddddddddddddddddddddddddddddddffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccc11cccccccccdddddfffddddddddddddddddddddddddddddddddddddddddddddddfffddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccc1111111cccccccccccfffffdddffffffffffffffffffffffffffffffffffffffffffffffdddffffffccccccccccccc1cccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddddddffffffffffffffffffffffffffffffffffffffffffffffdddddddddcccccccccccccc1ccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddddddffffffffffffffffffffffffffffffffffffffffffffffdddddddddccccccccccccccc11ccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddddddffffffffffffffffffffffffffffffffffffffffffffffdddddddddccccccccccccccccc111cccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc1111cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccc111111111ccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
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
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(5, 110)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(144, 110)
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
    if (character_choice == 1) {
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccc1cccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccccccccccccccccccc11ccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccccccccccccc11ccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111ccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111cccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccc1111cccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccc11111111111111111111
            cccccccccccccccc11111ccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccc1111111111ccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff3333fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffccccccccccccccc1cccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffcccccccccccccccc1ccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffccccccccccccccccc1cccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff3333333333333333333333333333333333333fffffffffcccccccccccccccccc1ccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff33333333333333333333333333333333333333333333333ffffccccccccccccccccccc11ccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff33333333333333333333333333333333333333333333333ffffccccccccccccccccccccc1cccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff33333333333333333333333333333333333333333333333ffffcccc111ccccccccccccccc1ccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffccccccc11cccccccccccccc1cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffccccccccc111cccccccccccc1ccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffcccccccccccc1111ccccccccc11ccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffff333333333fffffffffffffffffffffffffffff333333333ffffcccccccccccccccc111cccccccc1cccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffdddddddddddddddddddddddddffffffff33333ffffccccccccccccccccccc1111ccccc1ccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffdddddddddddddddddddddddddffffffff33333ffffcccccccccccccccccccccc1cccccc1cccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffddddfdddddfffddddfdddddddffffffff33333ffffccccccccccccc1cccccccccccccccc1ccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffff33333333fffffffffddddfdddddfffddddfdddddddffffffff33333ffffcccccccccccc11ccccccccccccccccc11ccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffffddddddddddddddfdddddfddddffdddddddddddfffffffffffffccccccccc111ccccccccccccccccccccc1cccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffffddddddddddddddffddddddddffddddddddddddfffffffffffffccccccc111cccccccccccccccccccccccc11cccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffffffddddddddddddddddffdddddffdddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccccc11cccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffdddddddddddddddddddddffdddffddddddddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccc111ccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffccccccccccccccccccccccccccccccccccccc1cccccc1ccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccccccccccccc1ccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffcccccccccccccccccccccccccccccccccccccccccccc1ccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddddddddddffffdddddddddddddddddffffddddddddfffffffffffffccccccccccccccccccccccccccccccccccccccccccc1cccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddddddddddffffdddddddddddddddddffffddddddddfffffffffffffccccccccccccccccccccccccccccccccccccccccccc1cccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddddddddddffffdddddddddddddddddffffddddddddfffffffffffffccccccccccccccccccccccccccccccccccccccccccc1cccc
            cccccccccccccccccccccccccccccccccccccccccccccffffdddddddddfdddddddffffdddddddddddddddddffffddddddddfffffffffffffcccccccccccccccccccccccccccccccccccccccccc1ccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffddddddddffdddddddffffdddddddddddddddddffffddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccccc11cccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffddddddddfddddddddffffdddddddddddddddddffffddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccc11cccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffddddddddfddddddddffffdddddddddddddddddffffddddddddfffffffffccccccccccccccccccccccccccccccccccccccc111cccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddfddddddddffffdddddddddddddddddffffdddddddddddddffffcccccccccccccccccccccccccc1111111111111ccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddfddddddddffffdddddddddddddddddffffdddddddddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffffffffddddffdddddddffffdddddddddddddddddffffddddddddfddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccc11ccccccccccccffffffffdddddffddddddffffdddddddddddddddddffffddddddddfddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccc111cccccccccccccccccccc1111ccccccccccccccccccffffddddddffddddddddddddddddddddddddddddddddddddffdddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccc111ccccccccccccc1111ccccccccccccccccccccccffffdddddddffddddddddddddddddddddddddddddddddddffddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccc1111111111111ccccccccccccccccccccccccccffffddddddddffddddddddddddddddddddddddddddddddfddddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffdddddddddffdddddddddddddddddddddddddddddffdddddddddffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffffffddddddfddddddddddddddddddddddddddddffdddddfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffffffddddddffdfdddddddddddddddddddfddddddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccffffffffddddddddddffdddddddddddddddddfddddddddddddfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffddddddffddddfddddddfdddffddddddddddddfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffddddddddffddfddddddfdddfdddddddddddddfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffdddddddddffdfddddddfdfffdddddddddddddfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffddddddddddddfddddddfdddddddddddddddddfffffcccccccccccccccccccccccccc1ccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddfddddddfdddddddddddddddddfffffccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddfdddddddddddddddddddfddddccccccccccccccccccccccccc1cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccc1ccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddfffdccccccccccccccccccccccccccccc11ccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddfffddddddddddddddddddddddddddddddddddddddddddddddffddffdddccccccccccccccccccccccccccc1cccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddffddffddddddddddddddddddddddddddddddddddddddddddddffddddfffdcccccccccccccccccccccccccccc1ccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdfffddddffddddddddddddddddddddddddddddddddddddddddddffdffffddfdccccccccccccccccccccccccccccc11ccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdfddffffdffdddddddddddddddddddddddddddddddddddddddddfddfddffdffccccccccccccccccccccccccccccccc11ccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffdffddfddfdddfdddddddddddddddddddddddddddddddddfdddfddffdffddfccccccccccccccccccccccccccccccccc11ccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccfddffdffddfdddfddddddddddddddddddddddddddddddddffdddfddddffddffccccccccccccccccccccccccccccccccccc1cccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccffddffddddfddddfddddddddddddd2222dddddddddddddffddddfffdddddffdcccccccccccccccccccccccccccccccccccc11cccccccccccccc
            cccccccccccccccccccccccccccccccccc1ccccccccccdffdddddfffddddffdddddddddddd22222dddddddddddffdddddddfffffffddcccccccccccccccccccccccccccccccccccccc111ccccccccccc
            ccccccccccccccccccccccccccccccccc1cccccccccccddfffffffdddddddfdddddddddddd22222ddddddddddffdddddddddddddddddccccccccccccccccccccccccccccccccccccccccc11ccccccccc
            cccccccccccccccccccccccccccccccc1ccccccccccccddddddddddddddddfffddddddddd222222dddddddffffddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccc1cccccccc
            cccccccccccccccccccccccccccccccc1ccccccccccccddddddddddddddddddffffdddddd2222222ddddfffdddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccc1cccccccccccccdddddddddddddddddddddffdddd22222222ddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccc1cccccccccccccddddddddddddddddddddddddddd222f2f22ddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccc1ccccccccccccccddddddddddddddddddddddddddd222ff2222dddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccc1ccccccccccccccffffffffdddddddddddddddddd2222ff2222dddddddddddddddddddddffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccc11cccccccccccccccddddddddddddddddddddfddddd2222ff2222dddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccc1cccccccccccccccccddddddddddddddddddddffdddd2222ff2222ddddddfffddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccc1ccccccccccccccccccdddddddddddddddddddddffddd2222ff2222dddddffddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccc11cccccccccccccccccccddddddddddddddddddddddffdd2222f2f222ddddffdddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccc11cccccccccccccccccccccffffffffdddddddddddddddffd2222f2f222ddddfddddddddddddddddffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccc1111111cccccccccccccccccccccccddddddddddddddddddddddddfdd22222f222dddffddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfdd2222222ddddfdddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddffdddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddfddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddfddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddfddddddddddddfddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddffffdddddddddddddddddfddddddddddddfdddddddddddddddfffddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccc1cccccccccfffffddddddddddddddddddddddddddddddddddddddddddddddddddddffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccc11cccccccccdddddfffddddddddddddddddddddddddddddddddddddddddddddddfffddddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccc1111111cccccccccccfffffdddffffffffffffffffffffffffffffffffffffffffffffffdddffffffccccccccccccc1cccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddddddffffffffffffffffffffffffffffffffffffffffffffffdddddddddcccccccccccccc1ccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddddddffffffffffffffffffffffffffffffffffffffffffffffdddddddddccccccccccccccc11ccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccddddddddffffffffffffffffffffffffffffffffffffffffffffffdddddddddccccccccccccccccc111cccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc1111cccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccc111111111ccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
    } else {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbddddddddbbbbbbbbddbbbbbbbbddbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbddbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbdbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbddbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbddbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbddbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbdbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbdddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdddddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdddddddddbbbbbbbbbbddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbff1ffffbbbfffffbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbffffffbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbddddddddddddddbbbbddddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbf11111fbfff111fffbbbbbbbbbbbbbbbbbbbdbbbbbbbbbffffffbbbbbbffffbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbfffffff1111ffff11111ffffffffffbbbbbbbbbbbdbbbbbbfffbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbddddddddddddddddbdddddddddbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbff11111f1111ff11111111ff1f1111ffbbbbbbbbbbdbbbbffbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbdbbbb
            bbddddddddddddddddddddddddbbbbbbbbbddddddddddbbbbbbbbbbbbbbbbbbbbbfffff111111ff111f1111f1111b111fff11fffbbbbbbbbbdbbfbbbbbbbbbbdbbbbbbbbbbbbbbffbbbbbbbbbbbdbbbb
            ddbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbf11111111111f11111111f1111111111f1111fffbbbbbbbbffbbbbbbbbbbbdbbbbbbbbbbbddbbfffbbbbbbbbbdbbbb
            bbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbf11111111111f111111111f1111111111f1111fffbbbbbbbfdbbbbbbbbbbbbbbbbbbbbbddbbbbbbfbbbbbbbbbdbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbfffff111111111111f11111111f1111111111f1111ffffbbbbbfbbdbbbbbbbbbbbbbbbbbbddbbbbbbbbbffbbbbbbdbbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbf1111111111111111ff1111111f1111111111f11111111fffbbfbbbddbbbbbbbbbbbbbb1dbbbbbbbbbbbbffbbbbbdbbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbff11111111111111111f1111111f11111111111111111111ffbffb111111bbb111111bb1d11111bbbbbbbbbffbbbbdbbbbb
            bbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbff111f1111111111111ff1111111f1111111111111111111fbbfbbbb1bbbddbbb1bbbbbd1bbbbbbbbbbbbbbbffbbbdbbbbb
            bbbbbbbbbbbbbbdddddddddddbbbbbdbbbbddddbbbbbbbbbbbdbbbbbbbbbbffffff11111111111111ff111111f11111111111111fffffbbffbbbb1bbbbbddb1bbbbdb1bbbbbbbbbbbbbbbbffbbdbbbbb
            bbbbbbbbbbbbbbbdddddddddbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff1111111111111111111111f11111111111111fbbbbbbfbbbbb1bbbbbbbd1bbbdbb1bbbbbbbbbbbbbbbbbfbdbbbbbb
            bbbbbbbbbbbbbbbbdddddddbbbbddbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff111111111111111111111ff1111111111111ffbbbbbffbbbbb1bbbbbbbb1dddbbb1bbbbbbbbbbbbbbbbbbfbbbbbbb
            bbbbbbbbbbbbbbdbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbffffff1111ddddddddddd111111111111111fffbbbbbbfbbbbbb1bbbbbbbb1bdbddbb1111bbbbbbbbbbbbbbbfbbbbbb
            bbbbbbbbbbbbddbbbbbbdbbbddbdbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbbf1111ddddddddddd111111111111111fbbbbbbbbfbbbbbb1bbbbbbbb1dbbbbddbbbb1bbbbbbbbbbbbbbffbbbbb
            bbbbbbbbbbbbbbbbbbbbddddbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbf1111ddddddddddd111111111111111fbbbbbbbfbbbbbbb1bbbbbbbb1bbbbbbbddbb1bbbbbbbbbbbbbbbffbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbdbbbbbbbbbbbbbbf1111ddddddddddd111111111111111fbbbbbbffbbbbbb1111bbbbbb1bbbbbbbbbdd1bbbbbbbbbbbbbbbbfbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbdbbbbbbbbbbbbbffdddddddddddddddddddddddddddddfbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbb1111ddbbbbbbbbbbbbbbbffbbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbdbbbbbbbbbbbbbffdddddddddddddddddddddddddddddfbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbdbbbbbbbfbbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbbdbbbbbbbbbbbbffdddddddddddddddddddddddddddddfbbbbffb1bb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbdbbbbbbbbffbb
            bbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbbddbbbbbbbbbbbfddddddddddddddddddddddddddddddfbbbffb11b1bbbbbbbbbbbbb111111bb11111bbbbbbbbddbbbbbbbbbbff
            bbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbdbbbbbbbbbbfddddddddddddddddddddddddddddddfbbffbb11b1bbbb11111bbbbbb1bbbb1bbbbb1bb1bbb11bd1111b1111bf
            bbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbdbbbbbbbbbfdddd111999dddddddd999111ddddddfbffbbb11b1bbb1bbbbb1bbbbb1bbbb1bbbbb11b1bbb1bbb1bbbb1bb1bf
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbdbbdbbbbbbbbbbbdbbbbbbbbfddddddddddddddddddddddddddddddffbbbbb11b1bbb1bbbbb1bbbbb1bbbb1bbbbb1bb11bb1bbb1dbbb1bb1bf
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbdbbdbbbbbbbbbbbbdbbbbbbbfddddddddddddddddddddddddddddddfbbbbb1b11bbbb1bbbdb1bbbbb1bbbb1bbbbb1bbb1bb1bbb1bddb111bbf
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbdbbbbbbfddddddddddddddddddddddddddddddfbbbbb1b11bbbb1bbbdb1bbbdd1bbbb1bbbbb1bbbb11bbbb111bd11bbbf
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbddbbbbbfddddddddddddddddddddddddddddddfbbbbb1b11bbbb1bbbdb1bbd1b1dbbb1bbbbb1bbbb11bbbb1bbbb1b1bbf
            bbbbbbbbbbbbbbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbfffddddddddddddddddddddddddddfffbbbbb1b11bbbbb11111bbbd111bdbbb11111bbbbbbbbbbb1bbbb1bb1bf
            bbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbfddddddddddddddddddddddddddfffbbbbb1bb1bbbbbbbbbdbbdbbbbbbbbbbbbbbbbbbbbbbbbb111bb1bbbbf
            bbbbbbbbbbbbbbbbbbbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbfddddddddd222222e2dddddddddfbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
            bbbbbbbbbbbbbbbbbbbbbbbbdbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbfddddddde22eddd2d2eddddddddffffbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb
            bbbbbbbbbbbbbbbbbbbbbbbbddbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbffddddd22222ddd2d2ddddddddffbbffbbbbbbbbbbbbdbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffddddd2dd2dd22d2dddddddffbbbbfffbbbbbbbbbbdbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb
            bbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffdddd2d22dd2dd2dddfffffbbbbbbbbffbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffddddddddd22dddffffffbbbbbbbbbbbfbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbdbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffdddddd2d2dffffbbbbbbbbbbbbbbffbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffdddd222ffbbbbbbbbbbbbbbbbbbfffbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffddddddfffbbbbbbbbbbbbbbbbbbbbfffbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddddbffffbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffffbdbbbbbbbbbbbbbdbbbbbbdddbffffbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbddbbbbbbbbbbbbffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffddbbbbbbbbbbbdbbbbbfffffbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbdfffffbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbddbbbbbbbfffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbdfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbffffffffffffffffffffffffddffbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffddddffbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbfdddffffffffffffffffffffffdddddffbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbddbbbbbbbbbbbbbbdbbbdbbbbbbbbbbfdddfffffffffffffffffffffffdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbbbbbbdbdbbbbbbbbbbbbbdddbbdbbbbbbbbbffddddffffffffffffffffffffffdddddffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbdbbbbbbbbbbbbbbbbdbbbbbbbddbbdbbbbbbbbbbbbbdbbdbbbbbbbbbbbfdddddfffffffffffffffffffffffdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbbdbbbbbbbbbbbbbbbdbbbbdddbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbffdddddfffffffffffffffffffffffddddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbdbbddbbbbbbbbbbbbbdbbddbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbfddddddffffffffffffffffffffffffdddddfbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbdbbbbddbbbbbbbbbbbdbdbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbffddddddfffffffffffffffffffffffffddddffbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbdbbbbbddddbbbbbddbbbbbbbbbbbbbdbbbbbbbbbbbbddbbbbbbbbbbbfdddddddfffffffffffffffffffffffffdddddffbbbbbbbbdbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbdbbbbbbbbbdddddbbbbbbbbbbbbbbbdbbbbbbbbbbbddbbbbbbbbbbbbfdddddddffffffffffffffffffffffffffdddddfbbbbbbbbbdbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbffddddddfffffffffffffffffffffffffbffddddffbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfddddddffffffffffffffffffffffffffbbffddddfbbbbbbbbbdbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbfddddddffffffffffffffffffffffffffbbbffdddffbbbbbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbffdddddffbffffffffffffffffffffffffbbbffddddfbbbbbbbbbdbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbfddddddffbffffffffffffffffffffffffbbbbfddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfddddddffbffffffffffffffffffffffffbbbbfddddffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfdddddffbbffffffffffffffffffffffffbbbbfdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbdbbbbbbbbbbbfdddddffbbffffffffffffffffffffffffbbbbfdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbdbbbbbbbbbbbfddddffbbbfffffffffffffffffffffffbbbbbfdddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfddddfbbbbfffffffffffffffffffffffbbbbbffddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfddddffbbbffffffffffffffffffffffbbbbbbbfddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffdddfbbbffffffffffffffffffffffbbbbbbbfddddfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffbbbbbbbbbbbbfffffffffffffbbbbbbbfddddfbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbfffffbbbbbbbdbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbdbbbbbbbb
            bbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbdbbbdbbbbbbbbbbbdbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbdddbbbbbbbbbbbbdbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbdbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdbbbbbbbbdddddddbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbdbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbdbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbdbbbbbbbdbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbdbbbbbdbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbdddbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbddbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbddbbddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbdbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
    }
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
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
let list = [assets.image`medkit`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . 1 2 2 2 1 . . . . . 
    . . . . . . 2 2 1 2 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 1 2 1 2 1 . . . . . 
    . . . . . . 1 2 2 2 1 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . 5 . . . . . . . . . . . 
    . . . . . . . 5 9 5 . . . . . . 
    . . . . . . 5 9 9 5 . . 5 . . . 
    . . . . . 5 9 5 5 5 . . . . . . 
    . . . . . 5 9 5 5 . . . . . . . 
    . . . . . 5 5 9 5 . . . . . . . 
    . . . . . . 5 5 9 5 . . . . . . 
    . . . . . 5 5 9 5 5 . . . . . . 
    . . 5 . . 5 9 5 5 . . . . . . . 
    . . . . . 5 5 9 5 5 . . . 5 . . 
    . . . . . . 5 5 9 5 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . 5 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
info.player1.setLife(50)
info.player2.setLife(50)

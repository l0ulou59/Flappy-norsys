enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function (sprite, otherSprite) {
    if (otherSprite.right - sprite.left < 2) {
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.confetti)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Jumping)
    mySprite.startEffect(effects.rings, 300)
})
let projectile: Sprite = null
let gapSprite: Sprite = null
let gapImage: Image = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundColor(8)
info.setScore(0)
effects.blizzard.startScreenEffect()
mySprite = sprites.create(assets.image`norsys1`, SpriteKind.Player)
mySprite.ay = 300
let anim = animation.createAnimation(ActionKind.Jumping, 25)
anim.addAnimationFrame(img`
    7 7 f f f f f f f f f f f f 7 7 
    7 f f f f 8 8 8 8 8 f f f f f 7 
    7 f f f 8 f f f f f 8 f f f f f 
    f f f f 8 f f f f f 8 f f f f f 
    f f 7 7 7 7 7 f 2 2 2 2 2 f f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f f 8 8 8 8 8 f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f f 7 7 7 7 7 8 2 2 2 2 2 f f f 
    f f f 7 7 7 7 8 2 f f f f f f f 
    7 7 7 7 8 8 8 8 2 f f f f f f f 
    7 8 8 8 8 2 2 2 2 f f f f f f f 
    8 8 2 2 2 2 f f f f f f f f f 7 
    8 2 2 f f f f f f f f f f f 7 7 
    `)
anim.addAnimationFrame(img`
    7 7 f f f f f f f f f f f f 7 7 
    7 f f f f 8 8 8 8 8 f f f f f 7 
    7 f f f 8 f f f f f 8 f f f f f 
    f f f f 8 f f f f f 8 f f f f f 
    f f 7 7 7 7 7 f 2 2 2 2 2 f f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f f 8 8 8 8 8 f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f f 7 7 7 7 7 8 2 2 2 2 2 f f f 
    f f f 7 7 7 7 8 2 f f f f f f f 
    7 7 7 7 8 8 8 8 2 f f f f f f f 
    7 8 8 8 8 2 2 2 2 f f f f f f f 
    8 8 2 2 2 2 f f f f f f f f f 7 
    8 2 2 f f f f f f f f f f f 7 7 
    `)
anim.addAnimationFrame(img`
    7 7 f f f f f f f f f f f f 7 7 
    7 f f f f 8 8 8 8 8 f f f f f 7 
    7 f f f 8 f f f f f 8 f f f f f 
    f f f f 8 f f f f f 8 f f f f f 
    f f 7 7 7 7 7 f 2 2 2 2 2 f f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f f 8 8 8 8 8 f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f f 7 7 7 7 7 8 2 2 2 2 2 f f f 
    f f f 7 7 7 7 8 2 f f f f f f f 
    7 7 7 7 8 8 8 8 2 f f f f f f f 
    7 8 8 8 8 2 2 2 2 f f f f f f f 
    8 8 2 2 2 2 f f f f f f f f f 7 
    8 2 2 f f f f f f f f f f f 7 7 
    `)
anim.addAnimationFrame(img`
    7 7 f f f f f f f f f f f f 7 7 
    7 f f f f 8 8 8 8 8 f f f f f 7 
    7 f f f 8 f f f f f 8 f f f f f 
    f f f f 8 f f f f f 8 f f f f f 
    f f 7 7 7 7 7 f 2 2 2 2 2 f f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f f 8 8 8 8 8 f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f f 7 7 7 7 7 8 2 2 2 2 2 f f f 
    f f f f 7 7 8 8 f f f f 2 f f f 
    f f f f 7 8 8 f f f f 2 2 f f f 
    f f f 7 7 8 f f f f 2 2 f f f f 
    f f f 7 8 8 f f 2 2 2 f f f f 7 
    7 7 7 7 8 2 2 2 2 f f f f f 7 7 
    `)
anim.addAnimationFrame(img`
    7 7 f f f f f f f f f f f f 7 7 
    7 f f f f 8 8 8 8 8 f f f f f 7 
    7 f f f 8 f f f f f 8 f f f f f 
    f f f f 8 f f f f f 8 f f f f f 
    f f 7 7 7 7 7 f 2 2 2 2 2 f f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f f 8 8 8 8 8 f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f f 7 7 7 7 7 8 2 2 2 2 2 f f f 
    f f f f 7 7 8 8 f f f f 2 f f f 
    f f f f 7 8 8 f f f f 2 2 f f f 
    f f f 7 7 8 f f f f 2 2 f f f f 
    f f f 7 8 8 f f 2 2 2 f f f f 7 
    7 7 7 7 8 2 2 2 2 f f f f f 7 7 
    `)
anim.addAnimationFrame(img`
    7 7 f f f f f f f f f f f f 7 7 
    7 f f f f 8 8 8 8 8 f f f f f 7 
    7 f f f 8 f f f f f 8 f f f f f 
    f f f f 8 f f f f f 8 f f f f f 
    f f 7 7 7 7 7 f 2 2 2 2 2 f f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f 8 f f 7 f f 8 f f 2 f f 
    f 7 f f f 8 8 8 8 8 f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f 7 f f f f f 8 f f f f f 2 f f 
    f f 7 7 7 7 7 8 2 2 2 2 2 f f f 
    f f f 7 7 7 7 8 2 f f f f f f f 
    7 7 7 7 8 8 8 8 2 f f f f f f f 
    7 8 8 8 8 2 2 2 2 f f f f f f f 
    8 8 2 2 2 2 f f f f f f f f f 7 
    8 2 2 f f f f f f f f f f f 7 7 
    `)
animation.attachAnimation(mySprite, anim)
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false, effects.confetti)
    }
})
game.onUpdateInterval(1500, function () {
    gap = randint(0, 3)
    if (gap == 0) {
        topImage = assets.image`potaux 1 haut`
        bottomImage = assets.image`potaux bas 1`
    } else if (gap == 1) {
        topImage = assets.image`haut 2`
        bottomImage = assets.image`bas 2`
    } else if (gap == 2) {
        topImage = assets.image`haut 3`
        bottomImage = assets.image`bas 3`
    } else {
        topImage = assets.image`haut 4`
        bottomImage = assets.image`bas 4`
    }
    gapImage = image.create(2, scene.screenHeight())
    gapImage.fill(1)
    gapSprite = sprites.create(gapImage, SpriteKind.Gap)
    gapSprite.setFlag(SpriteFlag.AutoDestroy, true)
    gapSprite.setFlag(SpriteFlag.Invisible, true)
    gapSprite.left = scene.screenWidth()
    gapSprite.vx = -45
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})

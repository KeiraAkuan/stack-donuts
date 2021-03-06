namespace SpriteKind {
    export const Donut = SpriteKind.create()
    export const StackDonut = SpriteKind.create()
}
let DonutImgs = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 a 1 1 1 a 1 . . . 
    . . 1 a 1 a 1 a 1 a 1 a 1 a . . 
    . . 1 a 1 a 1 a 1 a 1 a 1 a 1 . 
    . a 1 1 1 a 1 1 1 a 1 1 1 a 1 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 1 4 4 4 4 4 4 4 . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
assets.image`Blue Raspberry Donut`,
assets.image`Strawberry Donut`,
assets.image`Matcha Donut`,
assets.image`Chocolate Donut`,
assets.image`Cotton Candy Donut`
]
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
let baseDonut = sprites.create(DonutImgs[randint(0, DonutImgs.length - 1)], SpriteKind.StackDonut)
let TopDonut = baseDonut
baseDonut.ay = 300
baseDonut.setPosition(80, 600)
scene.cameraFollowSprite(baseDonut)

let newDonut: Sprite = null
function createNewDonut () {
    newDonut = sprites.create(DonutImgs[randint(0, DonutImgs.length - 1)], SpriteKind.Donut)
    newDonut.setPosition(randint(20, 140), TopDonut.y - 20)
    
    if (Math.percentChance(50)) {
        newDonut.vx = randint(-50, -100)

    } else {
        newDonut.vx = randint(-50, -100)

    }
    newDonut.setBounceOnWall(true)
}
 createNewDonut()
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    newDonut.vx = 0
    newDonut.ay = 300
})
sprites.onOverlap(SpriteKind.StackDonut, SpriteKind.Donut, function(sprite: Sprite, DroppedDonut: Sprite) {
    DroppedDonut.ay = 0
    DroppedDonut.vy = 0
    DroppedDonut.setKind(SpriteKind.StackDonut)
    TopDonut = DroppedDonut
    createNewDonut()
    scene.cameraFollowSprite(TopDonut)
})
scene.onHitWall(SpriteKind.Donut, function(sprite: Sprite, location: tiles.Location) {
    
})
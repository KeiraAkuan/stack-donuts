namespace SpriteKind {
    export const Donut = SpriteKind.create()
    export const StackDonut = SpriteKind.create()
}
let DonutImgs = [
assets.image`Long Chocolate Donut`,
assets.image`Blue Raspberry Donut`,
assets.image`Strawberry Donut`,
assets.image`Matcha Donut`,
assets.image`Chocolate Donut`,
assets.image`Cotton Candy Donut`
]
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
let baseDonut = sprites.create(DonutImgs[randint(0, DonutImgs.length - 1)], SpriteKind.StackDonut)
baseDonut.ay = 300
baseDonut.setPosition(80, 500)
scene.cameraFollowSprite(baseDonut)

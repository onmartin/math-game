function End_Game () {
    game.splash(info.score(), " out of 10")
    game.over(true)
}
let guess = 0
let SecondValue = 0
let value = 0
scene.setBackgroundColor(11)
for (let index = 0; index < 10; index++) {
    info.setScore(0)
    value = randint(0, 10)
    SecondValue = randint(0, 10)
    game.splash("Answer The Question")
    while (guess != value + SecondValue) {
        guess = parseFloat(game.askForString("Sum of " + value + "+" + SecondValue))
        if (guess == value + SecondValue) {
            game.splash("Correct!")
            info.changeScoreBy(1)
        } else {
            game.splash("Incorrect")
            info.changeScoreBy(-1)
        }
    }
}
End_Game()

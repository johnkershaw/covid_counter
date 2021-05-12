input.onButtonPressed(Button.A, function () {
    people += -1
})
input.onButtonPressed(Button.B, function () {
    people += 1
})
let people = 0
basic.forever(function () {
    basic.showNumber(people)
})

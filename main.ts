basic.forever(function () {
    if (input.soundLevel() > 181) {
        basic.showIcon(IconNames.Angry)
    } else if (input.soundLevel() > 0 && input.soundLevel() < 0) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(1000)
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
})
basic.clearScreen()
basic.pause(500)
led.plot(1, 0)
basic.pause(500)
led.plot(0, 1)
basic.pause(500)
led.plot(3, 2)

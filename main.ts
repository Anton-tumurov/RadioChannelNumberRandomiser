enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    Othergroupchannel = receivedNumber - compilingnumber
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
let guesschannel = 0
let channel = 0
let Othergroupchannel = 0
let compilingnumber = 0
compilingnumber = randint(0, 10)
for (let index = 0; index < compilingnumber; index++) {
    basic.showIcon(IconNames.Square)
    basic.pause(10)
    basic.showIcon(IconNames.SmallSquare)
}
basic.clearScreen()
basic.forever(function () {
    let guesschannel2 = 0
    // tester unusable
    serial.writeNumber(channel)
    // tester unusable
    serial.writeNumber(guesschannel)
    // tester unusable
    serial.writeNumber(guesschannel2)
})
basic.forever(function () {
    while (input.isGesture(Gesture.ScreenDown)) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    if (!(input.isGesture(Gesture.ScreenDown))) {
        if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake)))) {
            guesschannel = randint(1, 15)
            if (guesschannel == Othergroupchannel) {
                channel = randint(1, 15)
            } else {
                channel = guesschannel
            }
            basic.pause(500)
            radio.sendNumber(channel + compilingnumber)
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . # # #
                . . . . #
                . . . . #
                . . . . #
                . . . # #
                `)
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # #
                `)
            basic.showLeds(`
                # # . . .
                # . . . .
                # . . . .
                # . . . .
                # # # . .
                `)
            basic.showLeds(`
                # # # # .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.pause(500)
            while (true && !(input.buttonIsPressed(Button.A)) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake)))) {
                basic.showNumber(channel)
                basic.clearScreen()
            }
        }
    }
})

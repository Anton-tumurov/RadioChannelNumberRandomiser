enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    Othergroupchannel = receivedNumber - compilingnumber
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
let channel = 0
let guesschannel = 0
let Othergroupchannel = 0
let compilingnumber = 0
basic.showString("Ready")
compilingnumber = randint(0, 10)
basic.forever(function () {
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
            basic.showNumber(channel)
        }
    }
})
basic.forever(function () {
    let guesschannel2 = 0
    // tester unusable
    serial.writeNumber(channel)
    // tester unusable
    serial.writeNumber(guesschannel)
    // tester unusable
    serial.writeNumber(guesschannel2)
})

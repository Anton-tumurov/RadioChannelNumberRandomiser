enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    Othergroupchannel = receivedNumber - compilingnumber
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
let channel = 0
let Othergroupchannel = 0
let compilingnumber = 0
basic.showString("Ready")
compilingnumber = randint(0, 10)
basic.forever(function () {
    if (!(input.isGesture(Gesture.ScreenDown))) {
        if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake)))) {
            let guesschannel2 = 0
            let guesschannel = 0
            channel = randint(1, 15)
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
            serial.writeNumber(channel)
            serial.writeNumber(guesschannel)
            serial.writeNumber(guesschannel2)
            basic.showNumber(channel)
            while (true) {
                basic.pause(100)
            }
        }
    }
})

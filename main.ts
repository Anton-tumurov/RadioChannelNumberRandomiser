enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    Othergroupchannel = receivedNumber - compilingnumber
})
let channel = 0
let guesschannel2 = 0
let guesschannel = 0
let Othergroupchannel = 0
let compilingnumber = 0
basic.showString("Ready")
compilingnumber = randint(0, 10)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake)))) {
        guesschannel = randint(1, 15)
        if (guesschannel == Othergroupchannel) {
            guesschannel2 = randint(1, 15)
            if (guesschannel2 == Othergroupchannel) {
                channel = guesschannel2
            } else {
                channel = guesschannel2
            }
        } else {
            channel = guesschannel
        }
        basic.pause(500)
        radio.sendNumber(channel + compilingnumber)
    }
    serial.writeNumber(channel)
    serial.writeNumber(guesschannel)
    serial.writeNumber(guesschannel2)
})

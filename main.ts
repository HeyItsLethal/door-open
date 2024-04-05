input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        servos.P0.setAngle(90)
        radio.sendString("C")
    } else if (receivedString == "B") {
        servos.P0.setAngle(0)
    }
})
radio.setGroup(199)
basic.forever(function () {
	
})

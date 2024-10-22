input.onButtonPressed(Button.A, function () {
    Residu += -1
    basic.showNumber(Residu)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("Residu", Residu)
    basic.showNumber(Residu)
    basic.showIcon(IconNames.Sword)
})
input.onButtonPressed(Button.B, function () {
    Residu += 1
    basic.showNumber(Residu)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("NUM ")
    Numerador = randint(0, 10)
    basic.showNumber(Numerador)
    radio.sendValue("Num", Numerador)
    basic.showString(" DENOM ")
    Denominador = randint(1, 10)
    radio.sendValue("Denom", Denominador)
    basic.showNumber(Denominador)
    basic.showString(" RES")
})
let Denominador = 0
let Numerador = 0
let Residu = 0
radio.setGroup(1)
radio.setTransmitPower(7)
Residu = -1

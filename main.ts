function motor2 (L: number, R: number) {
    SuperBit.MotorRun(SuperBit.enMotors.M1, L)
    SuperBit.MotorRun(SuperBit.enMotors.M2, 0 - R)
}
function L90 () {
    motor2(-100, 90)
    basic.pause(500)
}
while (!(input.buttonIsPressed(Button.A))) {
    basic.showIcon(IconNames.Yes)
}
basic.showArrow(ArrowNames.North)
motor2(100, 90)
basic.pause(2000)
for (let index = 0; index < 4; index++) {
    L90()
    motor2(100, 90)
    basic.pause(2000)
}

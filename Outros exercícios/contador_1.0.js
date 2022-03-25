y = prompt('Quer contar até quanto?')
x = 0
if (y > 0) {
    while (x < y) {
        x++
        console.log(x)
    }
} else {
    while (x > y) {
        x--
        console.log(x)
    }
}
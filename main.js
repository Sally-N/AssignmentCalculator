let display = document.getElementById('display-screen');

let buttons = Array.from(document.getElementsByClassName('btn'));
console.log(buttons);

class Calculator {
    conNumber;
    symbol;
    secNumber
    constructor() {
        this.conNumber = 0
        this.secNumber = 0
    }

    numberclicked(number) {

        if (number == 'div') {
            this.symbol = '/'
            document.getElementById('symbol').innerHTML = this.symbol
        } else if (number == 'modul') {

            this.symbol = '%'
            document.getElementById('symbol').innerHTML = this.symbol

        } else if (number == 'mult') {

            this.symbol = '*'
            document.getElementById('symbol').innerHTML = this.symbol

        } else if (number == 'subtract') {

            this.symbol = '-'
            document.getElementById('symbol').innerHTML = this.symbol

        } else if (number == 'add') {

            this.symbol = '+'
            document.getElementById('symbol').innerHTML = this.symbol

        } else if (number == 'decimal') {

            this.conNumber = this.conNumber.toString() + '.'
            document.getElementById('firstNumber').innerHTML = this.conNumber


        } else if (number == 'equals') {
            this.total();

        } else if (number == 'clear') {
            this.conNumber = 0
            this.secNumber = 0
            this.symbol = null
            document.getElementById('secNumber').innerHTML = ''
            document.getElementById('firstNumber').innerHTML = ''
            document.getElementById('symbol').innerHTML = ''

        } else {

            if (this.symbol != null) {
                this.secNumber = this.secNumber.toString() + number.toString()
                document.getElementById('secNumber').innerHTML = parseFloat(this.secNumber)
            } else {
                this.conNumber = this.conNumber.toString() + number.toString()
                document.getElementById('firstNumber').innerHTML = parseFloat(this.conNumber)
            }
        }
    }


    total() {
        if (this.symbol == '/') {
            let total = parseFloat(this.conNumber) / parseFloat(this.secNumber)
            document.getElementById('totals').innerHTML = total

        } else if (this.symbol == '%') {
            let total = parseFloat(this.conNumber) % parseFloat(this.secNumber)
            document.getElementById('totals').innerHTML = total


        } else if (this.symbol == '*') {

            let total = parseFloat(this.conNumber) * parseFloat(this.secNumber)
            document.getElementById('totals').innerHTML = total

        } else if (this.symbol == '-') {

            let total = parseFloat(this.conNumber) - parseFloat(this.secNumber)
            document.getElementById('totals').innerHTML = total

        } else if (this.symbol == '+') {

            let total = parseFloat(this.conNumber) + parseFloat(this.secNumber)
            document.getElementById('totals').innerHTML = total

        }

    }

}

let cal = new Calculator()


buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(button.getAttribute('id'));
        cal.numberclicked(button.getAttribute('id'))
    })
});
const nome = 'Carlos'
const peso =  84
const altura = 1.88

const imc = peso / (altura * altura)

let message = ""

if (!(imc >= 30) || imc < 29.9){
    message = `${nome} você não está acima do peso`
}
else {
    message = `${nome} você está acima do peso`
}

console.log(message)
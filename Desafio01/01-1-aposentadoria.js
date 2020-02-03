const nome  = 'Silvana'
const sexo  = 'F'
const idade =  48
const contribuicao = 50

const calculoContribuicao = idade + contribuicao

if (sexo === 'M') {
    if (soma >= 95 && soma > 85) {
        console.log(`${nome}, você pode se aposentar!`)
    }
    else {
        console.log(`${nome}, você não pode se apostar!`)
    }
}
else {
    if (soma >= 85 && soma < 95) {
        console.log(`${nome}, você pode se aposentar!`)
    }
    else {
        console.log(`${nome}, você não pode se apostar!`)
    }
}
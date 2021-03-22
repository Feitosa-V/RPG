function verifica(){
var pericia = window.document.getElementById('pericia')
var dado = window.document.getElementById('dado')

var pericias = Number(pericia.value)
var dados = Number(dado.value)

if (pericias >= 1 && pericias <=4)
{
    if (dados <= 15)
    window.alert('ERROU!')
    else if (dados >= 16 && dados <= 17)
    window.alert('FRACASSO!')
    else if (dados == 18)
    window.alert('RUIM!')
    else if (dados == 19)
    window.alert('BOM!')
    else if (dados == 20)
    window.alert('MUITO BOM!')
}

if (pericias >= 5 && pericias <=8)
{
    if (dados <= 7)
    window.alert('ERROU!')
    else if (dados >= 8 && dados <= 11)
    window.alert('FRACASSO!')
    else if (dados >= 12 && dados <= 15)
    window.alert('RUIM!')
    else if (dados >= 16 && dados <= 18)
    window.alert('BOM!')
    else if (dados == 19)
    window.alert('MUITO BOM!')
    else if (dados == 20)
    window.alert('CRÍTICO!!!')
}

if (pericias >= 9 && pericias <= 16)
{
    if (dados <= 3)
    window.alert('ERROU!')
    else if (dados >= 4 && dados <= 7)
    window.alert('FRACASSO!')
    else if (dados >= 8 && dados <= 14)
    window.alert('RUIM!')
    else if (dados >= 15 && dados <= 17)
    window.alert('BOM!')
    else if (dados >= 18 && dados <= 19)
    window.alert('MUITO BOM!')
    else if (dados == 20)
    window.alert('CRÍTICO!!!')
}

if (pericias >= 17 && pericias <= 19)
{
    if (dados == 1)
    window.alert('ERROU!')
    else if (dados >= 2 && dados <= 5)
    window.alert('FRACASSO!')
    else if (dados >= 6 && dados <= 11)
    window.alert('RUIM!')
    else if (dados >= 12 && dados <= 15)
    window.alert('BOM!')
    else if (dados >= 16 && dados <= 18)
    window.alert('MUITO BOM!')
    else if (dados == 19 && dados == 20)
    window.alert('CRÍTICO!!!')
}

if (pericias == 20)
{
    if (dados >= 1 && dados <= 5)
    window.alert('FRACASSO!')
    else if (dados >= 6 && dados <= 11)
    window.alert('RUIM!')
    else if (dados >= 12 && dados <= 15)
    window.alert('BOM!')
    else if (dados >= 16 && dados <= 17)
    window.alert('MUITO BOM!')
    else if (dados >= 18 && dados <= 20)
    window.alert('CRÍTICO!!!')
}

}
//if (pericias + dados == 10)
    //window.alert('Certo')
//else
    //window.alert('Errado')
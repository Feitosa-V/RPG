function verifica(){
var pericia = window.document.getElementById('pericia')
var dado = window.document.getElementById('dado')

var pericias = Number(pericia.value)
var dados = Number(dado.value)

if (pericias >= 1 && pericias <= 4)
{
    if (dados <= 15) 
    Swal.fire({
        title: 'ERROUUUUUU!!!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("img/errou-faustao.gif")
          left top
          no-repeat
        `
      })
    else if (dados >= 16 && dados <= 17)
    Swal.fire('FRACASSO!')
    else if (dados == 18)
    Swal.fire('RUIM!')
    else if (dados == 19)
    Swal.fire('BOM!')
    else if (dados == 20)
    Swal.fire('MUITO BOM!')
}

if (pericias >= 5 && pericias <=8)
{
    if (dados <= 7)
    Swal.fire({
        title: 'ERROUUUUUU!!!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("img/errou-faustao.gif")
          left top
          no-repeat
        `
      })
    else if (dados >= 8 && dados <= 11)
    Swal.fire('FRACASSO!')
    else if (dados >= 12 && dados <= 15)
    Swal.fire('RUIM!')
    else if (dados >= 16 && dados <= 18)
    Swal.fire('BOM!')
    else if (dados == 19)
    Swal.fire('MUITO BOM!')
    else if (dados == 20)
    Swal.fire('CRITOUUU!!!')
}

if (pericias >= 9 && pericias <= 16)
{
    if (dados <= 3)
    Swal.fire({
        title: 'ERROUUUUUU!!!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("img/errou-faustao.gif")
          left top
          no-repeat
        `
      })
    else if (dados >= 4 && dados <= 7)
    Swal.fire('FRACASSO!')
    else if (dados >= 8 && dados <= 14)
    Swal.fire('RUIM!')
    else if (dados >= 15 && dados <= 17)
    Swal.fire('BOM!')
    else if (dados >= 18 && dados <= 19)
    Swal.fire('MUITO BOM!')
    else if (dados == 20)
    Swal.fire('CRITOUUU!!!')
}

if (pericias >= 17 && pericias <= 19)
{
    if (dados == 1)
    Swal.fire({
        title: 'ERROUUUUUU!!!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("img/errou-faustao.gif")
          left top
          no-repeat
        `
      })
    else if (dados >= 2 && dados <= 5)
    Swal.fire('FRACASSO!')
    else if (dados >= 6 && dados <= 11)
    Swal.fire('RUIM!')
    else if (dados >= 12 && dados <= 15)
    Swal.fire('BOM!')
    else if (dados >= 16 && dados <= 18)
    Swal.fire('MUITO BOM!')
    else if (dados == 19 && dados == 20)
    Swal.fire('CRITOUUU!!!')
}

if (pericias == 20)
{
    if (dados >= 1 && dados <= 5)
    Swal.fire('FRACASSO!')
    else if (dados >= 6 && dados <= 11)
    Swal.fire('RUIM!')
    else if (dados >= 12 && dados <= 15)
    Swal.fire('BOM!')
    else if (dados >= 16 && dados <= 17)
    Swal.fire('MUITO BOM!')
    else if (dados >= 18 && dados <= 20)
    Swal.fire('CRITOUUU!!!')
}

if (pericias > 20 && dados > 20)
{
    Swal.fire('VALOR DIGITADO MUITO ALTO!')
}

if (pericias == 0 && dados == 0)
{
    Swal.fire('VOCÊ NÃO DIGITOU NENHUM VALOR!')
}

}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (form_ano.value.length == 0 || form_ano.value > ano) {
        window.alert("ERRO: Verifique o ano e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(form_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //mesma coisa que <img id='foto'>

        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade >=14 && idade <= 18) {
                //adolescente
                img.setAttribute('src', 'adolescente_homem.jpg')
            } else if (idade >18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade >=14 && idade <= 18) {
                //adolescente
                img.setAttribute('src', 'adolescente_mulher.jpg')
            } else if (idade >18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} ano(s)`
        res.appendChild(img)
    }
}

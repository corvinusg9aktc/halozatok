window.onload = () => { console.log('Oldal betöltve....') }

var faktorialis = (n) => {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * faktorialis(n - 1)
    }
}

for (var sor = 0; sor < 10; sor++) {
    var sorDiv = document.createElement('div')
    sorDiv.setAttribute('class', 'sor')
    sorDiv.setAttribute('id', `sor${ sor }`)
    document.getElementById('pascal').appendChild(sorDiv)
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
        var elemDiv = document.createElement('div')
        elemDiv.setAttribute('class', 'elem')
        elemDiv.setAttribute('id', `elem${ sor }${ oszlop }`)
        document.getElementById(`sor${ sor }`).appendChild(elemDiv)
        elemDiv.innerHTML = (sor + 1) * (oszlop + 1)
    }
}


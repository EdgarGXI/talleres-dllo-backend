function desglosarString(texto, tipo) {
    let listaVocales = "aeiou";
    let contadorVocales = 0;
    
    for (let caracter of texto.toLowerCase()) {
        if (listaVocales.includes(caracter)) {
            contadorVocales++;
        }
    }
    
    if (tipo === "vocales") {
        return contadorVocales;
    } else if (tipo === "consonantes") {
        return texto.length - contadorVocales;
    }
}

function twoSum(numeros, objetivo) {
    let mapaIndices = new Map();

    for (let indice = 0; indice < numeros.length; indice++) {
        let complemento = objetivo - numeros[indice];

        if (mapaIndices.has(complemento)) {
            return [mapaIndices.get(complemento), indice];
        }

        mapaIndices.set(numeros[indice], indice);
    }

    return -1;
}

function conversionRomana(romano) {
    let valoresRomanos = {
        "I": 1, "V": 5, "X": 10, "L": 50,
        "C": 100, "D": 500, "M": 1000
    };
    
    let resultado = 0;
    
    for (let i = 0; i < romano.length; i++) {
        let actual = valoresRomanos[romano[i]];
        let siguiente = valoresRomanos[romano[i + 1]] || 0;

        if (actual < siguiente) {
            resultado -= actual;
        } else {
            resultado += actual;
        }
    }

    return resultado;
}


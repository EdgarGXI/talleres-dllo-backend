function convertidorTemp(gradCel){
    tempFaren = gradCel * (9/5) + 32
    return tempFaren
}


function resolvedor(b, a, c, val){
    if (val== true){
        x= (-b + (b**2 - 4*(a*c))**(1/2)) / 2*a
    }
    else{
        x= (-b - (b**2 - 4*(a*c))**(1/2)) / 2*a
    }

    return x
}


function mejorParidad(x){
    if (x % 2 == 0){
        ans= "Par"
    }
    else{
        ans= "Impar"
    }
    return ans
}



function peorParidad(num) {
    if(num ==1){
        out = "1 es impar"
    }
    if(num ==2){
        out = "2 es par"
    }
    if(num ==3){
        out = "3 es impar"
    }
    if(num ==4){
        out = "4 es par"
    }
    if(num ==5){
        out = "5 es impar"
    }
    if(num ==6){
        out = "6 es par"
    }
    if(num ==7){
        out = "7 es impar"
    }
    if(num ==8){
        out = "8 es par"
    }
    if(num ==9){
        out = "9 es impar"
    }
    if(num ==10){
        out = "10 es par"
    }
    return out
}


function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    if(isNaN(salario)  || isNaN(horastrabalhadas) || isNaN(cargahoraria)){
        return "Todos os valores devem ser números";
    }

    if(salario < 0 || horastrabalhadas < 0 || cargahoraria < 0){
        return "Todos os valores devem ser positivos";
    }
    let horasextras = 0
    if(horastrabalhadas > cargahoraria){
        horasextras = (horastrabalhadas - cargahoraria) * salario
    }

    return horasextras
}
module.exports = fnHorasExtras
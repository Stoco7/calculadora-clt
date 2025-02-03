const horaextra = require("./horasextras");

    test('salario por hora 10, Horas trabalhadas 50, carga horaria 40, resultado esperado 100', ()=>{
        expect(horaextra(10,50,40)).toBe(100)
    })

    test('salario por hora 10, Horas trabalhadas 30, carga horaria 36, resultado esperado 0', ()=>{
        expect(horaextra(10,30,36)).toBe(0)
    })

    test('salario por hora -10, Horas trabalhadas 50, carga horaria 40, resultado esperado "todos os valores devem ser positivos', ()=>{
        expect(horaextra(-10,50,40)).toBe("Todos os valores devem ser positivos")
    })

    test('salario por hora 10, Horas trabalhadas -50, carga horaria 40, resultado esperado "todos os valores devem ser positivos', ()=>{
        expect(horaextra(10,-50,40)).toBe("Todos os valores devem ser positivos")
    })

    test('salario por hora 10, Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser positivos', ()=>{
        expect(horaextra(10,50,-40)).toBe("Todos os valores devem ser positivos")
    })

    test('salario por hora "A", Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser números', ()=>{
        expect(horaextra("A",50,-40)).toBe("Todos os valores devem ser números")
    })

    test('salario por hora 10, Horas trabalhadas "A", carga horaria -40, resultado esperado "todos os valores devem ser números', ()=>{
        expect(horaextra(10,"A",-40)).toBe("Todos os valores devem ser números")
    })

    test('salario por hora 10, Horas trabalhadas 50, carga horaria "A", resultado esperado "todos os valores devem ser números', ()=>{
        expect(horaextra(10,50,"A")).toBe("Todos os valores devem ser números")
    })


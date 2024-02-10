class Cl_Movimiento {
    constructor(descripcion, tipo) {
        this.descripcion = descripcion
        this.tipo = tipo
        this.monto = 0
        this.saldoAnterior = 0
    }
    SaldoAcumulado() {

        if (this.tipo === 1)
            return this.saldoAnterior + this.monto
        else
            if (this.tipo === 2)
                return this.saldoAnterior - this.monto
    }



}


class Cl_CuentaBan {
    constructor() {
        this.saldoIni = this.saldoIni
        this.acumSaldo = 0

    }
    procesar(movimiento) {
        movimiento.saldoAnterior = this.acumSaldo
        if (movimiento.tipo === 1)
            this.acumSaldo += movimiento.monto
        else

            movimiento.saldoAnterior = this.acumSaldo
        if (movimiento.tipo === 2)
            this.acumSaldo -= movimiento.monto
    }
}
let CuentaBan = new Cl_CuentaBan()

let movimiento1 = new Cl_Movimiento("pago", "tipo1", 200)
let movimiento2 = new Cl_Movimiento("debitó", "tipo2", 500)
let movimiento3 = new Cl_Movimiento("pago", "tipo1", 60)
let movimiento4 = new Cl_Movimiento("debitó", "tipo2", 100)

CuentaBan.procesar(movimiento1)
CuentaBan.procesar(movimiento2)
CuentaBan.procesar(movimiento3)
CuentaBan.procesar(movimiento4)

let salida = document.getElementById("salida")
salida.innerHTML += `<p> ${movimiento1.tipo}: ${movimiento1.monto} + ${movimiento1.saldoAnterior} = ${movimiento1.SaldoAcumulado()}</p>`
salida.innerHTML += `<p> ${movimiento2.tipo}: ${movimiento2.monto} - ${movimiento2.saldoAnterior} = ${movimiento2.SaldoAcumulado()}</p>`
salida.innerHTML += `<p> ${movimiento3.tipo}: ${movimiento3.monto} + ${movimiento3.saldoAnterior} =  ${movimiento3.SaldoAcumulado()}</p>`
salida.innerHTML += `<p> ${movimiento4.tipo}: ${movimiento4.monto} - ${movimiento4.saldoAnterior} = ${movimiento4.SaldoAcumulado()}</p>`
salida.innerHTML += `<p> SaldoAcumulado: ${CuentaBan.acumSaldo}</p>`


// Constantes
let ESPERA = "Esperando";
let EJECUCION = "Ejecutando";
let BLOQUEO = "Bloqueado";
let SUSPENDIDO = "Suspendido";
let TERMINADO = "Terminado";
let cont = 0;

function Proceso(lleg, pri=0, raf=Math.floor(Math.random() * 7) + 3, nom="P"){
	if(nom == "P"){
		this.nombre = nom + cont++;
	}else{
		this.nombre = nom;
	}
	this.llegada = lleg;
	this.rafaga = raf;
	this.rafaga_res = raf - 1;  // Rafaga restante
	this.comienzo = 0;
	this.final = 0;
	this.retorno = 0;
	this.espera = 0;
	this.bloqueo = 0;
	this.suspendido = 0;

	this.prioridad = pri;
	this.estado = ESPERA;

	// Para diagrama de Gantt
	this.fila = []
	/*
	 * Va a estar lleno con numeros
	 * 0 -> Estado de espera
	 * 1 -> Estado de ejecucion
	 * 2 -> Estado bloqueado
	 * 3 -> Estado suspendido
	 */

	this.calcular = (com) => {
		this.comienzo = com;
		this.final = this.rafaga + this.comienzo;
		this.retorno = this.final - this.llegada;
		this.espera = this.retorno - this.rafaga;
	}

	this.bloquear = () => {
		if(this.estado == EJECUCION){
			this.bloqueo = 4;
			this.estado = BLOQUEO;
			this.rafaga -= this.rafaga_res + 1;
			this.calcular(this.llegada);
		}
	}

	this.suspender = () => {
		if(this.estado == EJECUCION){
			this.suspendido = 1;
			this.estado = SUSPENDIDO;
			this.rafaga -= this.rafaga_res + 1;
			this.calcular(this.llegada);
		}
	}
}
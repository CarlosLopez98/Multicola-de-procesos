$(document).ready(() => {
	let procesador = new Procesador();

	$("#iniciar").click(() => {
		procesador.empezar();
	});

	$("#bloquear").click(() => {
		procesador.bloquear_actual();
	});

	$("#parar").click(() => {
		procesador.detener();
	});

	$("#agregar1").click(() => {
		procesador.agregar(1);
	});

	$("#agregar2").click(() => {
		procesador.agregar(2);
	});

	$("#agregar3").click(() => {
		procesador.agregar(3);
	});
});
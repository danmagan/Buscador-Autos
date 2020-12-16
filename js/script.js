
const resultado = document.querySelector("#resultado");
const yearMaximo = new Date().getFullYear();
const yearMin = yearMaximo - 10;
//Select

const selectAnios = document.querySelector("#selectYear");
const selectMarca = document.querySelector("#selectMarca");
const selectTransmision = document.querySelector("#selectTransmision");
const selectPuertas = document.querySelector("#selectPuertas");
const selectColor = document.querySelector("#selectColor");
const selectPrecioMinimo = document.querySelector("#selectMinimo");
const selectPrecioMaximo = document.querySelector("#selectMaximo");
const selectModelo = document.querySelector("#selectModelo");

document.addEventListener("DOMContentLoaded", () => {
	mostrarAutos(autos);
	autosSelect();
})

const objetoBusqueda = {
		marca:'',
		year:'',
		puertas:'',
		color: '',
		transmision:'',
		maximo:'',
		minimo:'',
	}
// Generar Valores Select

selectAnios.addEventListener('change', e => {
	objetoBusqueda.year = parseInt(e.target.value);
	filtrarAuto();
});	

selectPuertas.addEventListener('change', e => {
	objetoBusqueda.puertas = parseInt(e.target.value);
	filtrarAuto();
});	

selectColor.addEventListener('change', e => {
	objetoBusqueda.color = e.target.value;
	filtrarAuto();
	
});	

selectMarca.addEventListener('change', e => {
	objetoBusqueda.marca = e.target.value;
	filtrarAuto();
});	

selectTransmision.addEventListener('change', e => {
	objetoBusqueda.transmision = e.target.value;
	filtrarAuto();
});	

selectPrecioMaximo.addEventListener('change', e => {
	objetoBusqueda.maximo = e.target.value;
	filtrarAuto();
});	

selectPrecioMinimo.addEventListener('change', e => {
	objetoBusqueda.minimo = e.target.value;
	filtrarAuto();
});	


/*----------------------------------------------------*/

function limpiar(){
	while(resultado.firstChild){
		resultado.removeChild(resultado.firstChild);
	}
}

function mostrarAutos(autos){

	limpiar();

	autos.forEach( auto =>{
		const autoDescripcion = document.createElement("p");

		autoDescripcion.textContent = `${auto.marca} ${auto.modelo} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} -Precio: ${auto.precio} - Color: ${auto.color}`;
		resultado.appendChild(autoDescripcion);
	})
}

function autosSelect(){
	for (i = yearMaximo; i >= yearMin; i--){
		let yearOption = document.createElement("option");
		yearOption.value = i;
		yearOption.textContent = i;
		selectAnios.appendChild(yearOption);
	}
}

function filtrarAuto(){
	const filtrados = autos.filter(filtrarMarca).filter(filtrarAnio).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarColor).filter(filtrarTransmision).filter(filtrarPuertas);

	if(filtrados.length){
		mostrarAutos(filtrados);
	}
	else{
		limpiar();
		let noResults = document.createElement("div");
		noResults.classList.add('alerta', 'error');
		noResults.textContent = "No Hay Resultados";
		resultado.appendChild(noResults);
	}
}

function filtrarMarca(auto){
	if(objetoBusqueda.marca){
		return auto.marca === objetoBusqueda.marca;
	}
	return auto;
}

function filtrarAnio(auto){
	if(objetoBusqueda.year){
		return auto.year === objetoBusqueda.year;
	}
	return auto;
}

function filtrarMinimo(auto){
	if(objetoBusqueda.minimo){
		return auto.precio >= objetoBusqueda.minimo;
	}
	return auto;
}

function filtrarMaximo(auto){
	if(objetoBusqueda.maximo){
		return auto.precio <= objetoBusqueda.maximo;
	}
	return auto;
}

function filtrarColor(auto){
	if(objetoBusqueda.color){
		return auto.color === objetoBusqueda.color;
	}
	return auto;
}

function filtrarPuertas(auto){
	if(objetoBusqueda.puertas){
		return auto.puertas === objetoBusqueda.puertas;
	}
	return auto;
}

function filtrarTransmision(auto){
	if(objetoBusqueda.transmision){
		return auto.transmision === objetoBusqueda.transmision;
	}
	return auto;
}
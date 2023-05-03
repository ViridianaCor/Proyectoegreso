let ingresos = [new Ingreso("Salario", 9000), new Ingreso ("Bachilleres", 3500), new Ingreso ("Poli", 3000)];
let egresos = [new Egreso("Casa",5000), new Egreso("Doctor", 1000), new Egreso("Comida", 2000)];

let formatoMoneda = (formatearValor) =>{
    let valorFormateado =formatearValor.toLocaleString("es-Es", {style: "currency", currency:"MXN"})
    if(formatearValor<10000){
    return valorFormateado.replace(",",".");}
    else{
        return valorFormateado.replace(",",".").replace(".",".")
        }
}
let formatoPorcentaje = (formatearValor) => {
    return formatearValor.toLocaleString("es-Es", { style:"percent", minimumFractionDigits: 2});
}

let cargarCabecero = () => {
    let totalIngresos = () => {
        let totalIngresos = 0;
        for (let ingreso of ingreso) {
            totalIngresos += ingreso.valor;
        }
        return totalIngresos;
    }

    let totalEgresos = () => {
        let totalEgresos = 0;
        for (let egreso of egresos) {
            totalEgresos += egreso.valor;
        }
        return totalEgresos;
    }

    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgreso() / totalIngresos;

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());

    if(porcentajeEgreso > 0){
        document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    }
    else{
        document.getElementById("porcentaje").innerHTML = formatoPorcentaje(0)
    }
}

let cargarApp = () => {
    cargarCabecero()
    cargarIngresos ()
    cargarEgresos ()
}

let eliminarIngresos = (id) =>{
    let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id=== id);
    if(indiceEliminar !== -1) {
        ingresos.splice(indiceEliminar,1);
        cargarCabecero();
        cargarIngresos();
    }
}
let cargarIngresos = () => {
    let crearIngresosHTML = (ingreso) =>{
        let descripcion = document.getElementsByClassName("elemento_descripcion").innerHTML= <div class="elemento_descripcion"></div>;
        let valor = document.getElementsByClassName("elemento_valor").innerHTML= <div class="elemento-valor"></div>;
        let icon = document.createElement('ion-icon');
        let iconA = <ion-icon name="close-circle-outline">${icon.innerHTML = ""}</ion-icon>;
        let iconB = <button onclick="eliminarIngreso(${ingreso.id})" class="elemento_eliminar_btn"></button>;

        let boton = <div class="elemento_eliminar">${iconB}</div>

        let derecha = <div class="derecha limpiarEstilos">${valor} ${boton}</div>

        let ingresoHTML = <div id="${ingresos.descripcion}" class="elemento limpiarEstilos"> ${descripcion}</div>

        return ingresoHTML;
    }
    for (let ingreso of ingresos){
        ingresoHTML += crearIngresosHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresoHTML;
    
    return ingresosHTML
}

let eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex ((egreso) =>egreso.id=== id);

    if (indiceEliminar !== -1){
        egresos.splice(indiceEliminar,1);
        cargarCabecero();
        cargarEgresos();
    }
}
let cargarEgresos = => {

}


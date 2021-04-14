// Inicializando en localStorage las rutas (solo sino existen)
if (!localStorage.getItem("Rutas")) {
  let rutas = [
    {
      nombreRuta: "Tegucigalpa - Comayagua",
      distancia: 91.1,
      combustible: 2448.38,
      pasaje: { normal: 200, primeraClase: 285, ninos3eraEdad: 145 },
      peaje: 87,
      alimentacion: 50,
    },
    {
      nombreRuta: "Tegucigalpa - San Pedro Sula",
      distancia: 251,
      combustible: 6748.47,
      pasaje: { normal: 550, primeraClase: 785, ninos3eraEdad: 395 },
      peaje: 261,
      alimentacion: 50,
    },
    {
      nombreRuta: "Tegucigalpa - Siguatepeque",
      distancia: 125,
      combustible: 3359.46,
      pasaje: { normal: 225, primeraClase: 390, ninos3eraEdad: 200 },
      peaje: 174,
      alimentacion: 50,
    },
    {
      nombreRuta: "Tegucigalpa - Santa Bárbara la Campa",
      distancia: 207.9,
      combustible: 5587.44,
      pasaje: { normal: 455, primeraClase: 650, ninos3eraEdad: 325 },
      peaje: 174,
      alimentacion: 50,
    },
    {
      nombreRuta: "Tegucigalpa - Santa Rosa de Copán",
      distancia: 320.8,
      combustible: 8261.71,
      pasaje: { normal: 700, primeraClase: 1000, ninos3eraEdad: 500 },
      peaje: 174,
      alimentacion: 50,
    },
    {
      nombreRuta: "Tegucigalpa - Olancho",
      distancia: 235.9,
      combustible: 6339.96,
      pasaje: { normal: 520, primeraClase: 740, ninos3eraEdad: 370 },
      peaje: 0,
      alimentacion: 50,
    },
    {
      nombreRuta: "Tegucigalpa - Choluteca",
      distancia: 147.1,
      combustible: 3953.4,
      pasaje: { normal: 325, primeraClase: 460, ninos3eraEdad: 230 },
      peaje: 0,
      alimentacion: 50,
    },
    {
      nombreRuta: "Tegucigalpa - La Ceiba",
      distancia: 401.7,
      combustible: 10795.94,
      pasaje: { normal: 880, primeraClase: 1255, ninos3eraEdad: 630 },
      peaje: 261,
      alimentacion: 120,
    },
    {
      nombreRuta: "Tegucigalpa - Trujillo",
      distancia: 411.1,
      combustible: 11048.58,
      pasaje: { normal: 900, primeraClase: 1285, ninos3eraEdad: 645 },
      peaje: 261,
      alimentacion: 120,
    },
    {
      nombreRuta: "Tegucigalpa - Danlí",
      distancia: 94.3,
      combustible: 2504.37,
      pasaje: { normal: 210, primeraClase: 295, ninos3eraEdad: 150 },
      peaje: 0,
      alimentacion: 50,
    },
  ];
  localStorage.setItem("Rutas", JSON.stringify(rutas));
}

if (!localStorage.getItem("calculos")) {
  let calculos = [];
  localStorage.setItem("calculos", JSON.stringify(calculos));
}

if (!localStorage.getItem("ultimoCalculo")) {
  localStorage.setItem("ultimoCalculo", JSON.stringify({}));
}

// Procedimiento para llenar el select de seleccion de rutas automaticamente
const rutas = JSON.parse(localStorage.getItem("Rutas"));
const selectRuta = document.getElementById("ruta");
const selectBus = document.getElementById("bus");
let optionRutas;

for (let i = 0; i < rutas.length; i++) {
  optionRutas
    ? (optionRutas =
        optionRutas + `<option value="${i}">${rutas[i].nombreRuta}</option>`)
    : (optionRutas = `<option value="${i}">${rutas[i].nombreRuta}</option>`);
}

selectRuta.innerHTML = optionRutas;

// Sacar el valor del bus seleccionado
let noAsientos = selectBus.value;
selectBus.addEventListener("change", (event) => {
  noAsientos = document.getElementById("bus").value;
});

const calcular = () => {
  const primeraClase = Number(document.getElementById("primeraclase").value);
  const normal = Number(document.getElementById("normal").value);
  const ninos = Number(document.getElementById("niños").value);
  const terceraEdad = Number(document.getElementById("terceraedad").value);

  const max = verificarMax(primeraClase, normal, ninos, terceraEdad);

  if (!max) {
    Swal.fire({
      title: "Error",
      icon: "error",
      text: "El número de pasajeros excede la capacidad máxima",
    });
    return;
  }

  const iRuta = Number(selectRuta.value);

  const ingresos =
    primeraClase * rutas[iRuta].pasaje.primeraClase +
    normal * rutas[iRuta].pasaje.normal +
    ninos * rutas[iRuta].pasaje.ninos3eraEdad +
    terceraEdad * rutas[iRuta].pasaje.ninos3eraEdad;
  const gastoVariable = rutas[iRuta].combustible + rutas[iRuta].peaje;
  const gastoFijo =
    rutas[iRuta].alimentacion *
    (primeraClase + normal + ninos + terceraEdad + 2);

  const beneficioEsperado = ingresos - gastoVariable - gastoFijo;

  let calculos = JSON.parse(localStorage.getItem("calculos"));
  // let ultimoCalculo = JSON.parse(localStorage.getItem('ultimoCalculo'));

  if (calculos.length == 0) {
    calculos.push({
      nombreRuta: rutas[iRuta].nombreRuta,
      ingresos,
      gastoVariable,
      gastoFijo,
      beneficioEsperado,
    });
    localStorage.setItem("calculos", JSON.stringify(calculos));
    localStorage.setItem(
      "ultimoCalculo",
      JSON.stringify({
        nombreRuta: rutas[iRuta].nombreRuta,
        ingresos,
        gastoVariable,
        gastoFijo,
        beneficioEsperado,
      })
    );
    window.location.href = "../pages/et_beneficio_esperado.html";
  } else {
    // let verificaExistente = calculos[i].nombreRuta.includes(rutas[iRuta].nombreRuta);
    let verificaExistente = calculos.some(
      (calculo) => calculo.nombreRuta == rutas[iRuta].nombreRuta
    );
    console.log(verificaExistente);

    if (verificaExistente) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Ya has hecho un calculo para esta ruta",
      });
      return;
    }

    calculos.push({
      nombreRuta: rutas[iRuta].nombreRuta,
      ingresos,
      gastoVariable,
      gastoFijo,
      beneficioEsperado,
    });
    localStorage.setItem("calculos", JSON.stringify(calculos));
    localStorage.setItem(
      "ultimoCalculo",
      JSON.stringify({
        nombreRuta: rutas[iRuta].nombreRuta,
        ingresos,
        gastoVariable,
        gastoFijo,
        beneficioEsperado,
      })
    );
    window.location.href = "../pages/et_beneficio_esperado.html";
  }
};

const verificarMax = (pc, n, ni, t) => {
  if (pc + n + ni + t > noAsientos) {
    return false;
  }
  return true;
};

const limpiar = () => {
  const primeraClase = document.getElementById("primeraclase");
  const normal = document.getElementById("normal");
  const ninos = document.getElementById("niños");
  const terceraEdad = document.getElementById("terceraedad");

  primeraClase.value = 0;
  normal.value = 0;
  ninos.value = 0;
  terceraEdad.value = 0;
};

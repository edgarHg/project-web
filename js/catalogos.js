angular.module('cCatalogos', [])
    .factory('cEquipos', function () {
        return {
            tiposEquipos: [
                {id: 100, name: "Todos"},
                {
                    id: 1, name: "Hidrolavadoras",
                    filtros: [
                        {id: 1, idTipo: 1, name: "Motor a gasolina"},
                        {id: 1, idTipo: 2, name: "Motor eléctrico"},
                        {id: 1, idTipo: 3, name: "Motor a diesel"},
                        {id: 1, idTipo: 4, name: "Comercial"},
                        {id: 1, idTipo: 5, name: "Industrial"},
                        {id: 1, idTipo: 6, name: "Agua fria"},
                        {id: 1, idTipo: 7, name: "Agua caliente"},
                        {id: 1, idTipo: 8, name: "Agua caliente/fria"},
                        // {id: 1, idTipo: 9, name: "Accsesorios"}
                    ]
                },
                {
                    id: 2, name: "Motobombas",
                    filtros: [
                        {id: 2, idTipo: 1, name: "Motor a gasolina"},
                        {id: 2, idTipo: 1, name: "Motor a diesel"},
                        {id: 2, idTipo: 1, name: "Comercial"},
                        {id: 2, idTipo: 1, name: "Industrial"},
                        {id: 2, idTipo: 1, name: "Accsesorios"}
                    ]
                },
                {
                    id: 3, name: "Aspiradoras",
                    filtros: [
                        {idTipo: 3, name: "Comercial"},
                        {idTipo: 2, name: "Industrial"},
                    ]
                },
                {
                    id: 4, name: "Espumadores",
                    filtros: [
                        {id: 4, idTipo: 1, name: "Comercial"},
                        {id: 4, idTipo: 2, name: "Industrial"},
                    ]
                },
                {
                    id: 5, name: "Generadores",
                    filtros: [
                        {id: 5, idTipo: 1, name: "Comercial"},
                        {id: 5, idTipo: 2, name: "Industrial"},
                    ]
                },
                {id: 6, name: "Torres de Iluminación", filtros: []},
                {id: 7, name: "Podadoras", filtros: []},
                {id: 8, name: "Desbrosadoras", filtros: []},
                {id: 9, name: "Desazolvadora", filtros: []}

            ],

            hidrolavadoras: [
                {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua fría",
                    descripcion: "Hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., donde se requiera lavado a alta presión con agua fría.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Electrica",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "POWERJET",
                    modelo: "F-150 Basic",
                    presion: "150 bares, (2,200 psig)",
                    potencia_de_motor: "5.5 hp, 1750 rpm",
                    peso: "48 Kg",
                    voltaje: "220 V",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: "",
                    caldera: null,
                    img: "hidrolavadoras/f-150.jpg"
                },
                {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua fría",
                    descripcion: "Esta hidrolavadora es para uso industrial, teniendo mucha potencia, para limpieza en industria química, metalúrgica etc., maquinaria pesada, piezas metálicas, pisos, etc., donde se requiera lavado con mucha presión con agua fría.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Electrica",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "POWERJET",
                    modelo: "F-250",
                    presion: "250 bares, (3,625 psig)",
                    potencia_de_motor: "10 hp, 7.5 kw",
                    peso: "115 Kg",
                    voltaje: "220 o 440 V",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: "",
                    caldera: null,
                    img: "hidrolavadoras/f-250.jpg"
                },
                {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua fría",
                    descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Electrica",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "POWERJET",
                    modelo: "F-200",
                    presion: "200 bares, (3,000 psig)",
                    potencia_de_motor: "7.5 hp, 1750 rpm",
                    peso: "57 Kg",
                    voltaje: "220 o 440 V",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: "",
                    caldera: null,
                    img: "hidrolavadoras/f-200.jpg"
                },
                {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Electrica",
                    idTipoAgua: 8,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca: "POWERJET",
                    modelo: "TK-200/19 (Paro total retardado)",
                    presion: "200 Bares, (2,900 psig)",
                    potencia_de_motor: "10 hp, 1750 rpm",
                    peso: "180 Kg",
                    voltaje: "220 o 440 V",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: "Diesel 5 kg/hr, 25 litros",
                    caldera: null,
                    img: "hidrolavadoras/tk-200-19.jpg"

                },
                {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 8,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca: "POWERJET",
                    modelo: "C-200 G",
                    presion: "200 Bares, (2,900 psig)",
                    potencia_de_motor: "18 hp, 1740 rpm",
                    peso: "170 Kg",
                    voltaje: "",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: " Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img: "hidrolavadoras/c-200.jpg"
                },
                {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 4,
                    descSerie: "Comercial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 8,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca: "POWERJET",
                    modelo: "C-200 G",
                    presion: "200 Bares, (2,900 psig)",
                    potencia_de_motor: "18 hp, 1740 rpm",
                    peso: "170 Kg",
                    voltaje: "",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: " Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img: "hidrolavadoras/c-200.jpg"
                },
                {
                    id: 1,
                    name: "Hidrolavadoras Agua Caliente",
                    descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, utilizada en mantenimiento de ductos petroleros y fabricas de hules y plasticos",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Eléctrica",
                    idTipoAgua: 7,
                    descTipoAgua: "Agua Caliente",
                    marca: " Mitho Plus ",
                    modelo: "1800-M",
                    presion: "1800 lb/in2 (124 BAR)",
                    potencia_de_motor: "3400 R.P.M. 220-60-1",
                    peso: "53 Kg.",
                    voltaje: "",
                    conexion: "",
                    uso: "Industrial",
                    consumo: "",
                    caldera: "",
                    img: "hidrolavadoras/mithoplus-1800-m.jpg"
                },
                {
                    id: 1,
                    name: "Hidrolavadoras Agua Caliente",
                    descripcion: "Este equipo está diseñado para uso continuo, acelera el tiempo de limpieza especialmente cuando las superficies están llenas de grasas, aceites, solventes, etc. Por su bajo mantenimiento y extrema confiabilidad, la Golden es un excelente equipo para trabajos de limpieza industrial.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Eléctrica",
                    idTipoAgua: 7,
                    descTipoAgua: "Agua Caliente",
                    marca: "Golden Plus",
                    modelo: "2960-T",
                    presion: "2960 lb/in2 (200 BAR)",
                    potencia_de_motor: "7.5 HP, 1750 RPM 220-60-3",
                    peso: "160 Kg.",
                    voltaje: "",
                    conexion: "",
                    uso: "Industrial",
                    consumo: "",
                    caldera: "",

                    img: "hidrolavadoras/GoldenPlus2960-T.jpg"
                },
                {
                    id: 1,
                    name: "Hidrolavadoras Agua Caliente",
                    descripcion: "Este modelo por su gran versatilidad y sus controles totalmente automatizados le permite aprovecharlo en un 100 por ciento, es de gran utilidad para cualquier industria en donde sus necesidades de limpieza requieran jornadas de arduo trabajo y de uso continuo, es ideal para quitar de cualquier superficie grasa, aceite,",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Eléctrica",
                    idTipoAgua: 7,
                    descTipoAgua: "Agua Caliente",
                    marca: " Mistral DS",
                    modelo: "2960 T",
                    presion: "2960 lb/in2 (200 BAR) ",
                    potencia_de_motor: "7.5 HP, 1750 RPM 220-60-3",
                    peso: "180 Kg.",
                    voltaje: "",
                    conexion: "",
                    uso: "Industrial",
                    consumo: "",
                    caldera: "",

                    img: "hidrolavadoras/MistralDS2960T.jpg"
                }, {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua fría",
                    descripcion: "Muy compacta y ligera, fácil de transportar y operar, ideal para trabajos de cuadrillas en alturas, o para iniciar tu negocio de lavado, cuenta con accesorios industriales como gatillo, manguera con refuerzo de acero, lanza, boquillas intercambiables, que hacen gran diferencia con el segmento doméstico.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "HIDROREY",
                    modelo: "H6G3000",
                    presion: "2.6GPM 3000PSI MAX",
                    potencia_de_motor: "6HP HONDA",
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "hidrolavadoras/H6G3000.jpg"
                }, {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua fría",
                    descripcion: "Motor Gasolina Honda GC190, Bomba Industrial Italiana General Pump 2700psi. Muy compacta y ligera, fácil de transportar y operar, ideal para trabajos de cuadrillas en alturas, o para iniciar tu negocio de lavado, cuenta con accesorios industriales como gatillo, manguera con refuerzo de acero, lanza, boquillas intercambiables, que hacen gran diferencia con el segmento doméstico.",
                    idSerie: 4,
                    descSerie: "Comercial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "HIDROREY",
                    modelo: "H6G2700",
                    presion: "2.6GPM 2700PSI MAX",
                    potencia_de_motor: "6HP HONDA",
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "hidrolavadoras/H6G2700.jpg"
                }, {
                    id: 1,
                    name: "Hidrolavadora industrial de alta presión en agua fría",
                    descripcion: "Motor a Gasolina Honda GX390, Bomba italiana General Pump triplex con sistema biela-cigüeñal, Bypass externo resorte negro, montada sobre resistente chasis de acero con pintura horneada, y llantas rellenas de poliuretano Flat-Free que nunca se poncharan. Todos sus accesorios son de uso industrial, están sobrados para su tipo, como su gatillo exclusivo easy-pull y su manguera con refuerzo de malla de acero. 100% reparable, con refacciones originales y accesorios estándar de la industria.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "HIDROREY",
                    modelo: "H13G4000",
                    presion: "4GPM 4000PSI ITALY",
                    potencia_de_motor: "13HP GX390",
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "hidrolavadoras/H13G4000.jpg"
                }, {
                    id: 1,
                    name: "Hidrolavadora Heavy Duty Super Industrial Agua Fría",
                    descripcion: "Motor Honda GX690 24HP, Bomba italiana General Pump de pistones cerámicos triplex y biela-cigüeñal 5000psi, montada por Poleas y Bandas sobre resistente chasis de acero con pintura horneada, y 4 llantas neumaticas. Ideal para uso Industrial o Preparacion de Superficies. Accesorios Industriales, gatillo, manguera con refuerzo de malla de acero, regulador de presión, boquillas. 100% reparable, con refacciones originales y accesorios estándar de la industria.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "HIDROREY",
                    modelo: "HD24G5000P",
                    presion: "4.5GPM 5000PSI MAX. GP ITALY",
                    potencia_de_motor: "24HP GX690 ARRANQUE ELECTRICO",
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "hidrolavadoras/HD24G5000P.jpg"
                }, {
                    id: 1,
                    name: "Hidrolavadora Heavy Duty Super Industrial Agua Fría",
                    descripcion: "Motor Honda GX690 24HP, Bomba italiana General Pump de pistones cerámicos triplex y biela-cigüeñal 7000psi, montada por Poleas y Bandas sobre resistente chasis de acero con pintura horneada, y 4 llantas neumaticas. Ideal para uso Industrial o Preparacion de Superficies. Accesorios Industriales, gatillo, manguera con refuerzo de malla de acero, regulador de presión, boquillas. 100% reparable, con refacciones originales y accesorios estándar de la industria.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "HIDROREY",
                    modelo: "HD24G7000P",
                    presion: "3.6GPM 7000PSI MAX. GP ITALY",
                    potencia_de_motor: "24HP GX690 ARRANQUE ELECTRICO",
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "hidrolavadoras/HD24H7000P.jpg"
                }
            ],
            desazolvadora:[
                 {
                    id: 10,
                    name: "Desazolvadora-Hidrolavadora Portatil Agua Fría",
                    descripcion: "Motor a Gasolina Honda GX390, Bomba italiana General Pump triplex con sistema biela-cigüeñal 3500psi, Bypass externo resorte negro, montada sobre resistente chasis de acero con pintura horneada, y llantas rellenas de poliuretano Flat-Free que nunca se poncharan. Ideal para lavado industrial y desazolve de tuberías de 2” a 6” de Diametro. Todos sus accesorios son de uso industrial, Incluye valvula de pulsaciones, valvula de pie, carrete y manguera flexible para desazolve, asi como tobera de penetracion.",
                    idSerie: 5,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor: "Gasolina",
                    idTipoAgua: 6,
                    descTipoAgua: "Agua Fría",
                    marca: "HIDROREY",
                    modelo: "H13G3500JET",
                    presion: "4GPM 4000PSI ITALY",
                    potencia_de_motor: "13HP GX390",
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "hidrolavadoras/H13GJET.jpg"
                }
            ],
            motobombas: [
                {
                    id: 2,
                    name: "Motobombas WMP20X",
                    descripcion: "Motobomba para agua salada y líquidos especiales utilizados en agricultura e industria, gracias a su carcasa de termoplástico reforzado.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: null,
                    descMotor: null,
                    idTipoAgua: null,
                    descTipoAgua: null,
                    marca: "HONDA",
                    modelo: "19006001",
                    presion: null,
                    potencia_de_motor: null,
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "motobombas/wmp-20-x.jpg"
                },
                {
                    id: 2,
                    name: "Motobomba WB20-XM",
                    descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: null,
                    descMotor: null,
                    idTipoAgua: null,
                    descTipoAgua: null,
                    marca: "HONDA",
                    modelo: "GX 160H1",
                    presion: null,
                    potencia_de_motor: null,
                    peso: null,
                    voltaje: null,
                    conexion: null,
                    uso: "Industrial",
                    consumo: null,
                    caldera: null,
                    img: "motobombas/MB20X.jpg"
                }
            ],
            aspiradoras: [
                {
                    id: 3,
                    name: "Aspiradora Industrial",
                    descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor: "2 de 1,200 watts c/u, 120 ó 220 V.",
                    idTipoAgua: null,
                    descTipoAgua: null,
                    marca: "POWERJET",
                    modelo: "Base 429 con expulsión",
                    presion: null,
                    potencia_de_motor: "3.2 hp (26 hp peak)",
                    peso: "22Kg",
                    voltaje: "120 ó 220 V",
                    conexion: null,
                    uso: "Industrial",
                    consumo: "2 de 1,200 watts c/u, 120 ó 220 V.",
                    caldera: null,
                    img: "aspiradoras/base-429.jpg"

                }
            ],
            espumadores: [
                {
                    id: 4,
                    name: "Espumador Industrial",
                    descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: null,
                    descMotor: null,
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca: "POWERJET",
                    modelo: "C-200 G",
                    presion: "200 Bares, (2,900 psig)",
                    potencia_de_motor: "18 hp, 1740 rpm",
                    peso: "170 Kg",
                    voltaje: "",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: " Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img: "espumadores/espumador-inoxidable-50-litros.jpg"
                }
            ],
            generadores: [
                {
                    id: 5,
                    name: "Generador",
                    descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor: "Gasolina",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca: "POWERJET",
                    modelo: "TK-200/19 (Paro total retardado)",
                    presion: "200 Bares, (2,900 psig)",
                    potencia_de_motor: "10 hp, 1750 rpm",
                    peso: "180 Kg",
                    voltaje: "220 o 440 V",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: "Diesel 5 kg/hr, 25 litros",
                    caldera: null,
                    img: "generadores/CALT4500B.jpg"

                },
                {
                    id: 5,
                    name: "Generador Industrial",
                    descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: null,
                    descMotor: null,
                    idTipoAgua: 3,
                    descTipoAgua: null,
                    marca: "POWERJET",
                    modelo: "C-200 G",
                    presion: "200 Bares, (2,900 psig)",
                    potencia_de_motor: "18 hp, 1740 rpm",
                    peso: "170 Kg",
                    voltaje: "",
                    conexion: "Trifásica",
                    uso: "Industrial",
                    consumo: " Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img: "generadores/generador.jpg"
                }
            ],
            torresIluminacion: [],
            podadoras: [],
            desbrosadoras: [],
            compresores: []
        }
    });
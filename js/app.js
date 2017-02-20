angular.module('myApp', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/home.html',
                controller: 'MainController'
            })
            .when('/equipos', {
                templateUrl: 'view/equipos.html',
                controller: 'EquiposController'
            })
            .otherwise({
                redirectTo: '/'
            });

    })
    .controller('MainController', [function () {

    }])

    .controller('EquiposController', [function () {

            $scope.equipos = {
                hidrolavadoras : [{
                    descripcion : "Hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., donde se requiera lavado a alta presión con agua fría.",
                    tipo: "Industrial",
                    tipoMotor:"Electrica",
                    tipoAgua: 1,
                    descripcionTipoAgua: "Agua Fría",
                    marca : "POWERJET",
                    modelo: "F-150 Basic",
                    presion:"150 bares, (2,200 psig)",
                    potencia_de_motor:"5.5 hp, 1750 rpm",
                    peso:"48 Kg",
                    voltaje:"220 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    motor: "",
                    consumo:"",
                    img:"f-150.jpg"
                },
                {
                    descripcion : "Esta hidrolavadora es para uso industrial, teniendo mucha potencia, para limpieza en industria química, metalúrgica etc., maquinaria pesada, piezas metálicas, pisos, etc., donde se requiera lavado con mucha presión con agua fría.",
                    tipo: "Industrial",
                    tipoMotor:"Electrica",
                    tipoAgua: 1,
                    descripcionTipoAgua: "Agua Fría",
                    marca : "POWERJET",
                    modelo: "F-250",
                    presion:"250 bares, (3,625 psig)",
                    potencia_de_motor:"10 hp, 7.5 kw",
                    peso:"115 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    motor: "",
                    consumo:"",
                    img:"f-250.jpg"
                },
                {
                    descripcion : "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    tipo: "Industrial",
                    tipoMotor:"Electrica",
                    tipoAgua: 1,
                    descripcionTipoAgua: "Agua Fría",
                    marca : "POWERJET",
                    modelo: "F-200",
                    presion:"200 bares, (3,000 psig)",
                    potencia_de_motor:"7.5 hp, 1750 rpm",
                    peso:"57 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    motor: "",
                    consumo:"",
                    img:"f-200.jpg"
                },
                {
                    descripcion : "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    tipo: "Industrial",
                    tipoMotor:"Electrica",
                    tipoAgua: 3,
                    descripcionTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "TK-200/19 (Paro total retardado)",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"10 hp, 1750 rpm",
                    peso:"180 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    motor: "",
                    consumo:"Diesel 5 kg/hr, 25 litros",
                    img:"tk-200-19.jpg"

                },
                    {
                    descripcion : "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    tipo: "Industrial",
                    tipoMotor:"Electrica",
                    tipoAgua: 3,
                    descripcionTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "C-200 G",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"18 hp, 1740 rpm",
                    peso:"170 Kg",
                    voltaje:"",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    motor: "Honda, a gasolina, (arranque eléctrico)",
                    consumo:" Diesel 5 kg/hr, 25 litros",
                        img:"c-200.jpg"
                }
                ]
            };
    }])
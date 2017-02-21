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

    .controller('EquiposController', ['$scope',function ($scope) {

        /*
            id = equivale que tipo de e1uipo es 
            1 = hidrolavadora
            2 = motobombas
            3 = aspairadoras
            4 = generadores

            idSerie es definido como comercial o industrial
            1 = Industrial
            2 = Comercial

            idMotor es que tipo de Motor tiene el equipo
            1 = Electrica
            2 = Gasolina
            3 = Diesel

            idTipoAgua es que tipo de agua procesa fria, caliente o ambas
            1 = fria
            2 = caliente
            3 = caliente y fria

             Tamaño de Imagen 413 * 331 170 Resolucion
         */

            $scope.equipos = [{
                    id: 1,
                    name:"Hidrolavadora industrial de alta presión en agua fría",
                    descripcion : "Hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., donde se requiera lavado a alta presión con agua fría.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor:"Electrica",
                    idTipoAgua: 1,
                    descTipoAgua: "Agua Fría",
                    marca : "POWERJET",
                    modelo: "F-150 Basic",
                    presion:"150 bares, (2,200 psig)",
                    potencia_de_motor:"5.5 hp, 1750 rpm",
                    peso:"48 Kg",
                    voltaje:"220 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:"",
                    caldera: null,
                    img:"hidrolavadoras/f-150.jpg"
                },
                {
                    id: 1,
                     name:"Hidrolavadora industrial de alta presión en agua fría",
                    descripcion : "Esta hidrolavadora es para uso industrial, teniendo mucha potencia, para limpieza en industria química, metalúrgica etc., maquinaria pesada, piezas metálicas, pisos, etc., donde se requiera lavado con mucha presión con agua fría.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor:"Electrica",
                    idTipoAgua: 1,
                    descTipoAgua: "Agua Fría",
                    marca : "POWERJET",
                    modelo: "F-250",
                    presion:"250 bares, (3,625 psig)",
                    potencia_de_motor:"10 hp, 7.5 kw",
                    peso:"115 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:"",
                    caldera: null,
                    img:"hidrolavadoras/f-250.jpg"
                },
                {
                    id: 1,
                    name:"Hidrolavadora industrial de alta presión en agua fría",
                    descripcion : "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor:"Electrica",
                    idTipoAgua: 1,
                    descTipoAgua: "Agua Fría",
                    marca : "POWERJET",
                    modelo: "F-200",
                    presion:"200 bares, (3,000 psig)",
                    potencia_de_motor:"7.5 hp, 1750 rpm",
                    peso:"57 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:"",
                    caldera: null,
                    img:"hidrolavadoras/f-200.jpg"
                },
                {
                    id: 1,
                    name:"Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion : "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor:"Electrica",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "TK-200/19 (Paro total retardado)",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"10 hp, 1750 rpm",
                    peso:"180 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:"Diesel 5 kg/hr, 25 litros",
                    caldera: null,
                    img:"hidrolavadoras/tk-200-19.jpg"

                },
                {
                    id: 1,
                    name:"Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion : "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor:"Gasolina",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "C-200 G",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"18 hp, 1740 rpm",
                    peso:"170 Kg",
                    voltaje:"",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:" Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img:"hidrolavadoras/c-200.jpg"
                },
                //Motobombas
                            {
                    id: 2,
                    name:"Motobombas",
                    descripcion : "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor:"Electrica",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "TK-200/19 (Paro total retardado)",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"10 hp, 1750 rpm",
                    peso:"180 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:"Diesel 5 kg/hr, 25 litros",
                    caldera: null,
                    img:"motobomba-electrica.jpg"

                },
                {
                    id: 2,
                    name:"Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion : "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor:"Gasolina",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "C-200 G",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"18 hp, 1740 rpm",
                    peso:"170 Kg",
                    voltaje:"",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:" Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img:"motobomba-gasolina.jpg"
                },
                //Aspiradoras
                            {
                    id: 3,
                    name:"Aspiradora Industrial",
                    descripcion : "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor:"2 de 1,200 watts c/u, 120 ó 220 V.",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "Base 429 con expulsión",
                    presion: null,
                    potencia_de_motor:"3.2 hp (26 hp peak)",
                    peso:"22Kg",
                    voltaje:"120 ó 220 V",
                    conexion:null,
                    uso:"Industrial",
                    consumo:"2 de 1,200 watts c/u, 120 ó 220 V.",
                    caldera: null,
                    img:"carwash-aspiradora.jpg"

                },
                //Espumadores
                {
                    id: 4,
                    name:"Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion : "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor:"Gasolina",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "C-200 G",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"18 hp, 1740 rpm",
                    peso:"170 Kg",
                    voltaje:"",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:" Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img:"car-wash-espumador.jpg"
                },
                            //Generadores
                            {
                    id: 5,
                    name:"Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion : "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 1,
                    descMotor:"Electrica",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "TK-200/19 (Paro total retardado)",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"10 hp, 1750 rpm",
                    peso:"180 Kg",
                    voltaje:"220 o 440 V",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:"Diesel 5 kg/hr, 25 litros",
                    caldera: null,
                    img:"generador-gsalonia.jpg"

                },
                {
                    id: 5,
                    name:"Hidrolavadora industrial de alta presión en agua caliente y fría",
                    descripcion : "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
                    idSerie: 1,
                    descSerie: "Industrial",
                    idMotor: 2,
                    descMotor:"Gasolina",
                    idTipoAgua: 3,
                    descTipoAgua: "Agua Caliente y Fría",
                    marca : "POWERJET",
                    modelo: "C-200 G",
                    presion:"200 Bares, (2,900 psig)",
                    potencia_de_motor:"18 hp, 1740 rpm",
                    peso:"170 Kg",
                    voltaje:"",
                    conexion:"Trifásica",
                    uso:"Industrial",
                    consumo:" Diesel 5 kg/hr, 25 litros",
                    caldera: "A diesel, de doble serpentín",
                    img:"generador-diesel.jpg"
                }
                ];

                $scope.objIteracion = {
                    idTipoEquipoSelect: '100',
                    catEquipos :[{id:100,name:"Todos"},{id:1,name:"Hidrolavadoras"}, {id:2,name:"Motobombas"},{id:3,name:"Aspiradoras"},{id:4,name:"Espumadores"},{id:5,name:"Generadores"}],
                    arrFiltrado: [],
                    cargarArray: function(tipo){
                        var idEquipo =$scope.objIteracion.idTipoEquipoSelect;
    
                        if(idEquipo== 100){
                            this.arrFiltrado = this.Todos();
                        }else if(idEquipo == 1){
                            this.arrFiltrado = this.Hidrolavadoras();
                        }
                        else if(idEquipo == 2){
                            this.arrFiltrado = this.Motobombas();
                        }
                        else if(idEquipo == 3){
                            this.arrFiltrado = this.Aspiradoras();
                        }
                        else if(idEquipo == 4){
                            this.arrFiltrado = this.Espumadores();
                        }
                        else if(idEquipo == 5){
                            this.arrFiltrado = this.Generadores();
                        }
                    },
                    Todos : function(){
                        return $scope.equipos;
                    },
                    Hidrolavadoras : function(){
                        var equiposHidrolavadoras = JSLINQ($scope.equipos).Where(function(item){ return item.id == 1; });
                        return equiposHidrolavadoras.items;

                    },
                     Motobombas : function(){
                        var equiposHidrolavadoras = JSLINQ($scope.equipos).Where(function(item){ return item.id == 2; });
                        return equiposHidrolavadoras.items;

                    },
                    Aspiradoras : function(){
                        var equiposHidrolavadoras = JSLINQ($scope.equipos).Where(function(item){ return item.id == 3; });
                        return equiposHidrolavadoras.items;

                    },
                    Espumadores : function(){
                        var equiposHidrolavadoras = JSLINQ($scope.equipos).Where(function(item){ return item.id == 4; });
                        return equiposHidrolavadoras.items;

                    },
                    Generadores : function(){
                        var equiposHidrolavadoras = JSLINQ($scope.equipos).Where(function(item){ return item.id == 5; });
                        return equiposHidrolavadoras.items;
                    },

                    Iniciar:function () {
                        this.arrFiltrado = this.Todos();
                        this.idTipoEquipoSelect = 100;
                    }
                };
                 $scope.objIteracion.Iniciar();

    }])








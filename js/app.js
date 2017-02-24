angular.module('myApp', ['checklist-model', 'ngRoute', 'ngDialog', 'ngService', 'cCatalogos'])

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

    .controller('EquiposController', ['$scope', 'Modal', 'cEquipos', function ($scope, Modal, cEquipos) {

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
        $scope.catEquipos = cEquipos.tiposEquipos;

        // $scope.equipos = [{
        //     id: 1,
        //     name: "Hidrolavadora industrial de alta presión en agua fría",
        //     descripcion: "Hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., donde se requiera lavado a alta presión con agua fría.",
        //     idSerie: 1,
        //     descSerie: "Industrial",
        //     idMotor: 1,
        //     descMotor: "Electrica",
        //     idTipoAgua: 1,
        //     descTipoAgua: "Agua Fría",
        //     marca: "POWERJET",
        //     modelo: "F-150 Basic",
        //     presion: "150 bares, (2,200 psig)",
        //     potencia_de_motor: "5.5 hp, 1750 rpm",
        //     peso: "48 Kg",
        //     voltaje: "220 V",
        //     conexion: "Trifásica",
        //     uso: "Industrial",
        //     consumo: "",
        //     caldera: null,
        //     img: "hidrolavadoras/f-150.jpg"
        // },
        //     {
        //         id: 1,
        //         name: "Hidrolavadora industrial de alta presión en agua fría",
        //         descripcion: "Esta hidrolavadora es para uso industrial, teniendo mucha potencia, para limpieza en industria química, metalúrgica etc., maquinaria pesada, piezas metálicas, pisos, etc., donde se requiera lavado con mucha presión con agua fría.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: 1,
        //         descMotor: "Electrica",
        //         idTipoAgua: 1,
        //         descTipoAgua: "Agua Fría",
        //         marca: "POWERJET",
        //         modelo: "F-250",
        //         presion: "250 bares, (3,625 psig)",
        //         potencia_de_motor: "10 hp, 7.5 kw",
        //         peso: "115 Kg",
        //         voltaje: "220 o 440 V",
        //         conexion: "Trifásica",
        //         uso: "Industrial",
        //         consumo: "",
        //         caldera: null,
        //         img: "hidrolavadoras/f-250.jpg"
        //     },
        //     {
        //         id: 1,
        //         name: "Hidrolavadora industrial de alta presión en agua fría",
        //         descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: 2,
        //         descMotor: "Electrica",
        //         idTipoAgua: 1,
        //         descTipoAgua: "Agua Fría",
        //         marca: "POWERJET",
        //         modelo: "F-200",
        //         presion: "200 bares, (3,000 psig)",
        //         potencia_de_motor: "7.5 hp, 1750 rpm",
        //         peso: "57 Kg",
        //         voltaje: "220 o 440 V",
        //         conexion: "Trifásica",
        //         uso: "Industrial",
        //         consumo: "",
        //         caldera: null,
        //         img: "hidrolavadoras/f-200.jpg"
        //     },
        //     {
        //         id: 1,
        //         name: "Hidrolavadora industrial de alta presión en agua caliente y fría",
        //         descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: 2,
        //         descMotor: "Electrica",
        //         idTipoAgua: 3,
        //         descTipoAgua: "Agua Caliente y Fría",
        //         marca: "POWERJET",
        //         modelo: "TK-200/19 (Paro total retardado)",
        //         presion: "200 Bares, (2,900 psig)",
        //         potencia_de_motor: "10 hp, 1750 rpm",
        //         peso: "180 Kg",
        //         voltaje: "220 o 440 V",
        //         conexion: "Trifásica",
        //         uso: "Industrial",
        //         consumo: "Diesel 5 kg/hr, 25 litros",
        //         caldera: null,
        //         img: "hidrolavadoras/tk-200-19.jpg"

        //     },
        //     {
        //         id: 1,
        //         name: "Hidrolavadora industrial de alta presión en agua caliente y fría",
        //         descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: 2,
        //         descMotor: "Gasolina",
        //         idTipoAgua: 3,
        //         descTipoAgua: "Agua Caliente y Fría",
        //         marca: "POWERJET",
        //         modelo: "C-200 G",
        //         presion: "200 Bares, (2,900 psig)",
        //         potencia_de_motor: "18 hp, 1740 rpm",
        //         peso: "170 Kg",
        //         voltaje: "",
        //         conexion: "Trifásica",
        //         uso: "Industrial",
        //         consumo: " Diesel 5 kg/hr, 25 litros",
        //         caldera: "A diesel, de doble serpentín",
        //         img: "hidrolavadoras/c-200.jpg"
        //     },
        //     //Motobombas
        //     {
        //         id: 2,
        //         name: "Motobombas WMP20X",
        //         descripcion: "Motobomba para agua salada y líquidos especiales utilizados en agricultura e industria, gracias a su carcasa de termoplástico reforzado.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: null,
        //         descMotor: null,
        //         idTipoAgua: null,
        //         descTipoAgua: null,
        //         marca: "HONDA",
        //         modelo: "19006001",
        //         presion: null,
        //         potencia_de_motor: null,
        //         peso: null,
        //         voltaje: null,
        //         conexion: null,
        //         uso: "Industrial",
        //         consumo: null,
        //         caldera: null,
        //         img: "motobombas/wmp-20-x.jpg"

        //     },
        //     {

        //         id: 2,
        //         name: "Motobomba WB20-XM",
        //         descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: null,
        //         descMotor: null,
        //         idTipoAgua: null,
        //         descTipoAgua: null,
        //         marca: "HONDA",
        //         modelo: "GX 160H1",
        //         presion: null,
        //         potencia_de_motor: null,
        //         peso: null,
        //         voltaje: null,
        //         conexion: null,
        //         uso: "Industrial",
        //         consumo: null,
        //         caldera: null,
        //         img: "motobombas/MB20X.jpg"
        //     },
        //     //Aspiradoras
        //     {
        //         id: 3,
        //         name: "Aspiradora Industrial",
        //         descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: 1,
        //         descMotor: "2 de 1,200 watts c/u, 120 ó 220 V.",
        //         idTipoAgua: null,
        //         descTipoAgua: null,
        //         marca: "POWERJET",
        //         modelo: "Base 429 con expulsión",
        //         presion: null,
        //         potencia_de_motor: "3.2 hp (26 hp peak)",
        //         peso: "22Kg",
        //         voltaje: "120 ó 220 V",
        //         conexion: null,
        //         uso: "Industrial",
        //         consumo: "2 de 1,200 watts c/u, 120 ó 220 V.",
        //         caldera: null,
        //         img: "aspiradoras/base-429.jpg"

        //     },
        //     //Espumadores
        //     {
        //         id: 4,
        //         name: "Espumador Industrial",
        //         descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: null,
        //         descMotor: null,
        //         idTipoAgua: 3,
        //         descTipoAgua: "Agua Caliente y Fría",
        //         marca: "POWERJET",
        //         modelo: "C-200 G",
        //         presion: "200 Bares, (2,900 psig)",
        //         potencia_de_motor: "18 hp, 1740 rpm",
        //         peso: "170 Kg",
        //         voltaje: "",
        //         conexion: "Trifásica",
        //         uso: "Industrial",
        //         consumo: " Diesel 5 kg/hr, 25 litros",
        //         caldera: "A diesel, de doble serpentín",
        //         img: "espumadores/espumador-inoxidable-50-litros.jpg"
        //     },
        //     //Generadores
        //     {
        //         id: 5,
        //         name: "Generador",
        //         descripcion: "Esta hidrolavadora es para uso industrial con bomba de cigüeñal y bielas, para limpieza en industrias, de automóviles, camiones, piezas metálicas, pisos, etc., con paro total y cubierta.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: 2,
        //         descMotor: "Gasolina",
        //         idTipoAgua: 3,
        //         descTipoAgua: "Agua Caliente y Fría",
        //         marca: "POWERJET",
        //         modelo: "TK-200/19 (Paro total retardado)",
        //         presion: "200 Bares, (2,900 psig)",
        //         potencia_de_motor: "10 hp, 1750 rpm",
        //         peso: "180 Kg",
        //         voltaje: "220 o 440 V",
        //         conexion: "Trifásica",
        //         uso: "Industrial",
        //         consumo: "Diesel 5 kg/hr, 25 litros",
        //         caldera: null,
        //         img: "generadores/CALT4500B.jpg"

        //     },
        //     {
        //         id: 5,
        //         name: "Generador Industrial",
        //         descripcion: "Esta hidrolavadora es propia para trabajo de uso rudo, con ayuda del agua caliente es óptima para remover grasa, aceite o mugre muy pegada de maquinaria, camiones, pisos, etc., en donde no cuenten con suministro eléctrico. También se puede producir vapor saturado, para aquellos lugares donde la presión puede dañar la superficie lavada.",
        //         idSerie: 1,
        //         descSerie: "Industrial",
        //         idMotor: null,
        //         descMotor: null,
        //         idTipoAgua: 3,
        //         descTipoAgua: null,
        //         marca: "POWERJET",
        //         modelo: "C-200 G",
        //         presion: "200 Bares, (2,900 psig)",
        //         potencia_de_motor: "18 hp, 1740 rpm",
        //         peso: "170 Kg",
        //         voltaje: "",
        //         conexion: "Trifásica",
        //         uso: "Industrial",
        //         consumo: " Diesel 5 kg/hr, 25 litros",
        //         caldera: "A diesel, de doble serpentín",
        //         img: "generadores/generador.jpg"
        //     }
        // ];

        $scope.objIteracion = {
            catEquipos: cEquipos.tiposEquipos,
            idTipoEquipoSelect: '100',
            arrFiltrado: [],
            gridList: 'gallery',
            arrFiltrosCategoria: [],
            selected: {filtros: []},
            cargarArray: function (tipo) {
                var idEquipo = tipo;

                if (idEquipo == 100) {
                    this.arrFiltrado = this.Todos();
                    this.arrFiltrosCategoria = [];
                } else if (idEquipo == 1) {
                    this.arrFiltrado = this.Hidrolavadoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(1);
                    this.selected.filtros = [];
                }
                else if (idEquipo == 2) {
                    this.arrFiltrado = this.Motobombas();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(2);
                    this.selected.filtros = [];
                }
                else if (idEquipo == 3) {
                    this.arrFiltrado = this.Aspiradoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(3);
                    this.selected.filtros = [];
                }
                else if (idEquipo == 4) {
                    this.arrFiltrado = this.Espumadores();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(4);
                    this.selected.filtros = [];
                }
                else if (idEquipo == 5) {
                    this.arrFiltrado = this.Generadores();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(5);
                    this.selected.filtros = [];
                }
                else if (idEquipo == 6) {
                    this.arrFiltrado = this.TorresIluminacion();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(6);
                    this.selected.filtros = [];
                }
                else if (idEquipo == 7) {
                    this.arrFiltrado = this.Podadoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(7);
                    this.selected.filtros = [];
                }
                else if (idEquipo == 8) {
                    this.arrFiltrado = this.Desbrosadoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(8);
                    this.selected.filtros = [];
                }
            },
            GetFiltrosCategorias: function (posicion) {
                return this.catEquipos[posicion].filtros;
            },
            Todos: function () {
                var arrayTodos = [];
                arrayTodos = arrayTodos.concat(cEquipos.hidrolavadoras);
                arrayTodos = arrayTodos.concat(cEquipos.motobombas);
                arrayTodos = arrayTodos.concat(cEquipos.aspiradoras);
                arrayTodos = arrayTodos.concat(cEquipos.espumadores);
                arrayTodos = arrayTodos.concat(cEquipos.generadores);

                return arrayTodos;
            },
            Hidrolavadoras: function () {
                return cEquipos.hidrolavadoras;
            },
            Motobombas: function () {
                 return cEquipos.motobombas;
            },
            Aspiradoras: function () {
                return cEquipos.aspiradoras;
            },
            Espumadores: function () {
                return cEquipos.espumadores;
            },
            Generadores: function () {
                // var equiposHidrolavadoras = JSLINQ($scope.equipos).Where(function (item) {
                //     return item.id == 5;
                // });
                // return equiposHidrolavadoras.items;
                return cEquipos.generadores;
            },
            TorresIluminacion : function(){
                return cEquipos.torresIluminacion;
            },
            Podadoras: function(){
                return cEquipos.podadoras;
            },
            Desbrosadoras:function(){
                return cEquipos.desbrosadoras;
            },
            Iniciar: function () {
                this.arrFiltrado = this.Todos();
                this.idTipoEquipoSelect = 100;
            },
            CambiarGridList: function (tipo) {
                if (tipo == 'lista') {
                    $scope.objIteracion.gridList = 'lista';
                }
                if (tipo == 'grid') {
                    $scope.objIteracion.gridList = 'gallery';
                }
            },
            OpenModalDetalle: function (producto) {
                console.info(producto);
                Modal.notificacion({info: producto, path: 'view/modal-detalle-equipo.html'});
            },
            OpenModalCotizacion: function (producto) {
                console.info(producto);
                Modal.notificacion({info: producto, path: 'view/modal-cotizacion-equipo.html'});
            },
            CerrarModal: function () {
                Modal.cerrarModal();
            },
            FiltrarEquipos: function (tipo) {
                //idSerie
                //idMotor
                console.log($scope.objIteracion.selected.filtros);

                var arrSeleccionados = $scope.objIteracion.selected.filtros;
                if(tipo == 1){
                    if(arrSeleccionados.length == 0){
                    this.arrFiltrado = this.Hidrolavadoras();
                    }else{
                        var arrFiltrosEquipos= [];
                        arrSeleccionados.forEach(function (filtro) {
                            if(filtro.idTipo == 1 || filtro.idTipo == 2 || filtro.idTipo == 2){
                                var filt = JSLINQ(cEquipos.hidrolavadoras).
                                    Where(function (item) {
                                        return item.idMotor == filtro.idTipo;
                                    });
                                arrFiltrosEquipos = arrFiltrosEquipos.concat(filt.items);
                            }
                            if(filtro.idTipo == 4 || filtro.idTipo == 5){
                                var filt = JSLINQ(cEquipos.hidrolavadoras).
                                    Where(function (item) {
                                        return item.idSerie == filtro.idTipo;
                                    });
                                arrFiltrosEquipos = arrFiltrosEquipos.concat(filt.items);
                            }
                            if(filtro.idTipo == 6 || filtro.idTipo == 7 || filtro.idTipo == 8){
                                console.log(filtro.idTipo);
                                var filt = JSLINQ(cEquipos.hidrolavadoras).
                                    Where(function (item) {
                                        return item.idTipoAgua == filtro.idTipo;
                                    });
                                arrFiltrosEquipos = arrFiltrosEquipos.concat(filt.items);
                            }
                        });
                    this.arrFiltrado = arrFiltrosEquipos;
                    }
                }

            }
        };
        $scope.objIteracion.Iniciar();
    }])

    .controller('ctrlModalCotizacion', ['$scope', 'Modal', function ($scope, Modal) {
        $scope.objIteracion = {
            CerrarModal: function () {
                Modal.cerrarModal();
            }
        };
    }])








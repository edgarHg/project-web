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

        $scope.objIteracion = {
            catEquipos: cEquipos.tiposEquipos,
            arrFiltrado: [],
            gridList: 'gallery',
            arrFiltrosCategoria: [],
            selected: {filtros: []},
            cargarArray: function (tipo) {
                var idEquipo = tipo;
                this.paginacion.paginaActual = 0;
                if (idEquipo == 100) {
                    this.arrFiltrado = this.Todos();
                    this.arrFiltrosCategoria = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                } else if (idEquipo == 1) {
                    this.arrFiltrado = this.Hidrolavadoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(1);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                }
                else if (idEquipo == 2) {
                    this.arrFiltrado = this.Motobombas();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(2);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                }
                else if (idEquipo == 3) {
                    this.arrFiltrado = this.Aspiradoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(3);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                }
                else if (idEquipo == 4) {
                    this.arrFiltrado = this.Espumadores();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(4);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                }
                else if (idEquipo == 5) {
                    this.arrFiltrado = this.Generadores();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(5);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                }
                else if (idEquipo == 6) {
                    this.arrFiltrado = this.TorresIluminacion();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(6);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                }
                else if (idEquipo == 7) {
                    this.arrFiltrado = this.Podadoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(7);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                }
                else if (idEquipo == 8) {
                    this.arrFiltrado = this.Desbrosadoras();
                    this.arrFiltrosCategoria = this.GetFiltrosCategorias(8);
                    this.selected.filtros = [];
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
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
                this.paginacion.ConstruirPaginado(this.arrFiltrado);
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
                Modal.notificacion({info: producto, path: 'view/modal-detalle-equipo.html'});
            },
            OpenModalCotizacion: function (producto) {
                Modal.notificacion({info: producto, path: 'view/modal-cotizacion-equipo.html'});
            },
            CerrarModal: function () {
                Modal.cerrarModal();
            },
            FiltrarEquipos: function (tipo) {
                var arrSeleccionados = $scope.objIteracion.selected.filtros;
                this.arrFiltrado= [];
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
                                var filt = JSLINQ(cEquipos.hidrolavadoras).
                                    Where(function (item) {
                                        return item.idTipoAgua == filtro.idTipo;
                                    });
                                arrFiltrosEquipos = arrFiltrosEquipos.concat(filt.items);
                            }
                        });
                    this.arrFiltrado = arrFiltrosEquipos;
                    this.paginacion.ConstruirPaginado(this.arrFiltrado);
                    }
                }
            },
            paginacion: {
                paginasBusqueda: null,
                paginaActual: 0,
                numPaginas: null,
                paginaSiguiente: function () {
                    if ($scope.objIteracion.paginacion.paginaActual + 1 < $scope.objIteracion.paginacion.numPaginas)
                        $scope.objIteracion.paginacion.paginaActual++;
                },
                paginaAnterior: function () {
                    if ($scope.objIteracion.paginacion.paginaActual > 0)
                        $scope.objIteracion.paginacion.paginaActual--;
                },
                SeriePaginacion: function (min, max, step) {
                    step = step || 1;
                    var arr = [];
                    for (var i = min; i <= max; i += step)
                        arr.push(i);
                    return arr;
                },
                paginaSeleccionada: function (numberPagina) {
                    $scope.objIteracion.paginacion.paginaActual = numberPagina - 1;
                },
                ConstruirPaginado : function (json) {
                    var arreglo = [];
                    this.paginasBusqueda = [];
                    this.instEncontradas = json;

                    this.numPaginas = Math.round((this.instEncontradas.length - 1) / 6 - .6) + 1;

                    for (var i = 0; i < this.instEncontradas.length; i++) {
                        arreglo.push(this.instEncontradas[i]);
                        if ((i + 1) % 6 === 0 || i ===  this.instEncontradas.length - 1) {
                            this.paginasBusqueda.push(arreglo);
                            arreglo = [];
                        }
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








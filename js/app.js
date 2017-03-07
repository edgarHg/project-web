angular.module('myApp', ['checklist-model', 'ngRoute', 'ngDialog', 'ngService', 'cCatalogos','filtros','directivas','ngResource','mContactanos'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/home.html',
            })
            .when('/equipos/:tipo?/:filtro?/:descripcion?', {
                templateUrl: 'view/equipos.html',
                controller: 'ctrlEquipos'
            })
            .when('/refacciones', {
                templateUrl: 'view/refacciones.html',
                controller: 'ctrlRefacciones'
            })            
            .when('/contacto', {
                templateUrl: 'view/contacto.html',
                controller: 'ctrlContactanos'
            })
            .otherwise({
                redirectTo: '/'
            });

    })
    .controller('ctrlMenu', ['$scope',function ($scope) {
        $scope.objMenu = {
            menuSeleccionado: 'home',
            classfooter :'normal-footer',
            ItemSeleccionado : function(idMenu){
                console.log(idMenu);
                if(idMenu == 'home'){
                    $scope.objMenu.menuSeleccionado = 'home';
                    this.CambiarFooter('normal-footer');
                }
                if(idMenu == 'equipos'){
                    $scope.objMenu.menuSeleccionado = 'equipos';
                }
                if(idMenu == 'suministro'){
                    $scope.objMenu.menuSeleccionado = 'suministro';
                }
                if(idMenu == 'refacciones'){
                    $scope.objMenu.menuSeleccionado = 'refacciones';
                }
                if(idMenu == 'quienes&somos'){
                    $scope.objMenu.menuSeleccionado = 'quienes&somos';
                }
                if(idMenu == 'contacto'){
                    $scope.objMenu.menuSeleccionado = 'contacto';
                }
            },
            CambiarFooter:function(tipo){
                $scope.objMenu.classfooter = tipo;
            }
        };
    }])

    .controller('ctrlEquipos', ['$scope', 'Modal', 'cEquipos', '$routeParams',function ($scope, Modal, cEquipos,$routeParams) {
            $scope.objMenu.ItemSeleccionado('equipos');
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
            idCatEquipos: 100,
            idFiltroEquipo :1,
            catEquipos: cEquipos.tiposEquipos,
            arrFiltrado: [],
            gridList: 'gallery',
            arrFiltrosCategoria: [],
            selected: {filtros: []},
            categoriaSeleccionada : 100,
            cargarArray: function (tipo) {
                this.categoriaSeleccionada = tipo;

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
                    var tipo = $routeParams.tipo;
                    var tipoFiltro = $routeParams.filtro;
                    var descripcion = $routeParams.descripcion;

                    this.categoriaSeleccionada = tipo;
                    if(tipo == 1){
                           this.FiltrarHidrolavadoras({tipo:tipo, idTipo:tipoFiltro,name:descripcion});
                    }else{
                        this.arrFiltrado = this.Todos();
                        this.paginacion.ConstruirPaginado(this.arrFiltrado);
                        this.categoriaSeleccionada = 100;
                    }
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
            FiltrarHidrolavadoras: function(tipo){

                $scope.objIteracion.selected.filtros = [{id:parseInt(tipo.tipo), idTipo:parseInt(tipo.idTipo),name:tipo.name}];
                var filt = "";
                if(tipo.idTipo == 1 || tipo.idTipo == 2 || tipo.idTipo == 3){
                    filt = JSLINQ(cEquipos.hidrolavadoras).
                        Where(function (item) {
                            return item.idMotor == tipo.idTipo;
                        });
                }
                if(tipo.idTipo == 4 || tipo.idTipo == 5){
                    filt = JSLINQ(cEquipos.hidrolavadoras).
                        Where(function (item) {
                            return item.idSerie == tipo.idTipo;
                        });
                }
                if(tipo.idTipo == 6 || tipo.idTipo == 7 || tipo.idTipo == 8){
                    filt = JSLINQ(cEquipos.hidrolavadoras).
                        Where(function (item) {
                            return item.idTipoAgua == tipo.idTipo;
                        });
                }
                this.arrFiltrado = filt.items;
                this.paginacion.ConstruirPaginado(this.arrFiltrado);
                this.arrFiltrosCategoria = this.GetFiltrosCategorias(1);

            },
            FiltrarEquipos: function (tipo) {
                var arrSeleccionados = $scope.objIteracion.selected.filtros;
                console.log(arrSeleccionados);
                this.arrFiltrado= [];
                if(tipo == 1){
                    if(arrSeleccionados.length == 0){
                        this.arrFiltrado = this.Hidrolavadoras();
                        this.paginacion.ConstruirPaginado(this.arrFiltrado);
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

    .controller('ctrlRefacciones', ['$scope', 'Modal', 'cEquipos', '$routeParams',function ($scope, Modal, cEquipos,$routeParams) {
        $scope.objMenu.ItemSeleccionado('refacciones');
    }])

    .controller('ctrlContacto', ['$scope', function ($scope) {
            $scope.objMenu.ItemSeleccionado('contacto');
            $scope.objMenu.CambiarFooter('ajuste-footer');
            console.log("Contacto");
    }]);











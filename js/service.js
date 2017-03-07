 
angular.module('ngService',[])
 .factory('Modal', ['ngDialog', '$location', '$rootScope', function (ngDialog, $location, $rootScope) {
        return {
            notificacion: function (params) {
                $rootScope.producto = params.info;
                ngDialog.open({
                    template: params.path,
                    className: 'ngdialog-theme-plain',
                    plain: false,
                    closeByDocument: false
                });
            },
            cerrarModal: function () {
                ngDialog.close();

            },
        };
    }])

    .factory('ServiciosHTTP', ['$resource', '$http', function ($resource, $http) {
            return {
                post: function (datos, servicio) {
                     $http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
                     //
                    var urlApi = 'https://api-rest-sediap.herokuapp.com',
                            resource = $resource(urlApi + servicio),
                            resultado = resource.save({}, datos);
                    return resultado;
                }
            }
        }])
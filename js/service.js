 
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

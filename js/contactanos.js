angular.module('mContactanos',[])

.controller('ctrlContactanos', ['$scope', 'ServiciosHTTP', function($scope,ServiciosHTTP){
	$scope.contactanos = {
		btnActivo: true,
		mdlContactanos : {},
		BtnEnviarCorreo : function(){
			console.log("new");
			this.btnActivo = false;
			this.EnviarCorreo();
		},
		EnviarCorreo : function(){
			var parametros = this.mdlContactanos;

			ServiciosHTTP.post(parametros, "/api/send-correo").$promise.then(function (data) {
                    data = JSON.parse(data);
                    console.log(data);
                    if (data.codE == 0) {
                    	$scope.contactanos.btnActivo = true;
                    	console.log(data);
                    } else {
                    	$scope.contactanos.btnActivo = true;
                      console.log(data);
                    }
                },
                function (errResponse) {	
                	$scope.contactanos.btnActivo = true;
                });
		}
	};	
}]);
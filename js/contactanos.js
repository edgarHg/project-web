angular.module('mContactanos',[])

.controller('ctrlContactanos', ['$scope', 'ServiciosHTTP','$routeParams','Modal', function($scope, ServiciosHTTP, $routeParams, Modal){
	$scope.contactanos = {
		btnActivo: true,
		mdlContactanos : {},
		IniciarVariable : function(){
			if($routeParams.name != undefined && $routeParams.marca != undefined && $routeParams.modelo != undefined){
				Modal.notificacion({info: "", path: 'view/modal-informativo-cotizacion.html'});
				this.mdlContactanos.asunto = $routeParams.asunto;
				this.mdlContactanos.mensaje = $routeParams.name +'\n' + $routeParams.marca + ' - '+ $routeParams.modelo;
				console.log(this.mdlContactanos);
			}else{
				this.mdlContactanos.asunto = "";
				this.mdlContactanos.mensaje = "";
			}

		},
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
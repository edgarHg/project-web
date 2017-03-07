angular.module('mContactanos',[])

.controller('ctrlContactanos', ['$scope', 'ServiciosHTTP', function($scope,ServiciosHTTP){
	$scope.contactanos = {
		mdlContactanos : {},
		BtnEnviarCorreo : function(){
			console.log("new");
			this.EnviarCorreo();
		},
		EnviarCorreo : function(){
			var parametros = this.mdlContactanos;

			ServiciosHTTP.post(parametros, "/api/send-correo").$promise.then(function (data) {
                    data = JSON.parse(data);
                    console.log(data);
                    if (data.codE == 0) {
                    	console.log(data);
                    } else {
                      console.log(data);
                    }
                },
                function (errResponse) {

                });
		}
	};	
}]);
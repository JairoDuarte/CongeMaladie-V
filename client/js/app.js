var app = angular.module("myApp",[]);

app.controller("agentList",function($scope,$http){
	$http.get("http://192.168.1.33:3000/api/agents")
		.then(function(response){
			$scope.agents =response.data;	
		});
	//$scope.agents=[{"matricule":"ID83948","nom":"Mohamed El hosayny"},{"matricule":"AO3489","nom":"Jairo Duart"},{"matricule":"I45324","nom":"Dermoumi Said"},{"matricule":"B432442","nom":"Abdeneby Brahim"}];
});

app.controller("agentOperationSup",function($scope){
        $http.get("http://192.168.1.33:3000/api/congemcds")
		.then(function(response){
			$scope.congemcds =response.data.data;	
		});
});

app.controller("agentOperationRh",function($scope){
        $scope.agents=[{"matricule":"ID83948","nom":"Mohamed El hosayny"},{"matricule":"AO3489","nom":"Jairo Duart"},{"matricule":"I45324","nom":"Dermoumi Said"},{"matricule":"B432442","nom":"Abdeneby Brahim"}];
});

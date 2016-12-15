var app = angular.module("myApp",[]);

app.controller("agentList",function($scope,$http){
	$scope.agents=[{"matricule":"ID83948","nom":"Mohamed El hosayny"},{"matricule":"AO3489","nom":"Jairo Duart"},{"matricule":"I45324","nom":"Dermoumi Said"},{"matricule":"B432442","nom":"Abdeneby Brahim"}];
});

app.controller("agentOperationSup",function($scope){
        $scope.agents=[{"matricule":"ID83948","nom":"Mohamed El hosayny"},{"matricule":"AO3489","nom":"Jairo Duart"},{"matricule":"I45324","nom":"Dermoumi Said"},{"matricule":"B432442","nom":"Abdeneby Brahim"}];
});

app.controller("agentOperationRh",function($scope){
        $scope.agent s=[{"matricule":"ID83948","nom":"Mohamed El hosayny"},{"matricule":"AO3489","nom":"Jairo Duart"},{"matricule":"I45324","nom":"Dermoumi Said"},{"matricule":"B432442","nom":"Abdeneby Brahim"}];
});

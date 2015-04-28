var app = angular.module('app',[]);
app.controller('testeCtlr', function($scope,$http,$window) {
    $scope.atividades=[];
    $http.jsonp("https://intense-tundra-2842.herokuapp.com/api/atividades/?format=jsonp&callback=JSON_CALLBACK")
        .success(function (response) {
            $scope.atividades = response;
            $window.localStorage.setItem('ativ',JSON.stringify(response));
        })
        .error(function () {
            console.log("erro");
            $scope.atividades = JSON.parse($window.localStorage.getItem('ativ'));
        });
});

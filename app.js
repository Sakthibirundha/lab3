var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$timeout) {
    $scope.names = [
	"Physics ," ,
	"Biology ,",
	"Maths ,",
	"General apti"
	];
	


	
	
		
	
$scope.myHeader = "Welcome";
  $timeout(function () {
      $scope.myHeader = "Ready to crack the quiz??";
  }, 2000);
   $scope.disableClick = function (isDisabled) {
            $scope.isDisabled = !isDisabled;
            }

$scope.kp2=100;

    $scope.show=false;

$scope.users = {
                user: ""
            };
            $scope.login = function () {
                $scope.isShow = true;
                $scope.name = $scope.users.user;
                $scope.users = {
                    user: ""
                }
            };
			


$scope.myObj = {
    "color" : "white",
    "background-color" : "coral",
    "font-size" : "60px",
    "padding" : "50px"
  }

$scope.timeofday='we can';
$scope.greet='we will';
 
});

app.controller('yrctrl',function($scope){
  $scope.greet='we do';
});

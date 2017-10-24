//Option 1
/*customerApp.controller('CustomersController',function($scope) {

    $scope.sortBy='name';
    $scope.reverse=false;

    $scope.customers = [{ joinedOn: '2000-12-01', name: 'Issak', city: 'Vasco', orderTotal: 9.9965 },
    { joinedOn: '2010-04-10', name: 'Gautam', city: 'Margao', orderTotal: 8.7723 },
    { joinedOn: '2016-10-26', name: 'Varada', city: 'Pilar', orderTotal: 9.9111 },
    { joinedOn: '2017-08-17', name: 'Namita', city: 'Porvorim', orderTotal: 6.2323 }];

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };

  });*/


  //Option 2
  /*(function (){
    angular.module('customersApp').controller('CustomersController',function($scope) {
        
            $scope.sortBy='name';
            $scope.reverse=false;
        
            $scope.customers = [{ joinedOn: '2000-12-01', name: 'Issak', city: 'Vasco', orderTotal: 9.9965 },
            { joinedOn: '2010-04-10', name: 'Gautam', city: 'Margao', orderTotal: 8.7723 },
            { joinedOn: '2016-10-26', name: 'Varada', city: 'Pilar', orderTotal: 9.9111 },
            { joinedOn: '2017-08-17', name: 'Namita', city: 'Porvorim', orderTotal: 6.2323 }];
        
            $scope.doSort = function (propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            };
        
          });
  }());*/


  //Option 3

  (function (){

    var CustomersController=function($scope,customersService,appSettings) {
        
            $scope.sortBy='name';
            $scope.reverse=false;
            $scope.customers=[];
            $scope.appSettings=appSettings;

            function init(){

              customersService.getCustomers()
                .success(function(customers){
                  console.log(customers);
                  $scope.customers=customers;
                })
                .error(function(data,status){
                  //handle errors
                });
            }

            init();
        
            
            $scope.doSort = function (propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            };
        
          };

          CustomersController.$inject=['$scope','customersService','appSettings'];

    angular.module('customersApp').controller('CustomersController',CustomersController);
  }());


  

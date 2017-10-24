(function () {

  var OrdersController = function ($scope, $stateParams,$log,customersService,customersOrderDetailService) {
    var customerId = $stateParams.customerId;
     $scope.customer = [];
     $scope.orders=[];

    console.log("customersService :", customersService);

    
    function getOrders() {
      customersService.getCustomers()
      .success(function (customer) {
        console.log(customer);
          $scope.customer = customer;

          $scope.orders=customersOrderDetailService.findBySpecField($scope.customer,'cid',customerId, 'orders' );
          $scope.name=customersOrderDetailService.findBySpecField($scope.customer,'cid',customerId, 'name' );
          console.log($scope.orders);
         
        //$scope.id=customer;

      })
      .error(function (data, status) {
        $log.log(data.error +' '+status);

      });


    }

    getOrders();


  };

  OrdersController.$inject = ['$scope', '$stateParams','$log','customersService','customersOrderDetailService'];

  angular.module('customersApp').controller('OrdersController', OrdersController);
}());
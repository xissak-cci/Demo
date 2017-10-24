(function(){
    var customersService=function($http,customersOrderDetailService){

               
      
        this.getCustomers=function(){
          console.log($http.get('app/app-content/json/customers.json'));
          return $http.get('app/app-content/json/customers.json');
          
        };

        // this.getCustomer=function(customerID){
        //   var customer=[];
        //   var orders=[];
        //   customer=$http.get('app/app-content/json/customers.json');
        //   return customer;
        // };
        
    };

    customersService.$inject=['$http','customersOrderDetailService'];

    angular.module('customersApp').service('customersService',customersService);

}());
// (function () {
//     var customerApp = angular.module('customersApp', ['ngRoute']);


//     // customerApp.config(function ($routeProvider) {

//     //     $routeProvider
//     //         .when('/', {

//     //             controller: 'CustomersController',
//     //             templateUrl: 'app/views/customers.html'
//     //         })
//     //         .when('/orders/:customerId', {

//     //             controller: 'OrdersController',
//     //             templateUrl: 'app/views/orders.html'
//     //         })
//     //         .otherwise({ redirectTo: '/' });

//     // });
// }()); 



(function () {
    angular.module('customersApp', [
        'ui.router',                    // Routing 
        //'ui.bootstrap',                 // Ui Bootstrap  
    ])
})();
function config($stateProvider, $urlRouterProvider) {

    // Configure Idle settings
    //IdleProvider.idle(5); // in seconds
    //IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('customers', {
            url: "/",
            controller: 'CustomersController',
            templateUrl: 'app/views/customers.html'
        })
        .state('orders', {
            url: "/orders/:customerId",
            controller: 'OrdersController',
            templateUrl: 'app/views/orders.html',
        })


}
angular
    .module('customersApp')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
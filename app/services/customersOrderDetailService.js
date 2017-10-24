(function(){

    
    var customersOrderDetailService=function(){
                       
        // this.getCustomerById=function(arr,id){
      
        //     for (var i = 0, len = arr.length; i < len; i++) {
        //         if (arr[i].id === id) {
        //             return arr[i];  
        //         }
        //     }
        // };

        this.findBySpecField=function(data, reqField, value, resField) {
            var container = data;
            for (var i = 0; i < container.length; i++) {
                if (container[i][reqField] == value) {
                    return(container[i][resField]);
                }
            }
            return '';
        };
        
    };
 

    angular.module('customersApp').service('customersOrderDetailService',customersOrderDetailService);

}());
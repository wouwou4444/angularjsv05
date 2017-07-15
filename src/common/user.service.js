(function() {
    "use strict";

    angular.module("common")
    .service("UserService", UserService);

    UserService.$inject = [];
    function UserService() {
        var service = this;
        

 /*       service.user = {
            "first_name":"",
            "last_name": "",
            "email":"",
            "preference": ""
        }*/
        service.SetUser = function (user) {

            service.user = user;
        };

        service.getCurrentUser = function (){
            return service.user;
        }
        
    };
})();

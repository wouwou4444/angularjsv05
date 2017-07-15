(function () {
    "use strict";
    
    angular.module("common")
    .controller("UserSignUpController", UserSignUpController);

    UserSignUpController.$inject = ["UserService", "MenuService"];

    function UserSignUpController (UserService, MenuService) {
        var reg = this;

        reg.user = {};

        reg.user.ismenu = true;
        reg.user.saved = false;

        reg.submit = function () {
            console.log("UserSignUpController user: ", reg.user);
            var promise = MenuService.getMenuItem(reg.user.preference);

            promise.then(function (response){
                reg.user.favorite = response;
                console.log("Menu Item details: ", reg.user.favorite);
                reg.user.ismenu = true;
                reg.user.saved = true;
                return UserService.SetUser(reg.user);
            })
            .catch(function (error) {
                console.log("Something went wrong", error.message);
                reg.user.ismenu = false;
            })


            
        }


    };
})
();
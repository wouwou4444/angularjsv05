(function (){
    "use strict";

    angular.module("common")
    .controller("MyInfoController",MyInfoController);

    MyInfoController.$inject = ["currentUser"];

    function MyInfoController(currentUser) {
        var myinfoCtrl = this;

        console.log("currentUser in controller: ", currentUser);
        myinfoCtrl.currentUser = currentUser;

    };
})()
(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      console.log("getCategories", response.data);
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log("getMenuItems", response.data);
      return response.data;
    });
  };

    service.getMenuItem = function (short_name) {
    console.log("url: ", ApiPath + '/menu_items/'+ short_name + '.json')
    return $http.get(ApiPath + '/menu_items/'+ short_name + '.json').then(function (response) {
      console.log('Test')
      console.log("Response data in MenuService.getMenuItem: ", response.data)

      return response.data;
    });
  };
}



})();

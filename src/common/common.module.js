(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://wouwou4444-angularjsv05.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

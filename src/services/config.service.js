angular.module('app').factory('ConfigService', [function() {

    var service = {};

    // service.apiBase = 'http://localhost:8001/';
    service.apiBase = 'https://quiz-api-6se.qaalabs.com/';

    return service;
}]);

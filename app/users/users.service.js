(function() {
  'use strict';

  angular.module('app')
    .service('userService', userService);

  userService.$inject = ['$http', '$q'];

  /**
  * @name userService
  * @desc Gets the Recent Top 100 users
  * @param {http} HTTP service for AJAX requests
  * @param {q} Service to handle promises
  * @returns {json}response.data list of users or error message
  */  
  function userService($http, $q) {
    var self = this;

    self.getRecentTopUsers = getRecentTopUsers;
    self.getAllTimeTopUsers = getAllTimeTopUsers;

    /**
    * @name getRecentTopUsers
    * @desc Gets the Recent Top 100 users
    * @param {None} 
    * @returns {json}response.data list of users or error message
    */
    function getRecentTopUsers() {
      return $http
        .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(function(response) {
          return response.data;
        }, function(error) {
          return $q.reject(error);
        });
    }

    /**
     * @name getAllTimeTopUsers
     * @desc Gets the All-time Top 100 users 
     * @param {None} 
     * @returns {json}response.data list of users or error message
     */
      function getAllTimeTopUsers() {
      return $http
        .get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(function(response) {
          return response.data;
        }, function(error) {
          return $q.reject(error);
        });
    }
  }
})();
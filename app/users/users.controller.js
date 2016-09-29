(function() {
  'use strict';

  angular
    .module('app')
    .controller('userController', userController);

  userController.$inject = ['userService'];

 /**
 * @name userController
 * @desc Controller implementation for user 
 * @param {userService} Service dependency for the controller
 * @returns {null}
 */ 
  function userController(userService) {
    var userVm = this;
    
    userVm.sorter = {
      by: 'recent',
      reverse: true
    };

    userVm.toggleSort = toggleSort;
    userVm.getRecentTopUsers = getRecentTopUsers;
    userVm.getAllTimeTopUsers = getAllTimeTopUsers;

    init();

  /**
   * @name init
   * @desc Initialize the user list when the page loads for the first time
   * @param {null} 
   * @returns {null}
   */  
    function init() {
      userService
        .getRecentTopUsers()
        .then(function(data) {
          userVm.users = data;
        }, function(error) {
          console.log(error);
        })
    }

  /**
   * @name getRecentTopUsers
   * @desc Gets the Recent Top 100 users and reverse the sort order
   * @param {String} prop Field to sortby in the table
   * @returns {null}
   */
    function getRecentTopUsers(prop){
      userService
        .getRecentTopUsers()
        .then(function(data) {
          userVm.users = data;
        }, function(error) {
          console.log(error);
        })
        toggleSort(prop);
    }

  /**
   * @name getAllTimeTopUsers
   * @desc Gets the All-time Top 100 users and reverse the sort order
   * @param {String} prop Field to sortby in the table
   * @returns {null}
   */
    function getAllTimeTopUsers(prop){
      userService
        .getAllTimeTopUsers()
        .then(function(data) {
          userVm.users = data;
        }, function(error) {
          console.log(error);
        })
        toggleSort(prop);
    }

  /**
   * @name toggleSort
   * @desc Reverses/toggles the current sort order
   * @param {String} prop Field to sortby in the table
   * @returns {null}
   */
    function toggleSort(prop) {
      userVm.sorter.by = prop;
      userVm.sorter.reverse = !userVm.sorter.reverse;
    }

  }
})();
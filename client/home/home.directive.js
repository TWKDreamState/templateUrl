/**
 * Created by Mr Rose on 05/04/2016.
 */
'use strict';

angular.module('newapp')
    .directive('homeScreen', homeScreen);

function homeScreen() {
    var directive = {
        restrict: 'AE',
        templateUrl: 'client/home/home.view.html',
        controllerAs: 'homeScreen',
        controller: homeScreenController
    };

    return directive;
}

homeScreenController.$inject = ['$scope', '$reactive', '$state'];

function homeScreenController($scope, $reactive, $state, SweetAlert) {
    $reactive(this).attach($scope);
}
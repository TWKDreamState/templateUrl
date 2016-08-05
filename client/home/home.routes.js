'use strict';

angular.module('newapp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-screen></home-screen>',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                        ]);
                    }
                }
            });
    });
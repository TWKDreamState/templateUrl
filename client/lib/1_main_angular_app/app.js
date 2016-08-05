import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularMeteorAuth from 'angular-meteor-auth';
import oclazyload from 'oclazyload';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';


angular.module('newapp', [
    angularMeteor,
    angularMeteorAuth,
    uiBootstrap,
    uiRouter,
    oclazyload
]);

onReady = function () {
    angular.bootstrap(document, ['newapp'], {strictDi: true});
};

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}
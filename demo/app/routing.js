'use strict';

angular.module('demoApp')
    .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        // ------------------------------------------------------------------------------------------------
        // HOMEPAGE - Init the current value
        // ------------------------------------------------------------------------------------------------
        .state('default', {
            url : '/',
            controller : 'homepageCtrl',
            templateUrl : "pages/_homepage/homepageView.html"
        })

        // ------------------------------------------------------------------------------------------------
        // DEMO EDITOR Component
        // ------------------------------------------------------------------------------------------------
        .state('jsonEditor', {
            url : '/json-editor',
            controller : 'demoEditorCtrl',
            templateUrl : "pages/demoEditor/demoEditorView.html"
        })

        .state('myForm', {
            url : '/my-form',
            controller : 'demoFormCtrl',
            templateUrl : "pages/demoform/demoFormView.html"
        })

        .state('myForm2', {
            url : '/my-form-classique',
            controller : 'demoUserCtrl',
            templateUrl : "pages/demoUser/demoUserView.html"
        })


    ;



    
    $urlRouterProvider.otherwise('/');
});
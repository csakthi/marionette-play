require.config({

    baseUrl: "/",

    paths: {
        backbone: 'libs/backbone.marionette/backbone',
        underscore: 'libs/backbone.marionette/underscore',
        jquery: 'libs/backbone.marionette/jquery',
        'backbone.eventbinder': 'libs/backbone.marionette/backbone.eventbinder',
        marionette: 'libs/backbone.marionette/backbone.marionette',
        'backbone.wreqr': 'libs/backbone.marionette/backbone.wreqr',
        'backbone.babysitter': 'libs/backbone.marionette/backbone.babysitter'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
});

require([
    'js/app','marionette'
], function (App, Marionette) {
    App.initialize();
    //window.Marionette = Marionette;
});
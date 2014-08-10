/**
 * Created by sakthi on 8/7/14.
 */
// Filename: app.js
define([
    'marionette'
], function (Marionette) {

    var initialize = function () {
        console.log("Initializing the application....");

        var ContactManager = new Marionette.Application();
        //console.log(ContactManager);

        ContactManager.addRegions({
            mainRegion: "#main-region"
        });

        ContactManager.StaticView = Marionette.ItemView.extend({
            template: "#static-template"
        });

        ContactManager.addInitializer(function(options) {
            console.log("ContactManager has started!");
            var staticView = new ContactManager.StaticView();
            ContactManager.mainRegion.show(staticView);
            console.log(staticView);
        });

        ContactManager.start();
        console.log("Application is started. Have a fun!");
    };

    //creates new javascript object with initialize a member
    return {initialize: initialize};

});

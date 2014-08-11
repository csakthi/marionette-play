/**
 * Created by sakthi on 8/7/14.
 */
// Filename: app.js
define([
    'marionette',
    'backbone',
    'models/Contact',
    'views/ContactView',
    'views/ContactCollectionView'
], function (Marionette, Backbone, Contact, ContactView, ContactCollectionView) {

    var initialize = function () {
        console.log("Initializing the application....");

        var ContactManager = new Marionette.Application();
        //console.log(ContactManager);

        ContactManager.addRegions({
            mainRegion: "#main-region"
        });

        var contactsCollectionView = new ContactCollectionView();

        ContactManager.addInitializer(function (options) {
            //Backbone.History.start();
            console.log("ContactManager has started!");

            var alice = new Contact({
                firstName: "Alice",
                lastName: "Arten",
                phoneNumber: "555-0184"
            });

            var aliceView = new ContactView({
                model: alice
            });

            ContactManager.mainRegion.show(aliceView);

        });

        ContactManager.start();
        console.log("Application is started. Have a fun!");
    };

    //creates new javascript object with initialize a member
    return {initialize: initialize};

});

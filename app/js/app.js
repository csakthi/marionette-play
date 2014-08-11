/**
 * Created by sakthi on 8/7/14.
 */
// Filename: app.js
define([
    'marionette',
    'backbone',
    'models/Contact',
    'views/ContactView',
    'views/ContactCollectionView',
    'collections/ContactCollection'
], function (Marionette, Backbone, Contact, ContactView, ContactCollectionView, ContactCollection) {

    var initialize = function () {
        console.log("Initializing the application....");

        var ContactManager = new Marionette.Application();
        //console.log(ContactManager);

        ContactManager.addRegions({
            mainRegion: "#main-region"
        });


        ContactManager.addInitializer(function (options) {
            //Backbone.History.start();
            console.log("ContactManager has started!");

            var contactCollection = new ContactCollection([
                {
                    firstName: "Bob",
                    lastName: "Brigham",
                    phoneNumber: "555-0163"
                },
                {
                    firstName: "Alice",
                    lastName: "Arten",
                    phoneNumber: "555-0184"
                },
                {
                    firstName: "Charlie",
                    lastName: "Campbell",
                    phoneNumber: "555-0129"
                }
            ]);


            var contactCollectionView = new ContactCollectionView({
                collection: contactCollection
            });

            ContactManager.mainRegion.show(contactCollectionView);

        });


        ContactManager.start();
        console.log("Application is started. Have a fun!");
    };

    //creates new javascript object with initialize a member
    return {initialize: initialize};

});

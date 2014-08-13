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

        var App = new Marionette.Application();
        //console.log(ContactManager);

        App.addRegions({
            mainRegion: "#main-region"
        });


        App.addInitializer(function (options) {
            //Backbone.History.start();
            console.log("App has started!");

            var contacts = App.request("contact:contacts");
            
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

            App.mainRegion.show(contactCollectionView);

        });


        App.start();
        console.log("Application is started. Have a fun!");
    };

    //creates new javascript object with initialize a member
    return {initialize: initialize};

});

/**
 * Created by sakthi on 8/16/14.
 */
var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: "#main-region"
});


ContactManager.on("start", function () {
    console.log("ContactManager has started!");
    //ContactManager.ContactsApp.List.Controller.listContacts();

    ContactManager.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    ContactManager.getCurrentRoute = function () {
        return Backbone.history.fragment
    };

    if (Backbone.history) {
        Backbone.history.start();

        if (this.getCurrentRoute() === "") {
            ContactManager.trigger("contacts:list");
        }


    }

});
ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#contact-list-item",

        onItemviewContactDelete: function () {
            console.log("fade entire table view and fade in");
            this.$el.fadeOut(1000, function () {
                $(this).fadeIn(1000);
            });
        },

        events: {
            "click": "highlightName",
            "click td a.js-show": "showClicked",
            "click button.js-delete": "deleteClicked"
        },

        highlightName: function (e) {
            this.$el.toggleClass("warning");
            alert(this.$el.text());
        },

        deleteClicked: function (e) {
            e.stopPropagation();
            //to handle in controller instead of view itself
            this.trigger("contact:delete", this.model);
            //this.model.collection.remove(this.model);
            //alert("delete button was clicked");
        },

        showClicked: function (e) {
            console.log("received click on show button");
            e.preventDefault();
            e.stopPropagation();
            //to handle in controller instead of view itself
            this.trigger("contact:show", this.model);
        },

        remove: function () {
            var self = this;
            //fade out does not remove the DOM from memory,
            //call back is to remove the view from memory
            this.$el.fadeOut(function () {
                Marionette.ItemView.prototype.remove.call(self);
            });
        }

    });

    List.Contacts = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        childView: List.Contact,
        childViewContainer: "tbody"
    });
});

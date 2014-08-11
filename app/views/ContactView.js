/**
 * Created by sakthi on 8/7/14.
 */
define([
    'marionette'
], function (Marionette) {

    var ContactView = Marionette.ItemView.extend({ template: "#contact-template",
        events: {
            //<event selector: function name>
            //click is the event, p is paragraph, alertPhoneNumber is handler function
            "click p": "alertPhoneNumber"
        },
        alertPhoneNumber: function () {
            //escape is the same as 'get' but escapes html content, avoid XSS attacks
            alert(this.model.escape("phoneNumber"));
        }
    });
    return ContactView;
});

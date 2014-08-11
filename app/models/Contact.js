/**
 * Created by sakthi on 8/7/14.
 */

define([
    'backbone'
], function (Backbone) {
    var Contact = Backbone.Model.extend({
        defaults: {
            firstname: ""
        }
    });
    return Contact;
});
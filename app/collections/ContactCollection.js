/**
 * Created by sakthi on 8/7/14.
 */

define([
    'backbone'
], function (Backbone) {
    var ContactCollection = Backbone.Collection.extend({
        model: Contact
    });
    return ContactCollection;
});